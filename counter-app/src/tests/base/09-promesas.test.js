import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes";

describe('Test on file 09-promesas.js',()=>{
    test('should return a heroe async', ( done ) => {
        const id= 1;
        getHeroeByIdAsync(id)   
        .then(heroe =>{
        expect(heroe).toBe(heroes[0]);

        done();
        });

    });

    test('should return an error message if heroe doenst exist', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
        .catch(error =>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });

    });
    
    
});