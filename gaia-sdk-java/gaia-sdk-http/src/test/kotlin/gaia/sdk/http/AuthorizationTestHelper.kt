package gaia.sdk.http

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import gaia.sdk.HMACCredentials
import gaia.sdk.JWTCredentials
import java.math.BigInteger
import java.security.KeyFactory
import java.security.PublicKey
import java.security.interfaces.RSAPrivateKey
import java.security.interfaces.RSAPublicKey
import java.security.spec.RSAPrivateKeySpec
import java.security.spec.RSAPublicKeySpec
import java.time.Instant
import java.time.temporal.ChronoUnit
import java.util.*

class AuthorizationTestHelper {
    companion object{

        //This values have been enabled for testing in the mock server via JWT Auth
        const val PRIVATE_MODULUS="968353031722532892827198147977090214529181114615639794438608528075029656972264649690069353918294267111192755313857054872100912035351333161288814834843532146449130405785539580535086698480458428415972536087964378343969785425981729177595057334446064729602740466080951119851850908330017191842528057713770390064957625393120522118790702125577651838421142044934188950159983045213654777181852377048954807859298824428157454029480440481619730639085480971442178851678100207228747360228462261632506625690331528592134512418751584239887907620748653920239995546162622237749773329985730851090709386982901208163948099806189762470734010370243923034313298908364723386964587424596383352216897139451429041792081099184995675251985181183041525835727870197834031385595648700740280201418713175542194308044798389450696113243318704292357336235964222958642875250469610227994408382463737090826667145852092401086282411469891995389844072588344472130106181693032932438991617829037569505727087159943785019820959933138910720217865501927028093621317516434197218433341634122277229391680138606645804983960523755686512964018995644018048922562916438654519437298251656524513368842233517635913249434638506682653163521919063449362296427930763034453570063114328731354710697847"
        const val PRIVATE_EXPONENT="676489238207187481349473427330868034575949893213947119162873687373348761994265296266385939237303885216272473706297685281051438982964210102025529066000522999115415513351010027239855492366591523667499070635692221159044702319958916164411128141359516419429205937089739629084290431160741369170366428038623427052413444634307795362722027345124848738426744699715685901004389333385140765041029177881339501701788873119287743950527678822809676176509294914269934793250074612627385585862946369021814903804051737263870584808278110576300837122668971284682972307025184194167197493630570537045287983484522466920643297702467187771183958394060500283371043983322747436460776099908536817421305135651331209234551633158657056074983150528152912439370021917759957193246578077844094713487053667648283448981606262239680638320861777874322947074579119971193759071641667283911969292764111721866892344356333969967272016910142709583304832780185600062039713516202215156987270660069018489933586780007047220236033323302401733019611472757035481052342979127615481235921127886428670666163158606834542936043801193103450888653819246943313320546352876196798369225170951522537340718381509462100806927723970849782662029499203204295874106513657709920090459063530804125794532033"
        const val PUBLIC_MODULUS="968353031722532892827198147977090214529181114615639794438608528075029656972264649690069353918294267111192755313857054872100912035351333161288814834843532146449130405785539580535086698480458428415972536087964378343969785425981729177595057334446064729602740466080951119851850908330017191842528057713770390064957625393120522118790702125577651838421142044934188950159983045213654777181852377048954807859298824428157454029480440481619730639085480971442178851678100207228747360228462261632506625690331528592134512418751584239887907620748653920239995546162622237749773329985730851090709386982901208163948099806189762470734010370243923034313298908364723386964587424596383352216897139451429041792081099184995675251985181183041525835727870197834031385595648700740280201418713175542194308044798389450696113243318704292357336235964222958642875250469610227994408382463737090826667145852092401086282411469891995389844072588344472130106181693032932438991617829037569505727087159943785019820959933138910720217865501927028093621317516434197218433341634122277229391680138606645804983960523755686512964018995644018048922562916438654519437298251656524513368842233517635913249434638506682653163521919063449362296427930763034453570063114328731354710697847"
        const val PUBLIC_EXPONENT="65537"
        const val ALGORITHM="RSA"
        const val JWT_ISSUER="leftshift one"
        const val MOCKED_AUTHENTICATED_USER_ID="userId"

        //This values have been enabled for testing in the mock server via HMAC Auth
        const val API_KEY="mockedApiKey"
        const val API_SECRET="mockedApiSecret"

        private fun assembleKeyPair(): Pair<RSAPrivateKey, RSAPublicKey> {
            val priModulus = BigInteger(PRIVATE_MODULUS)
            val priExp = BigInteger(PRIVATE_EXPONENT)
            val pubModulus = BigInteger(PUBLIC_MODULUS)
            val pubExp = BigInteger(PUBLIC_EXPONENT)

            val spec = RSAPublicKeySpec(pubModulus, pubExp)
            val privateSpec = RSAPrivateKeySpec(priModulus, priExp)

            val factory = KeyFactory.getInstance(ALGORITHM)

            val pub: PublicKey = factory.generatePublic(spec)
            val priv = factory.generatePrivate(privateSpec)
            return Pair(priv as RSAPrivateKey, pub as RSAPublicKey)

        }

        fun getValidJWTCredentials(): JWTCredentials{
            val now = Instant.now()
            val keys = assembleKeyPair()
            val jwt = JWT.create()
                    .withJWTId(UUID.randomUUID().toString())
                    .withIssuer(JWT_ISSUER)
                    .withIssuedAt(Date.from(now))
                    .withExpiresAt(Date.from(now.plus(8, ChronoUnit.HOURS)))
                    .withSubject(MOCKED_AUTHENTICATED_USER_ID)
                    .sign(Algorithm.RSA512(keys.second, keys.first))

            return JWTCredentials(jwt)
        }

        fun getValidHMACCredentials(): HMACCredentials{
            return HMACCredentials(API_KEY, API_SECRET)
        }

    }
}