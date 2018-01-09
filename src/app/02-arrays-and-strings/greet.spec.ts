import { greet } from './greet';

describe('greet', () => {
    it('should include the Wellcome message infront of  the input', () => {
        expect(greet('Kyeongho')).toContain('Kyeongho');
    })
})