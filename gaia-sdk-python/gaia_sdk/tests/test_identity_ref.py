import unittest

from rx import operators as ops, pipe
from gaia_sdk.api.GaiaCredentials import UsernamePasswordCredentials
from gaia_sdk.tests.mock import mock_gaia_ref
from gaia_sdk.tests.mock import MockResponse
from gaia_sdk.gaia import Gaia


class TestIdentityRef(unittest.TestCase):

    def test_export_identity_mock(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/identity/source")
            return MockResponse(bytes("identity content", encoding="utf-8"))

        self.gaiaRef = mock_gaia_ref(mock)
        result = pipe(ops.first())(
            self.gaiaRef.identity().export("00000000-0000-0000-0000-000000000000")).run()
        self.assertEqual(result, bytes("identity content", "utf-8"))

    def test_export_identity_no_id(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/identity/source")
            return MockResponse(bytes("identity content", encoding="utf-8"))

        self.gaiaRef = mock_gaia_ref(mock)
        self.assertRaises(TypeError, lambda: pipe(ops.first())(self.gaiaRef.identity().export()).run())

    @unittest.skip("E2E test, for local use or future E2E use")
    def test_export_identity_e2e(self):
        self.gaiaRef = Gaia.login("http://localhost:8080", UsernamePasswordCredentials("admin", "admin"))

        result = pipe(ops.first())(
            self.gaiaRef.identity().export("d32829c8-5900-4346-9577-25e8146d1e78")).run()
        self.assertEqual(len(result), 28311)
