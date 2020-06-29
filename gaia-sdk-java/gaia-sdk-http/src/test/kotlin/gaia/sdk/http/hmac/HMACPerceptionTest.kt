package gaia.sdk.http.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.http.AuthorizationTestHelper
import gaia.sdk.http.PerceptionTest

class HMACPerceptionTest : PerceptionTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidHMACCredentials()
    }

}