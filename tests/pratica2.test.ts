import { pratica2 } from '../src/pratica2'

describe("pratica 2", ()=> {
    test("should return true when 'n' is pair", ()=> {
        const result = pratica2(10)
        expect(result).toBe(true)
    })

    test("should return false when 'n' isn't pair", ()=> {
        const result = pratica2(1)
        expect(result).toBe(false)
    })
    
    test("should return null when 'n' isn't integer", ()=> {
        const result = pratica2(2.3)
        expect(result).toBe(null)
    })
})