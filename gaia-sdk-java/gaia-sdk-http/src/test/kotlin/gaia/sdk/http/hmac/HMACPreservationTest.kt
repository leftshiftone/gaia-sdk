package gaia.sdk.http.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.http.AuthorizationHelper
import gaia.sdk.http.PreservationTest

class HMACPreservationTest : PreservationTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationHelper.getValidHMACCredentials()
    }
}
