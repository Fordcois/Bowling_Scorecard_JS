class Bowling {
    constructor (){
        this.rolls=[];
    }
    
    viewRolls() {
        console.log(this.rolls)
    }
    addFrame(FirstRoll, SecondRoll='-', ThirdRoll='-') {
        if (FirstRoll===10 && ThirdRoll === '-') {this.rolls.push(FirstRoll)}
        else if (ThirdRoll === '-'){ this.rolls.push(FirstRoll,SecondRoll)}
        else {this.rolls.push(FirstRoll,SecondRoll,ThirdRoll)}
    }
    calculateScore(){
        this.Frames = 1
        let score = 0
        let totalRolls=this.rolls.length;
        let FirstRollinFrame=true;
        for (let i = 0; i < totalRolls; i++) {
            if (this.Frames === 10) {
            // These are the Final Frame Conditions
            if (this.rolls[i] !== 10 && this.rolls[i] + this.rolls[i+1 ]!== 10) {score+= this.rolls[i]+this.rolls[i+1];break}
            // You Get a Strike or spare? Counting Three Balls
            else {score+= 10 + this.rolls[i+1]+this.rolls[i+2]};break;   
        }

            // If First in frame and 10 - A STRIKE THAT CANT BE COUNTED YET
            else if (FirstRollinFrame===true && this.rolls[i]=== 10 && totalRolls < i+2) {;this.Frames+=1}
            // If First in frame and 10 - A STRIKE THAT CAN BE COUNTED ! - Move to next Frame and add the sum of the next two rolls
            else if (FirstRollinFrame===true && this.rolls[i]=== 10 && totalRolls > i+2) {score+=(this.rolls[i]+this.rolls[i+1]+this.rolls[i+2]);this.Frames+=1}
            // If First in frame and not 10 - Add to score and move to second roll of frame
            else if (FirstRollinFrame===true && this.rolls[i]!== 10) {FirstRollinFrame=false}

            // If Second in Frame and frame total is 10 - A SPARE THAT CANT BE COUNTED YET 
            else if (FirstRollinFrame===false && this.rolls[i]+this.rolls[i-1]=== 10 && totalRolls <= i+1) {FirstRollinFrame=true;this.Frames+=1}
             // If Second in Frame and frame total is 10 - A SPARE THAT CAN BE COUNTED! Move to new Frame and add result of next roll
            else if (FirstRollinFrame===false && this.rolls[i]+this.rolls[i-1]=== 10 && totalRolls > i+1) {score+=10+this.rolls[i+1]; FirstRollinFrame=true;this.Frames+=1}
            //If Second in frame and frame total is not 10 - Add to score and move to new frame
            else if (FirstRollinFrame===false && (this.rolls[i]+this.rolls[i-1]!== 10)) {score+=this.rolls[i-1]+this.rolls[i]; FirstRollinFrame=true;this.Frames+=1}
            };
            console.log(`The Score is ${score}`);

    }
    }