import {fixacao} from '../src/fixacao'

describe('teste da prática de fixação', () => {

    test('Separar todas as letras da palavra DEV e armazenar no array', () => {
        
        const expectValue = ['d', 'e', 'v'];
        const wordFunction = fixacao('dev')
        
        expect(wordFunction).toEqual(expectValue)
    })
})