import {PerceiveActionImpulse, PerceiveDataImpulse} from '../graphql';
import {v4 as uuid} from 'uuid';
import {Mock} from '../mock/mock';
import sleep from "./utils/sleep";

describe('perception tests:', () => {

    test('test perceive data', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: { perceive: { perceiveData: {id: 'asdf'}}}})
        );
        const impulse = new PerceiveDataImpulse(uuid(), '{eventName}', {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.perceiveData(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test perceive action', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: { perceive: { perceiveAction: {id: 'asdf'}}}})
        );
        const impulse = new PerceiveActionImpulse(false, uuid(), '{eventName}', {});
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.perceiveAction(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e); },   reject);
        });
    });

    test('test perceive', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: { perceive: { perceiveData: {id: 'asdf'}, perceiveAction: {id: 'qwer'}}}})
        );
        const impulse1 = new PerceiveActionImpulse(false, uuid(), '{eventName}', {});
        const impulse2 = new PerceiveDataImpulse(uuid(), '{eventName}', {});
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.perceive(p => {
                p.perceiveAction(impulse1, _ => _.id());
                p.perceiveData(impulse2, _ => _.id());
            });
            observable.subscribe(e => {
                expect(e !== undefined).toBeTruthy();
                expect(e.perceiveData!!.id !== undefined).toBeTruthy();
                expect(e.perceiveAction!!.id !== undefined).toBeTruthy();
                resolve(e); },   reject);
        });
    });

    test('test async behaviour of observable (Perception)', () => {
        return new Promise(async (resolve, reject) => {
            const mock = jest.fn(() => JSON.stringify({data: { perceive: { perceiveData: {id: 'asdf'}}}}));
            const gaiaRef = Mock.gaiaRef(mock);

            const impulse = new PerceiveDataImpulse(uuid(), '{eventName}', {});
            const observable = gaiaRef.perceiveData(impulse);
            await sleep(250);
            expect(mock.mock.calls.length).toBe(0);

            observable.subscribe(() => {
                expect(mock.mock.calls.length).toBe(1);
                resolve();
            },                   reject);
        });
    });

});
