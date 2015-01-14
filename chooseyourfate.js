confirm("Ready to Play");

console.log("It's the middle of the night and you're in a parking lot. The ground beneath you starts to shake violently.");

var decision = prompt("Do you run or wait? Type run or wait to proceed.");

if (decision === "run")
{
    console.log("Good call! You sprint away just before the ground beneath you begins to collapse into the earth. The shaking has stopped. You take a moment to catch your breath and look behind you. The ground where you once stood is gone and all that's left is a large crater.");   
}
else {
    console.log("Bad Move! The ground beneath you gives way and you begin to fall into the earth"); 
    confirm("Game Over! You're dead!");  
}

var decision2 =  prompt("Do you inspect the crater or keep running? Type inspect or run to proceed.");

if (decision2 === "inspect")
{
	console.log("You walk closely to the edge of the crater, it's pitch black and seems to have no bottom. You hear the sound of someone crying in the crater.");
	var decision3 = prompt("Do you jump in or throw a rock. Press Jump or Throw to proceed.");
		if (decision3 === "jump")
		{	
			console.log("You take a few steps back and bravely dive into the chasm below to help. Bad move, the devil appears before you in a puff of smoke and challenges you to a game!");
		}
		else 
		{
			console.log("You grab a rock close to your foot and toss it into the chasm below like a coward. Bad move, the devil appears before you in a puff of smoke and challenges you to a game!")
		}
}
else {
	console.log("You decide to keep running and get as far away from this place as possible. Bad move, the devil appears before you in a puff of smoke and challenges you to a game!");
}

var decision4 = prompt("Do you want to play the game!?");

if (decision4 === "yes")
{
	console.log("Let's Play! Mwahahahah!")

	var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2)
{
    if (choice1 === choice2)
    {
        return "The result is a tie!";
    }
    
    else if (choice1 === "rock")
    {
        if (choice2 === "scissors")
        {
            return "rock wins";   
        }
        else 
        {
            return "paper wins";   
        }
    }
    
    else if (choice1 === "paper")
    {
        if (choice2 === "rock") 
        {
            return "paper wins";
        }
        
        else 
        {
            return "scissors wins";   
        }
    }
    
    else if (choice1 === "scissors")
    {
        if (choice2 === "rock") 
        {
            return "rock wins";
        }
        
        else 
        {
            return "scissors wins";   
        }
    }
};

compare(userChoice, computerChoice);



}
else {
	console.log("Oh no, you're dead!");
	alert("Game OVER!");
}

