import { computes } from './computes';

describe('computes', () => {
    it('should return 0 if input is negative', () =>{
        const result = computes(-1);
        expect(result).toBe(0);
    })

    it('should increment the input if it is positive',() =>{
        const result = computes(1);
        expect(result).toBe(2)
    })
})