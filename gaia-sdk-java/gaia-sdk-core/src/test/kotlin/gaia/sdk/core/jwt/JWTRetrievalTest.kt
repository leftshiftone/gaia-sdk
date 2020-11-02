package gaia.sdk.core.jwt

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.RetrievalTest
import org.junit.jupiter.api.Disabled

class JWTRetrievalTest : RetrievalTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidJWTCredentials()
    }
}
