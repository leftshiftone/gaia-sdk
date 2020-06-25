package gaia.sdk.http.jwt

import gaia.sdk.GaiaCredentials
import gaia.sdk.http.AuthorizationHelper
import gaia.sdk.http.PerceptionTest

class JWTPerceptionTest : PerceptionTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationHelper.getValidHMACCredentials()
    }

}
