import { pratica3 } from '../src/pratica3'

describe("Teste da prática 3", () => {
    test("soma", ()=>{

        const result = pratica3(6,6)

        expect(result.soma).toBe(12)
        expect(result.mult).toBe(36);
    })
})