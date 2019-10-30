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
        expect(statement).toEqual('query atlas($text1:string, $merge1:boolean, $qualifier1:string) { nlu(text:$text1, merge:$merge1) { ner { custom(qualifier:$qualifier1) { data indices } } } }');
        expect(variables).toEqual({"merge1":false, "qualifier1":"some-qualifier", "text1":"text"});
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
        expect(statement).toEqual('query atlas($text1:string, $merge1:boolean, $qualifier1:string, $qualifier2:string, $qualifier3:string) { nlu(text:$text1, merge:$merge1) { ner { custom(qualifier:$qualifier1) { data indices } custom(qualifier:$qualifier2) { data } custom(qualifier:$qualifier3) { indices negation } } } }');
        expect(variables).toEqual({"merge1":false, "qualifier1":"qualifier-1", "qualifier2":"qualifier-2", "qualifier3":"qualifier-3", "text1":"text"});
    });
});
