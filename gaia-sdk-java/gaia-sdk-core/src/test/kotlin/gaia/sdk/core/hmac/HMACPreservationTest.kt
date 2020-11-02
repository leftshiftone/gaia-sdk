package gaia.sdk.core.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.PreservationTest
import org.junit.jupiter.api.Disabled

class HMACPreservationTest : PreservationTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationTestHelper.getValidHMACCredentials()
    }
}
