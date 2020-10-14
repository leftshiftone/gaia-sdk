package gaia.sdk.core.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.core.AuthorizationTestHelper
import gaia.sdk.core.RetrievalTest
import org.junit.jupiter.api.Disabled

@Disabled
class HMACRetrievalTest : RetrievalTest(){

    override fun retrieveCredentials() : GaiaCredentials{
        return AuthorizationTestHelper.getValidHMACCredentials()
    }
}
