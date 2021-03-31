import unittest

from rx import operators as ops, pipe

from gaia_sdk.api.GaiaCredentials import UsernamePasswordCredentials
from gaia_sdk.gaia import Gaia
from gaia_sdk.tests.mock import MockResponse
from gaia_sdk.tests.mock import mock_gaia_ref


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

    def test_import_identity(self):
        self.gaiaRef = mock_gaia_ref(self.mock_write)
        data = bytes("identity content", encoding="utf-8")
        result = pipe(ops.first())(self.gaiaRef.identity().import_identity('tenantId', 'identityName', data)).run()
        self.assertEqual(result['uri'], 'gaia://tenantId/identities/identityName')
        self.assertEqual(result['partitionKey'], '0123456789')

    @unittest.skip("E2E test, for local use or future E2E use")
    def test_import_identity_e2e(self):
        self.gaiaRef = Gaia.login("http://localhost:8080", UsernamePasswordCredentials("admin", "admin"))
        data = bytes("identity content", encoding="utf-8")
        result = pipe(ops.first())(
            self.gaiaRef.identity().import_identity('2fa4ff18-5c30-497b-9ad2-0d8eb51cd4da',
                                                    'identityName', data, True)).run()
        self.assertEqual(len(result.uri), 72)

        result = pipe(ops.first())(
            self.gaiaRef.data("gaia://2fa4ff18-5c30-497b-9ad2-0d8eb51cd4da/").list()).run()
        self.assertEqual(result[0].dictionary, {'filePath': 'identities/identityName',
                                                'tenant': '2fa4ff18-5c30-497b-9ad2-0d8eb51cd4da'})
        pass

    def mock_write(self, request):
        if request.url_post_fix == "/data/sink/init":
            return MockResponse({"uploadId": "A123"})
        elif request.url_post_fix == "/data/sink/chunk":
            return MockResponse({"chunkId": "B123"})
        elif request.url_post_fix == "/data/sink/complete":
            return MockResponse("asdfqwer")
        elif request.url_post_fix == "/identity/import":
            return MockResponse({'partitionKey': '0123456789', 'uri': 'gaia://tenantId/identities/identityName'})
        else:
            raise RuntimeError('On purpose')
