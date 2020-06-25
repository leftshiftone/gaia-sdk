package gaia.sdk.http

import gaia.sdk.GaiaCredentials

class HMACPerceptionTest : PerceptionTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationHelper.getValidHMACCredentials()
    }

}
