package gaia.sdk.http

import gaia.sdk.GaiaCredentials

class JWTPerceptionTest : PerceptionTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationHelper.getValidHMACCredentials()
    }

}
