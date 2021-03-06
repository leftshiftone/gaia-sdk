package gaia.sdk.core

import com.github.tomakehurst.wiremock.WireMockServer
import com.github.tomakehurst.wiremock.client.WireMock.*
import com.github.tomakehurst.wiremock.core.WireMockConfiguration
import gaia.sdk.JWTCredentials
import gaia.sdk.api.data.DataRefRequestConfig
import gaia.sdk.api.data.response.FileListing
import gaia.sdk.http.TransporterFactory
import io.reactivex.Flowable
import org.junit.jupiter.api.*
import java.io.File
import java.net.URLEncoder
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class GaiaStreamClientTest {

    val wireMockServer = WireMockServer(WireMockConfiguration().port(8083).extensions(HMACAuthHeaderMatcher()))

    @BeforeEach
    fun setup() {
        Gaia.transporterFactory= TransporterFactory()
        wireMockServer.start()
    }

    @AfterEach
    fun teardown() {
        wireMockServer.stop()
    }

    @BeforeAll
    fun resetWiremock() {
        wireMockServer.resetAll()
    }

    @AfterAll
    fun shutdownServer() {
        wireMockServer.shutdown()
    }

    fun configureStub(authSchema: String, errorCode: Int = 200, responseFile: String, uri: String) {
        val stub = post(urlEqualTo(uri))
                .withHeader("Authorization", matching("$authSchema.*"))
                .willReturn(aResponse().withHeader("Content-Type", "application/json")
                        .withStatus(errorCode)
                        .withBodyFile(responseFile))

        wireMockServer.stubFor(stub)
    }


    @Test
    fun `successful file download`() {
        configureStub("Bearer", errorCode = 200, responseFile = "ok_download_file.txt", uri = "/api/data/source")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://tenant/somefolder/existingFile")
        val ts = Flowable.fromPublisher(dataRef.asFile()).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.readLines()[0] == "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." &&
                    it.readLines()[1] == "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." &&
                    it.readLines()[2] == "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." &&
                    it.readLines()[3] == "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    }

    @Test
    fun `successful removed`() {
        configureStub("Bearer", errorCode = 200, responseFile = "ok_removed_response.json", uri = "/api/data/remove")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://tenant/somefolder/file.txt") //TODO assert uri match with file.txt
        val ts = Flowable.fromPublisher(dataRef.remove()).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.fileExisted == true
        }
    }

    @Test
    fun `successful file removed`() {
        configureStub("Bearer", errorCode = 200, responseFile = "ok_removed_response.json", uri = "/api/data/remove")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://tenant/somefolder/")
        val ts = Flowable.fromPublisher(dataRef.removeFile("file.txt")).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.fileExisted == true
        }
    }

    @Test
    fun `successful upload file`() {
        val gaiaStorageUri = "gaia://tenant/somefolder/"
        val fileName = "new_uploaded_file.txt"
        val uploadId = "0123456789" //HardCoded in mapping file ok_data_chunk_upload_response.json
        val sizeInBytes = 446 //HardCoded in mapping file ok_data_chunk_upload_response.json
        configureStub("Bearer", errorCode = 200, responseFile = "ok_data_upload_response.json", uri = "/api/data/sink/init")
        configureStub("Bearer", errorCode = 200, responseFile = "ok_data_chunk_upload_response.json", uri = "/api/data/sink/chunk?uploadId=$uploadId&ordinal=1&sizeInBytes=$sizeInBytes&uri=${URLEncoder.encode("$gaiaStorageUri$fileName", "UTF-8")}")

        configureStub("Bearer", errorCode = 200, responseFile = "ok_data_upload_response.json", uri = "/api/data/sink/complete")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data(gaiaStorageUri)
        val fileToUpload = File("src/test/resources/fileToUpload.txt")

        val ts = Flowable.fromPublisher(dataRef.add(fileName, fileToUpload)).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.getUri() == "gaia://tenant/somefolder/new_uploaded_file.txt"
        }
    }

    @Test
    fun `successful upload file with progress`() {
        val gaiaStorageUri = "gaia://tenant/somefolder/"
        val fileName = "new_uploaded_file.txt"
        val uploadId = "0123456789" //HardCoded in mapping file ok_data_chunk_upload_response.json
        val sizeInBytes = 446 //HardCoded in mapping file ok_data_chunk_upload_response.json
        configureStub("Bearer", errorCode = 200, responseFile = "ok_data_upload_response.json", uri = "/api/data/sink/init")
        configureStub("Bearer", errorCode = 200, responseFile = "ok_data_chunk_upload_response.json", uri = "/api/data/sink/chunk?uploadId=$uploadId&ordinal=1&sizeInBytes=$sizeInBytes&uri=${URLEncoder.encode("$gaiaStorageUri$fileName", "UTF-8")}")

        configureStub("Bearer", errorCode = 200, responseFile = "ok_data_upload_response.json", uri = "/api/data/sink/complete")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data(gaiaStorageUri)
        val fileToUpload = File("src/test/resources/fileToUpload.txt")

        val config = object: DataRefRequestConfig {
            override fun onUploadProgress(progress: Int) {
                val testValue: Int = 100
                assert(progress == testValue)
            }
        }

        val ts = Flowable.fromPublisher(dataRef.add(fileName, fileToUpload, false, config)).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.getUri() == "gaia://tenant/somefolder/new_uploaded_file.txt"
        }
    }

    @Test
    fun `successful file listing`() {
        configureStub("Bearer", errorCode = 200, responseFile = "ok_array_file_listing_response.json", uri = "/api/data/list")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://tenant/somefolder/")
        val ts = Flowable.fromPublisher(dataRef.list()).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it[0] == FileListing("0000-0000-abc", "/0abc/defg", "2020-11-18", 1000) &&
                    it[1] == FileListing("1000-0000-abc", "/1abc/defg", "2020-11-19", 1001) &&
                    it[2] == FileListing("2000-0000-abc", "/2abc/defg", "2020-11-20", 1002) &&
                    it[3] == FileListing("3000-0000-abc", "/3abc/defg", "2020-11-21", 1003) &&
                    it.size == 4
        }
    }


}