package gaia.sdk.core.jwt

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.PreservationTest

class JWTPreservationTest : PreservationTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidJWTCredentials()
    }

}
