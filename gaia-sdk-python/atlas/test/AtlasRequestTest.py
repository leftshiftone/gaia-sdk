import unittest

from atlas.AtlasRequest import QueryLex, QueryDep, QueryNlu, AtlasRequest, AtlasQueryRequest


class AtlasRequestTest(unittest.TestCase):

    def test_instantiation(self):
        def lex(x: QueryLex):
            x.lemma()
            x.base()
            x.pos()
            x.abbreviations(lambda x: x.lemma())
            x.flexions(lambda x: x.lemma())
            x.hyperonyms(lambda x: x.lemma())
            x.meronyms(lambda x: x.lemma())
            x.parts(lambda x: x.lemma())
            x.causations(lambda x: x.lemma())
            x.collocations(lambda x: x.lemma())
            x.synonyms(lambda x: x.lemma())
            x.labels()

        def dep(x: QueryDep):
            x.source()
            x.target()
            x.sourceBase()
            x.targetBase()
            x.sourceIndex()
            x.targetIndex()
            x.sourcePos()
            x.targetPos()
            x.sourceTag()
            x.targetTag()
            x.relation()
            x.rawRelation()

        def nlu(e: QueryNlu):
            e.raw()
            e.txt()
            e.cls("default")
            e.lex(lex)
            e.dep(dep)

        def config(query: AtlasQueryRequest):
            query.nlu("text", False, nlu)

        request = AtlasRequest.query(config)
        (statement, variables) = request.getStatement()

        self.assertEqual(statement,
                         "query atlas($text1:str, $merge1:bool, $qualifier1:str) {nlu(text:$text1, merge:$merge1) { raw txt cls(qualifier:$qualifier1) lex { lemma base pos abbreviations { lex { lemma } } flexions { lex { lemma } } hyperonyms { lex { lemma } } meronyms { lex { lemma } } parts { lex { lemma } } causations { lex { lemma } } collocations { lex { lemma } } synonyms { lex { lemma } } labels } dep { source target sourceBase targetBase sourceIndex targetIndex sourcePos targetPos sourceTag targetTag relation rawRelation } }}")


if __name__ == '__main__':
    unittest.main()
