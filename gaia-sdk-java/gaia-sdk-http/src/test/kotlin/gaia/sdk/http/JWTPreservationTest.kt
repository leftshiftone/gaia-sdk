package gaia.sdk.http

import gaia.sdk.GaiaCredentials

class JWTPreservationTest : PreservationTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationHelper.getValidJWTCredentials()
    }

}
