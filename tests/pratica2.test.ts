import { pratica2 } from '../src/pratica2'

describe("Teste da prática2", () => {
    test("Retornar TRUE quando recebe número par", () => {
        const result1 = pratica2(10)
        const result2 = pratica2(6);

        expect(result1).toBe(true)
        expect(result2).toBe(true);
    })

    test("Retornar FALSE quando receber um número ímpar", () => {
        const result1 = pratica2(3)
        const result2 = pratica2(9)


        expect(result1).toBe(false)
        expect(result2).toBe(false)
    })
})