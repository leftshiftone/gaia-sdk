import logging
import unittest
import pytest

from rx import operators as ops, pipe

from gaia_sdk.api.GaiaCredentials import UsernamePasswordCredentials, HMACCredentials
from gaia_sdk.gaia import Gaia
from gaia_sdk.http.response.FileListing import FileListing

logging.basicConfig(level=logging.DEBUG)

@pytest.mark.skip(reason="...")
class TestDataRef(unittest.TestCase):

    def setUp(self):
        self.gaiaRef = Gaia.login("http://localhost:8080", UsernamePasswordCredentials("username", "password"))

    def test_http_error_produces_exception(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("incorrectApiKey", "incorrectSecret"))
        self.assertRaises(Exception, lambda: pipe(ops.first())(
            gaia_ref.data("gaia://usr@tenant/somefolder/somefolder/asdf1.pdf").as_bytes()).run())

    def test_retrieve_data(self):
        result = pipe(ops.first())(
            self.gaiaRef.data("gaia://usr@tenant/somefolder/somefolder/asdf1.pdf").as_bytes()).run()
        self.assertEqual(result, bytes("hello world", "utf-8"))

    def test_write_new_file(self):
        data = bytes("234", encoding="utf-8")
        response = self.gaiaRef.data("gaia://usr@tenant/somefolder").add("newFile", data)
        assert pipe(ops.first())(response).run().uri == "gaia://usr@tenant/somefolder/newFile"

    def test_overwrite_existing_file_doesnt_work(self):
        data = bytes("234", encoding="utf-8")
        self.assertRaises(Exception,
                          lambda: self.gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", data).pipe(
                              ops.first()).run())

    def test_overwrite_file(self):
        data = bytes("234", encoding="utf-8")
        response = self.gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", data, override=True)
        assert pipe(ops.first())(response).run().uri == "gaia://usr@tenant/somefolder/existingFile"

    def test_list_files_in_existing_dir(self):
        result = pipe(ops.first())(self.gaiaRef.data("gaia://usr@tenant1/existingDirectory").list()).run()
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0], FileListing({"tenant": "tenant", "filePath": "existingDirectory/file1"}))

    def test_list_files_in_nonexistent_dir(self):
        result = pipe(ops.first())(self.gaiaRef.data("gaia://usr@tenant1/nonexistentDirectory").list()).run()
        self.assertEqual(len(result), 0)

    def test_remove_existing_file(self):
        result = pipe(ops.first())(self.gaiaRef.data("gaia://usr@tenant/somefolder/existingFile").remove()).run()
        self.assertEqual(result.file_existed, True)

    def test_remove_nonexistent_file(self):
        result = pipe(ops.first())(self.gaiaRef.data("gaia://usr@tenant/somefolder/nonexistentFile").remove()).run()
        self.assertEqual(result.file_existed, False)
