package gaia.sdk.http

import gaia.sdk.GaiaCredentials

class HMACRetrievalTest : RetrievalTest(){

    override fun retrieveCredentials() : GaiaCredentials{
        return AuthorizationHelper.getValidHMACCredentials()
    }
}
