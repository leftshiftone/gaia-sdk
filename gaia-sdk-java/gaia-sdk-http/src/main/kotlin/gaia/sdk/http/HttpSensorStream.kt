package gaia.sdk.http

import gaia.sdk.api.ISensorStream
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.SkillEvaluation
import gaia.sdk.api.skill.SkillIntrospection
import io.reactivex.Flowable
import org.reactivestreams.Publisher

class HttpSensorStream : ISensorStream {

    override fun evaluateSkill(spec: ISkillSpec, payload: Any): Publisher<SkillEvaluation> {
        return Flowable.empty()
    }

    override fun introspectSkill(url: String): Publisher<SkillIntrospection> {
        return Flowable.empty()
    }

}