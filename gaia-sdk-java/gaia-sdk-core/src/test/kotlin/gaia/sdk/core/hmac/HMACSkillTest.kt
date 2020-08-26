package gaia.sdk.core.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.SkillTest

class HMACSkillTest : SkillTest(){

    override fun retrieveCredentials() : GaiaCredentials{
        return AuthorizationTestHelper.getValidHMACCredentials()
    }
}
