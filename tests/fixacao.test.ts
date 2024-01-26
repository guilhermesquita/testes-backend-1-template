import { fixacao } from '../src/fixacao'

describe('fixacao', () => {
    test('should return words separated by spaces', () => {
        const mockWords = 'DEV'
        const result = ['D', 'E', 'V']

        const mock = fixacao(mockWords)

        expect(mock).toEqual(result)
    })
})