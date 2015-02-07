//Name: Michelle Munksgard
//Date: February 7, 2015
//Assignment: Analyze Duel #1


//Create a self-executing function
(function(){
    
    //writes FIGHT out in console
    console.log("FIGHT!!!");
                
//Give Players name using variable
var playerOneName = "Spiderman";
var playerTwoName = "Batman";

//Set player damage
var player1Damage = 20;
var player2Damage = 20;

//Set player health, 100 is full health
var playerOneHealth = 100;
var playerTwoHealth = 100;

//Declare variable to keep track of fighting rounds
var round = 0;
    
//create a function to execute the code for the fight
function fight(){
    //print to console log
    console.log("in the fight function");
    
    //alert to begin game with full health for each player
    alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
    
    //if i is less than 10(rounds), then execute, i++ increments by 1
    for (var i=0; i<10; i++){
        
        //set minimum damange
        var minDamage1 = player1Damage * .5;
        var minDamage2 = player2Damage * .5;
        //generate a random number to determine damage in fight
        var f1 = Math.floor(Math.random() * (player1Damage-minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (player2Damage-minDamage2) + minDamage2);
        //check to make sure numbers are working
        //console.log(f1);
        //console.log(f2);
        
        //inflict damage - minus number from damage
        playerOneHealth-=f1;
        playerTwoHealth-=f2;
        //check health is subtracting
        //console.log(playerOneHealth);
        //console.log(playerTwoHealth);
        
        //confirm names match with damage
        console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);
        
        //check to see if there is a winner - runs winnerCheck function
        var results = winnerCheck();
        //print out results
        console.log(results);
        
        //if results is no winner, increase round number, else both are dead
        if(results === "no winner"){
            //adds one to round
            round++;
            alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
        }else{
            //make alert with results
            alert(results);
            //will break out of loop
            break;
        };
    };
};

//Create a function to check for a winner
function winnerCheck(){
    //print in console log to confirm function is working
    console.log("in winnerCheck FN");
    
    //set variable to no winner at first
    var results = "no winner";
    //if player one's health is less than 1 and player two's health is less than one, both have died
    if(playerOneHealth<1 && playerTwoHealth<1){
        results = "You Both Die";
    //else if player one's health is less than one, player two wins
    }else if(playerOneHealth<1){
        results =playerTwoName+" WINS!!!"
    //else if player's two health is less than one, player one wins
    }else if(playerTwoHealth<1){
        results =playerOneName+" WINS!!!"
    };
    //return information(result) back to winnerCheck
    return results;
};

//program starts
console.log("program starts");
fight();

})();
