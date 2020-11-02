package gaia.sdk.core.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.PerceptionTest
import org.junit.jupiter.api.Disabled

class HMACPerceptionTest : PerceptionTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidHMACCredentials()
    }

}
