package gaia.sdk.core.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.SkillTest
import org.junit.jupiter.api.Disabled

class HMACSkillTest : SkillTest(){

    override fun retrieveCredentials() : GaiaCredentials{
        return AuthorizationTestHelper.getValidHMACCredentials()
    }
}
