import {AtlasQueryRequest, AtlasRequest} from '../AtlasRequest';

describe('AtlasRequestTest', () => {

    test('builds ner custom queries', () => {
        const request = AtlasRequest.query((it: AtlasQueryRequest) => {
            it.nlu("text", false, (nlu) => {
                nlu.ner((it: any) => {
                    it.custom('some-qualifier', (it: any) => {
                        it.data();
                        it.indices();
                    });
                });
            });
        });

        const [statement, variables] = request.getStatement();
        expect(statement).toEqual('query atlas($text1:String!, $merge1:Boolean!, $qualifier1:String!) { nlu(text:$text1, merge:$merge1) { ner { custom(qualifier:$qualifier1) { data indices } } } }');
        expect(variables).toEqual({"merge1":false, "qualifier1":"some-qualifier", "text1":"text"});
        expect(request.preprocessors).toEqual([])
    });

    test('builds multiple ner custom queries', () => {
        const request = AtlasRequest.query((it: AtlasQueryRequest) => {
            it.nlu("text", false, (nlu) => {
                nlu.ner((it: any) => {
                    it.custom('qualifier-1', (it: any) => {
                        it.data();
                        it.indices();
                    });
                    it.custom('qualifier-2', (it: any) => {
                        it.data();
                    });
                    it.custom('qualifier-3', (it: any) => {
                        it.indices();
                        it.negation();
                    });
                });
            });
        });

        const [statement, variables] = request.getStatement();
        expect(statement).toEqual('query atlas($text1:String!, $merge1:Boolean!, $qualifier1:String!, $qualifier2:String!, $qualifier3:String!) { nlu(text:$text1, merge:$merge1) { ner { custom(qualifier:$qualifier1) { data indices } custom(qualifier:$qualifier2) { data } custom(qualifier:$qualifier3) { indices negation } } } }');
        expect(variables).toEqual({"merge1":false, "qualifier1":"qualifier-1", "qualifier2":"qualifier-2", "qualifier3":"qualifier-3", "text1":"text"});
    });
});
