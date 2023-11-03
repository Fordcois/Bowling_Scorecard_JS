class Bowling {
    constructor (){
        this.score=0;
        this.rolls=[];
        this.scorecard=[];
        this.Frames=0;
    }
    returnScore(){
        console.log(this.score)
    }
    viewScoreCard(){
        console.log(this.rolls)
    }
    addFrame(FirstRoll, SecondRoll) {
        this.rolls.push(FirstRoll,SecondRoll);
        // this.rolls.push(SecondRoll);
        this.Frames+=1
    }
    calculateScore(){
        let totalRolls=this.rolls.length;
        let FirstRollinFrame=true;
        for (let i = 0; i < totalRolls-3; i++) { 

            // If First in frame and 10 - Move to next Frame and add the sum of the next two rolls
            // If First in frame and not 10 - Add to score and move to second roll of frame

            // If Second in Frame and frame total is 10 - Move to new Frame and add result of next roll
            //If Second in frame and frame total is not 10 - Add to score and move to new frame
            
            console.log(    this.rolls[i]                    );

            // This is iterating through the numbers 1-20 which we will use for the index numbers
            
            };

    }
    }







let scorecard = new Bowling();

scorecard.addFrame(1,2) // Frame 1
scorecard.addFrame(3,4) // Frame 2
scorecard.addFrame(5,6)  // Frame 3
scorecard.addFrame(7,8) // Frame 4
scorecard.addFrame(9,10) // Frame 5
scorecard.addFrame(11,12) // Frame 6
scorecard.addFrame(13,14) // Frame 7
scorecard.addFrame(15,16) // Frame 8
scorecard.addFrame(17,18) // Frame 9
scorecard.addFrame(19,20) // Frame 10

scorecard.calculateScore()