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
    addFrame(FirstRoll, SecondRoll=0) {
        if (FirstRoll===10) {
            this.rolls.push(FirstRoll)
        }
        // If First in frame and not 10 - Add to score and move to second roll of frame
        else { this.rolls.push(FirstRoll,SecondRoll)}
        // this.rolls.push(SecondRoll);
        this.Frames+=1
    }
    calculateScore(){
        this.score = 0
        let totalRolls=this.rolls.length;
        let FirstRollinFrame=true;
        for (let i = 0; i < totalRolls; i++) { 
            console.log(`${i} - First Roll of Frame: ${FirstRollinFrame} - You knocked Down: ${this.rolls[i]}`);

            // If First in frame and 10 - A STRIKE THAT CANT BE COUNTED YET
            if (FirstRollinFrame===true && this.rolls[i]=== 10 && totalRolls < i+2) {console.log('FR - Strike! but it can not be counted yet!');}
            // If First in frame and 10 - A STRIKE THAT CAN BE COUNTED ! - Move to next Frame and add the sum of the next two rolls
            else if (FirstRollinFrame===true && this.rolls[i]=== 10 && totalRolls > i+2) {console.log('FR -Strike! that can be counted!');this.score+=(this.rolls[i]+this.rolls[i+1]+this.rolls[i+2]);}
            // If First in frame and not 10 - Add to score and move to second roll of frame
            else if (FirstRollinFrame===true && this.rolls[i]!== 10) {console.log('FR - First Roll in a Frame! No Strike! So let us wait and see what happens'); FirstRollinFrame=false}

            // If Second in Frame and frame total is 10 - A SPARE THAT CANT BE COUNTED YET 
            else if (FirstRollinFrame===false && this.rolls[i]+this.rolls[i-1]=== 10 && totalRolls <= i+1) {console.log('SR - Spare! but it can not be counted yet'); FirstRollinFrame=true}
             // If Second in Frame and frame total is 10 - A SPARE THAT CAN BE COUNTED! Move to new Frame and add result of next roll
            else if (FirstRollinFrame===false && this.rolls[i]+this.rolls[i-1]=== 10 && totalRolls > i+1) {console.log('SR - Spare!');this.score+=this.rolls[i]+this.rolls[i+1]; FirstRollinFrame=true}
            //If Second in frame and frame total is not 10 - Add to score and move to new frame
            else if (FirstRollinFrame===false && (this.rolls[i]+this.rolls[i-1]!== 10)) {console.log('SR - No Spare!');this.score+=this.rolls[i-1]+this.rolls[i]; FirstRollinFrame=true}

            else {console.log(`No Conditions Met for roll ${this.rolls[i]} `)}

            // This is iterating through the numbers 1-20 which we will use for the index numbers
            
            };

    }
    }

    





let bowl = new Bowling();

// bowl.addFrame(10)


// bowl.addFrame(2,7)


// bowl.addFrame(10)




bowl.addFrame(6,4)
bowl.addFrame(5,5)

bowl.calculateScore()
console.log(`The Score is ${bowl.score}`);
console.log(`The Rolls are: ${bowl.rolls}`);







// bowl.addFrame(10)
// bowl.calculateScore()
// console.log(`The Rolls are currently: ${bowl.rolls}`);
// console.log(`The Score is ${bowl.score}`);