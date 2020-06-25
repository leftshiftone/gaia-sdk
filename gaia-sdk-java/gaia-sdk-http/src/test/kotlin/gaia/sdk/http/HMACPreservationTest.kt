package gaia.sdk.http

import gaia.sdk.GaiaCredentials

class HMACPreservationTest : PreservationTest(){

    override fun retrieveCredentials() : GaiaCredentials {
        return AuthorizationHelper.getValidHMACCredentials()
    }
}
