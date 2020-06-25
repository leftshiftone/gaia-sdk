package gaia.sdk.http.hmac

import gaia.sdk.GaiaCredentials
import gaia.sdk.http.AuthorizationHelper
import gaia.sdk.http.RetrievalTest

class HMACRetrievalTest : RetrievalTest(){

    override fun retrieveCredentials() : GaiaCredentials{
        return AuthorizationHelper.getValidHMACCredentials()
    }
}
