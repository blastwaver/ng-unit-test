
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    var component: VoteComponent;

    beforeEach(()=>{
        component = new VoteComponent();
    });

    it('should raise voteChaned event when upvoted', () => {
        let totalVote = null;
        component.voteChanged.subscribe(tv => {
            totalVote = tv;
        });

        component.upvote();

        // expect(totalVote).not.toBe(null);
        expect(totalVote).toBe(1);
        
    })
});

