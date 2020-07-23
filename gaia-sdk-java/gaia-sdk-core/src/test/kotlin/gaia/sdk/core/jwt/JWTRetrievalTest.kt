package gaia.sdk.core.jwt

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.RetrievalTest

class JWTRetrievalTest : RetrievalTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidJWTCredentials()
    }
}
