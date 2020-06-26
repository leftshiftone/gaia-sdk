package gaia.sdk.http.jwt

import gaia.sdk.GaiaCredentials
import gaia.sdk.http.AuthorizationTestHelper
import gaia.sdk.http.RetrievalTest

class JWTRetrievalTest : RetrievalTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidJWTCredentials()
    }
}
