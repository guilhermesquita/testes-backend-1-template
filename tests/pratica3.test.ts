import { pratica3 } from '../src/pratica3'

describe('pratica3', () => {
    test("should return an object with sum and mult", () => {
        const mockValue1 = 3
        const mockValue2 = 9
        const mock = pratica3(mockValue1, mockValue2)

        const result = {
            sum: mockValue1 + mockValue2,
            mult: mockValue1 * mockValue2
        }

        expect(mock).toStrictEqual(result)
    })
})