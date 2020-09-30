package gaia.sdk.core.jwt

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.SkillTest
import org.junit.jupiter.api.Disabled

@Disabled
class JWTSkillTest : SkillTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidJWTCredentials()
    }
}
