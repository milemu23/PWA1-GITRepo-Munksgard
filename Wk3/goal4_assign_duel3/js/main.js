//Name: Michelle Munksgard
//Date: February 20, 2015
//Assignment: Analyze Duel #3


//Create a self-executing function
(function(){
    
    //writes FIGHT out in console
    console.log("FIGHT!!!");

//created an array combining all player info
var playerOne = ["Donatello", 20, 100];
var playerTwo = ["Leonardo", 20, 100];

//Info commented out -- combined info in an Array
/*
//Give Players name using variable
var playerOneName = "Donatello";
var playerTwoName = "Leonardo";

//Set player damage
var player1Damage = 20;
var player2Damage = 20;

//Set player health, 100 is full health
var playerOneHealth = 100;
var playerTwoHealth = 100;
*/
    
//Declare variable to keep track of fighting rounds
var round = 0;
    
//create a function to execute the code for the fight
function fight(){
    //print to console log
    console.log("in the fight function");
    
    //alert to begin game with full health for each player
    //changed each variables to use the new Array items
    alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);
    
    //if i is less than 10(rounds), then execute, i++ increments by 1
    for (var i=0; i<10; i++){
        
        //set minimum damange
        //changed each variables to use the new Array items
        var minDamage1 = playerOne[1] * .5;
        var minDamage2 = playerTwo[1] * .5;
        //generate a random number to determine damage in fight
        //changed each variables to use the new Array items
        var f1 = Math.floor(Math.random() * (playerOne[1]-minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (playerTwo[1]-minDamage2) + minDamage2);
        //check to make sure numbers are working
        //console.log(f1);
        //console.log(f2);
        
        //inflict damage - minus number from damage
        //changed each variables to use the new Array items
        playerOne[2]-=f1;
        playerTwo[2]-=f2;
        //check health is subtracting
        //console.log(playerOneHealth);
        //console.log(playerTwoHealth);
        
        //confirm names match with damage
        //changed each variables to use the new Array items
        console.log(playerOne[0]+":"+playerOne[2]+" "+playerTwo[0]+":"+playerTwo[2]);
        
        //check to see if there is a winner - runs winnerCheck function
        var results = winnerCheck();
        //print out results
        console.log(results);
        
        //if results is no winner, increase round number, else both are dead
        if(results === "no winner"){
            //adds one to round
            //changed each variables to use the new Array items
            round++;
            alert(playerOne[0]+":"+playerOne[2]+" *ROUND "+round+" OVER* "+playerTwo[0]+":"+playerTwo[2]);
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
    //changed each variables to use the new Array items
    if(playerOne[2]<1 && playerTwo[2]<1){
        results = "You Both Die";
    //else if player one's health is less than one, player two wins
        //changed each variables to use the new Array items
    }else if(playerOne[0]<1){
        results =playerTwoName+" WINS!!!"
    //else if player's two health is less than one, player one wins
        //changed each variables to use the new Array items
    }else if(playerTwo[2]<1){
        results =playerOne[0]+" WINS!!!"
    };
    //return information(result) back to winnerCheck
    return results;
};

//program starts
console.log("program starts");
fight();

})();
