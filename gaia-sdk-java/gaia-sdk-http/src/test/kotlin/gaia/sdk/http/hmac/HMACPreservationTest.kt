package gaia.sdk.http.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.http.AuthorizationTestHelper
import gaia.sdk.http.PreservationTest

class HMACPreservationTest : PreservationTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidHMACCredentials()
    }
}
