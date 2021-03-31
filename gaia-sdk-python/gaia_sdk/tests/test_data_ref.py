import logging
import tempfile
import unittest
from pathlib import Path

from rx import operators as ops, pipe

from gaia_sdk.api.data.DataRef import DataRefRequestConfig
from gaia_sdk.http.response.FileListing import FileListing
from gaia_sdk.tests.mock import MockResponse
from gaia_sdk.tests.mock import mock_gaia_ref

logging.basicConfig(level=logging.DEBUG)


class TestDataRef(unittest.TestCase):

    def test_retrieve_data_as_bytes(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/data/source")
            return MockResponse(bytes("hello world", encoding="utf-8"))

        self.gaiaRef = mock_gaia_ref(mock)
        result: bytes = pipe(ops.first())(
            self.gaiaRef.data("gaia://tenant/somefolder/somefolder/asdf1.pdf").as_bytes()).run()
        self.assertEqual(result, bytes("hello world", "utf-8"))

    def test_retrieve_data_as_file(self):
        file = Path(tempfile.gettempdir()) / "file"
        content = b"binary data \x01\x00"

        def mock(request):
            self.assertEqual(request.url_post_fix, "/data/source")
            return MockResponse(content)

        self.gaiaRef = mock_gaia_ref(mock)
        result: Path = pipe(ops.first())(
            self.gaiaRef.data("gaia://tenant/somefolder/somefolder/file").as_file(str(file))).run()
        self.assertEqual(result, file)
        self.assertEqual(result.read_bytes(), content)

    def test_write_new_file_with_bytes(self):
        self.gaiaRef = mock_gaia_ref(self.mock_write)
        data = bytes("234", encoding="utf-8")
        response = self.gaiaRef.data("gaia://tenant/somefolder").add("newFile", data)
        assert pipe(ops.first())(response).run().uri == "gaia://tenant/somefolder/newFile"

    def test_write_new_file_with_path(self):
        file = Path(tempfile.gettempdir()) / "file"
        self.gaiaRef = mock_gaia_ref(self.mock_write)
        with open(str(file), "wb+") as f:
            f.write(b"f\x00\x00bar")
        path = Path(file)
        response = self.gaiaRef.data("gaia://tenant/somefolder").add("newFile", path)
        assert pipe(ops.first())(response).run().uri == "gaia://tenant/somefolder/newFile"

    def test_overwrite_existing_file_doesnt_work(self):
        self.gaiaRef = mock_gaia_ref(self.mock_write_existing_fail)
        data = bytes("234", encoding="utf-8")
        self.assertRaises(Exception,
                          lambda: self.gaiaRef.data("gaia://tenant/somefolder").add("existingFile", data).pipe(
                              ops.first()).run())

    def test_write_new_file_progress(self):
        self.gaiaRef = mock_gaia_ref(self.mock_write)
        data = bytes("234", encoding="utf-8")

        def test_progress(value):
            assert value == 100

        config: DataRefRequestConfig = DataRefRequestConfig(test_progress)

        response = self.gaiaRef.data("gaia://tenant/somefolder").add("newFile", data, False, config)
        assert pipe(ops.first())(response).run().uri == "gaia://tenant/somefolder/newFile"

    def test_overwrite_file(self):
        self.gaiaRef = mock_gaia_ref(self.mock_write)
        data = bytes("234", encoding="utf-8")
        response = self.gaiaRef.data("gaia://tenant/somefolder").add("existingFile", data, override=True)
        assert pipe(ops.first())(response).run().uri == "gaia://tenant/somefolder/existingFile"

    def test_list_files_in_existing_dir(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/data/list")
            return MockResponse([{"tenant": "tenant1", "filePath": "existingDirectory/file1",
                                  "lastModified": "2020-11-18", "size": "1000"}])

        self.gaiaRef = mock_gaia_ref(mock)
        result = pipe(ops.first())(self.gaiaRef.data("gaia://tenant1/existingDirectory").list()).run()
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0], FileListing({"tenant": "tenant1", "filePath": "existingDirectory/file1",
                                                 "lastModified": "2020-11-18", "size": "1000"}))

    def test_list_files_in_nonexistent_dir(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/data/list")
            return MockResponse([])

        self.gaiaRef = mock_gaia_ref(mock)
        result = pipe(ops.first())(self.gaiaRef.data("gaia://tenant1/nonexistentDirectory").list()).run()
        self.assertEqual(len(result), 0)

    def test_remove_existing_file(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/data/remove")
            return MockResponse({"fileExisted": True})

        self.gaiaRef = mock_gaia_ref(mock)
        result = pipe(ops.first())(self.gaiaRef.data("gaia://tenant/somefolder/existingFile").remove()).run()
        self.assertEqual(result.file_existed, True)

    def test_remove_nonexistent_file(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/data/remove")
            return MockResponse({"fileExisted": False})

        self.gaiaRef = mock_gaia_ref(mock)
        result = pipe(ops.first())(self.gaiaRef.data("gaia://tenant/somefolder/nonexistentFile").remove()).run()
        self.assertEqual(result.file_existed, False)

    def mock_write(self, request):
        if request.url_post_fix == "/data/sink/init":
            return MockResponse({"uploadId": "A123"})
        elif request.url_post_fix == "/data/sink/chunk":
            return MockResponse({"chunkId": "B123"})
        elif request.url_post_fix == "/data/sink/complete":
            return MockResponse("asdfqwer")
        else:
            raise RuntimeError('On purpose')

    def mock_write_existing_fail(self, request):
        if request.url_post_fix == "/data/sink/init":
            raise RuntimeError('On purpose')
        else:
            return MockResponse({"x": "y"})
