import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes";

describe('Test on file 09-promesas.js',()=>{
    test('should return a heroe async', ( done ) => {
        const id= 1;
        getHeroeByIdAsync(id)   
        .then(heroe =>{
        expect(true).toBe(false);
        done();
        })

    })
    
})