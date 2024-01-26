interface IPratica3{
    sum: number,
    mult: number
}

export const pratica3 = (x:number, y: number): IPratica3 => {
    return {
        sum: x + y,
        mult: x * y
    }
}