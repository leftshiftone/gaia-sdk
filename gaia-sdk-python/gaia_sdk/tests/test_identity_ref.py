import unittest

from rx import operators as ops, pipe
from rx.core import Observer
from rx.core.typing import Observable

from gaia_sdk.api.GaiaCredentials import UsernamePasswordCredentials
from gaia_sdk.tests.mock import mock_gaia_ref
from gaia_sdk.tests.mock import MockResponse

from gaia_sdk.gaia import Gaia


class TestIdentityRef(unittest.TestCase):

    @unittest.skip("Unfinished test")
    def test_export_identity_mock(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/identity/source")
            return MockResponse(bytes("hello world", encoding="utf-8"))

        self.gaiaRef = mock_gaia_ref(mock)
        result = pipe(ops.first())(
            self.gaiaRef.identity("00000000-0000-0000-0000-000000000000").export()).run()
        self.assertEqual(result, bytes("hello world", "utf-8"))

    @unittest.skip("Unfinished test")
    def test_export_identity_no_id(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/identity/source")
            return MockResponse(bytes("hello world", encoding="utf-8"))

        self.gaiaRef = mock_gaia_ref(mock)
        self.assertRaises(ValueError, lambda: pipe(ops.first())(self.gaiaRef.identity().export()).run())

    @unittest.skip("Debug test on local system")
    def test_export_data_real(self):
        self.gaiaRef = Gaia.login("http://localhost:8080", UsernamePasswordCredentials("admin", "admin"))
        obs: Observable[bytes] = self.gaiaRef.\
            data("gaia://21232f29-7a57-35a7-8389-4a0e4a801fc3@e3514269-a8a8-45df-8df8-851eccff6f55/test.txt").as_bytes()
        file: bytes

        def on_next(i: bytes):
            nonlocal file
            print(f"Got - {i}")
            file = i

        def on_error(e):
            print(f"Error : {e}")

        def on_completed():
            print("Job Done.")
            print(f"file: {file}")

        obs.subscribe(Observer(
            on_next=lambda i: on_next(i),
            on_error=lambda e: on_error(e),
            on_completed=lambda: on_completed()
        ))

    @unittest.skip("Debug test on local system")
    def test_export_identity_real(self):
        self.gaiaRef = Gaia.login("http://localhost:8080", UsernamePasswordCredentials("admin", "admin"))
        obs: Observable[bytes] = self.gaiaRef.identity("d32829c8-5900-4346-9577-25e8146d1e78").export()
        identity: bytes

        def on_next(i: bytes):
            nonlocal identity
            print(f"Got - {i}")
            identity = i

        def on_error(e):
            print(f"Error : {e}")

        def on_completed():
            print("Job Done.")
            print(f"identity: {identity}")
            print(f"size: {len(identity)}")
            self.assertEqual(len(identity), 21582)

        obs.subscribe(Observer(
            on_next=lambda i: on_next(i),
            on_error=lambda e: on_error(e),
            on_completed=lambda: on_completed()
        ))
