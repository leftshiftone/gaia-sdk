package gaia.sdk.http

import gaia.sdk.GaiaCredentials

class JWTRetrievalTest : RetrievalTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationHelper.getValidJWTCredentials()
    }
}
