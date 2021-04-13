import { retornaArreglo } from "../../base/07-deses-arr"

describe('Test on 07-deses-arr.js',()=>{
    test('should return a string and a number', () => {
     
        const [letras,numeros]= retornaArreglo();
        // const arr= retornaArreglo();
        // expect(arr).toEqual(['ABC',123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
        
    })
    
})