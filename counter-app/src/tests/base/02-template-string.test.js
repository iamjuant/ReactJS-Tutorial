// @ts-nocheck
import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string'

describe('Test on 02-template-string.js',()=>{
    test('should return Hola Juan', () => {

        const nombre = 'Juan';
        const saludo = getSaludo(nombre);
        console.log(saludo);
        expect(saludo).toBe('Hola '+ nombre);

    })
    
})