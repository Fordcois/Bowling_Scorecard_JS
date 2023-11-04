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
            console.log(    this.rolls[i]                    );
            // Need to Define a Strike - I
            // 
            // If First in frame and 10 - Move to next Frame and add the sum of the next two rolls
            if (FirstRollinFrame===true && this.rolls[i]=== 10) {console.log('Strike!');this.score+=(this.rolls[i]+this.rolls[i+1]+this.rolls[i+2]);}
            // If First in frame and not 10 - Add to score and move to second roll of frame
            else if (FirstRollinFrame===true && this.rolls[i]!== 10) {console.log('First Roll in a Frame! No Strike!');this.score+=this.rolls[i]; FirstRollinFrame=false}

            // If Second in Frame and frame total is 10 - Move to new Frame and add result of next roll
            else if (FirstRollinFrame===false && this.rolls[i]+[i-1]=== 10) {console.log('Spare!');this.score+=this.rolls[i]+this.rolls[i+1]; FirstRollinFrame=false}
            //If Second in frame and frame total is not 10 - Add to score and move to new frame
            else if (FirstRollinFrame===false && (this.rolls[i]+this.rolls[i-1]!== 10)) {console.log('No Spare!');this.score+=this.rolls[i]; FirstRollinFrame=true};

            

            // This is iterating through the numbers 1-20 which we will use for the index numbers
            
            };

    }
    }







let bowl = new Bowling();
console.log(`-=-=-=-=-=-=-= Frame ${(bowl.Frames)+1} =-=-=-=-=-=-=-=-=-==-=-=-=-`)
bowl.addFrame(1,5)
bowl.calculateScore()
console.log(`The Rolls are currently: ${bowl.rolls}`);
console.log(`The Score is ${bowl.score}`);

console.log(`-=-=-=-=-=-=-= Frame ${(bowl.Frames)+1} =-=-=-=-=-=-=-=-=-==-=-=-=-`)
bowl.addFrame(2,7)
bowl.calculateScore()
console.log(`The Rolls are currently: ${bowl.rolls}`);
console.log(`The Score is ${bowl.score}`);

// bowl.addFrame(10)
// bowl.calculateScore()
// console.log(`The Rolls are currently: ${bowl.rolls}`);
// console.log(`The Score is ${bowl.score}`);