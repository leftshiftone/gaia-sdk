import logging
import unittest

from rx import operators as ops, pipe
from gaia_sdk.gaia import Gaia
from gaia_sdk.api.GaiaCredentials import HMACCredentials

from gaia_sdk.http.response.FileListing import FileListing
from gaia_sdk.tests.mock import mock_gaia_ref
from gaia_sdk.tests.mock import MockResponse


logging.basicConfig(level=logging.DEBUG)

class TestDataRef(unittest.TestCase):

    def test_http_error_produces_exception(self):
        gaia_ref = Gaia.connect("https://beta.gaia.leftshift.one", HMACCredentials("incorrectApiKey", "incorrectSecret"))
        self.assertRaises(Exception, lambda: pipe(ops.first())(
            gaia_ref.data("gaia://usr@tenant/somefolder/somefolder/asdf1.pdf").as_bytes()).run())

    def test_retrieve_data(self):
        self.gaiaRef = mock_gaia_ref(lambda x: MockResponse(bytes("hello world", encoding="utf-8")))
        result = pipe(ops.first())(
            self.gaiaRef.data("gaia://usr@tenant/somefolder/somefolder/asdf1.pdf").as_bytes()).run()
        self.assertEqual(result, bytes("hello world", "utf-8"))

    def test_write_new_file(self):
        self.gaiaRef = mock_gaia_ref(self.mock_write)
        data = bytes("234", encoding="utf-8")
        response = self.gaiaRef.data("gaia://usr@tenant/somefolder").add("newFile", data)
        assert pipe(ops.first())(response).run().uri == "gaia://usr@tenant/somefolder/newFile"

    def test_overwrite_existing_file_doesnt_work(self):
        self.gaiaRef = mock_gaia_ref(self.mock_write_existing_fail)
        data = bytes("234", encoding="utf-8")
        self.assertRaises(Exception,
                          lambda: self.gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", data).pipe(
                              ops.first()).run())

    def test_overwrite_file(self):
        self.gaiaRef = mock_gaia_ref(self.mock_write)
        data = bytes("234", encoding="utf-8")
        response = self.gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", data, override=True)
        assert pipe(ops.first())(response).run().uri == "gaia://usr@tenant/somefolder/existingFile"

    def test_list_files_in_existing_dir(self):
        self.gaiaRef = mock_gaia_ref(lambda request: MockResponse([{"tenant": "tenant1", "filePath": "existingDirectory/file1"}]))
        result = pipe(ops.first())(self.gaiaRef.data("gaia://usr@tenant1/existingDirectory").list()).run()
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0], FileListing({"tenant": "tenant1", "filePath": "existingDirectory/file1"}))

    def test_list_files_in_nonexistent_dir(self):
        self.gaiaRef = mock_gaia_ref(lambda request: MockResponse([]))
        result = pipe(ops.first())(self.gaiaRef.data("gaia://usr@tenant1/nonexistentDirectory").list()).run()
        self.assertEqual(len(result), 0)

    def test_remove_existing_file(self):
        self.gaiaRef = mock_gaia_ref(lambda request: MockResponse({"fileExisted": True}))
        result = pipe(ops.first())(self.gaiaRef.data("gaia://usr@tenant/somefolder/existingFile").remove()).run()
        self.assertEqual(result.file_existed, True)

    def test_remove_nonexistent_file(self):
        self.gaiaRef = mock_gaia_ref(lambda request: MockResponse({"fileExisted": False}))
        result = pipe(ops.first())(self.gaiaRef.data("gaia://usr@tenant/somefolder/nonexistentFile").remove()).run()
        self.assertEqual(result.file_existed, False)

    def mock_write(self, request):
        print("request:")
        print(request)
        if request.url_post_fix == "/data/sink/init":
            return MockResponse({"uploadId": "A123"})
        elif request.url_post_fix == "/data/sink/chunk":
            return MockResponse({"chunkId": "B123"})
        else:
            return MockResponse("asdfqwer")

    def mock_write_existing_fail(self, request):
        if request.url_post_fix == "/data/sink/init":
            raise RuntimeError('On purpose')
        else:
            return MockResponse({"x": "y"})
