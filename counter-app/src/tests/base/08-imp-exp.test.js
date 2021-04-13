import { getHeroeById } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';
describe('Test on 08-imp-exp.js',()=>{
    test('should return a heroe per Id', () => {
        const id =1;
        const heroe = getHeroeById(id);
        console.log(heroe);
        const heroeData = heroes.find(h => h.id === id);
        expect( heroe ).toEqual(heroeData);
    })
    test('should return undefined if heroe doesnt exist', () => {
        const id =10;
        const heroe = getHeroeById(id);
        expect( heroe ).toEqual(undefined);
    })

    
})  