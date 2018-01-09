import { VoteComponent } from './vote.component';

describe("VoteComponent", () => {
    //Arrange
    let component: VoteComponent;
    
    beforeEach(()=>{
        component = new VoteComponent();
    });

    afterEach(() => {});
    beforeAll(() => {});
    afterAll(() => {});

    it('should increment totalvote when upvote', () => {
        
        //Act
        component.upVote();
        
        //Assersion
        expect(component.totalVote).toBe(1);

    });

    it('should decrement totalvote when downvote', () => {
      
        
        //Act
        component.downVote();
        
        //Assersion
        expect(component.totalVote).toBe(-1);

    });


})