package gaia.sdk.core

import com.github.tomakehurst.wiremock.WireMockServer
import com.github.tomakehurst.wiremock.client.WireMock.*
import com.github.tomakehurst.wiremock.core.WireMockConfiguration
import gaia.sdk.JWTCredentials
import gaia.sdk.api.data.response.FileListing
import io.reactivex.Flowable
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.io.File
import java.util.concurrent.TimeUnit

internal class GaiaStreamClientTest {

    val wireMockServer = WireMockServer(WireMockConfiguration().port(8083).extensions(HMACAuthHeaderMatcher()))

    @BeforeEach
    fun setup() {
        wireMockServer.start()
    }

    @AfterEach
    fun teardown() {
        wireMockServer.stop()
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
        configureStub("Bearer", errorCode =200, responseFile = "ok_download_file.txt", uri="/api/data/source")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://usr@tenant/somefolder/existingFile")
        val ts = Flowable.fromPublisher(dataRef.asFile()).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.readLines()[0]=="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." &&
            it.readLines()[1]=="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." &&
            it.readLines()[2]=="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." &&
            it.readLines()[3]=="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    }

    @Test
    fun `successful removed`() {
        configureStub("Bearer", errorCode =200, responseFile="ok_removed_response.json", uri = "/api/data/remove")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://usr@tenant/somefolder/file.txt") //TODO assert uri match with file.txt
        val ts = Flowable.fromPublisher(dataRef.remove()).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.fileExisted==true
        }
    }

    @Test
    fun `successful file removed`() {
        configureStub("Bearer", errorCode =200, responseFile="ok_removed_response.json", uri = "/api/data/remove")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://usr@tenant/somefolder/")
        val ts = Flowable.fromPublisher(dataRef.removeFile("file.txt")).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.fileExisted==true
        }
    }

    @Test
    fun `successful upload file`() {
        //TODO extend test to assert chunkIds are properly sent by complete
        //TODO extend test adding failing cases
        configureStub("Bearer", errorCode =200, responseFile="ok_data_upload_response.json", uri = "/api/data/sink/init")
        configureStub("Bearer", errorCode =200, responseFile="ok_data_chunk_upload_response.json", uri = "/api/data/sink/chunk")
        configureStub("Bearer", errorCode =200, responseFile="ok_data_upload_response.json", uri = "/api/data/sink/complete")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://usr@tenant/somefolder/")
        val fileToUpload= File("src/test/resources/fileToUpload.txt")
        val ts = Flowable.fromPublisher(dataRef.add("new_uploaded_file.txt",fileToUpload)).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.getUri()=="gaia://usr@tenant/somefolder/new_uploaded_file.txt"
        }
    }

    @Test
    fun `successful file listing`() {
        configureStub("Bearer", errorCode =200, responseFile="ok_array_file_listing_response.json", uri = "/api/data/list")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val dataRef = gaiaRef.data("gaia://usr@tenant/somefolder/")
        val ts = Flowable.fromPublisher(dataRef.list()).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it[0] == FileListing("0000-0000-abc","/0abc/defg") &&
                    it[1] == FileListing("1000-0000-abc","/1abc/defg") &&
                    it[2] == FileListing("2000-0000-abc","/2abc/defg") &&
                    it[3] == FileListing("3000-0000-abc","/3abc/defg") &&
                    it.size==4
        }
    }


}