import { getImagen } from "../../base/11-async-await"

describe('Test on file 11-async-await.js', () => {
    test('should return an url from giphy.com', async() => {
        const url = await getImagen();
        console.log(url);
        expect(url.includes('http')).toBe(true);
    })
    
})
