package gaia.sdk.http.jwt

import gaia.sdk.GaiaCredentials
import gaia.sdk.http.AuthorizationTestHelper
import gaia.sdk.http.PreservationTest

class JWTPreservationTest : PreservationTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidJWTCredentials()
    }

}
