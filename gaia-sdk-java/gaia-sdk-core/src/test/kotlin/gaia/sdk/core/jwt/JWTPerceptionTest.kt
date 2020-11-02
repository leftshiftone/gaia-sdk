package gaia.sdk.core.jwt

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.PerceptionTest
import org.junit.jupiter.api.Disabled

class JWTPerceptionTest : PerceptionTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidHMACCredentials()
    }

}
