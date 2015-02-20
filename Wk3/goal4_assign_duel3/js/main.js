//Name: Michelle Munksgard
//Date: February 20, 2015
//Assignment: Analyze Duel #3


//Create a self-executing function
(function(){
    
    //prints FIGHT out in console
    console.log("FIGHT!!!");
    
    //define DOM pieces
    //declares fight1_txt variable and finds the paragraph element in the div with id #don 
    var fighter1_txt = document.querySelector("#don").querySelector("p");
    //declares fight1_txt variable and finds the paragraph element in the div with id #leo
    var fighter2_txt = document.querySelector("#leo").querySelector("p");
    //declares the round_text variable and pulls in text between the h2 tag
    var round_txt = document.getElementById("h2");
    //declares button variable and finds elements with id tag fight_button
    var button = document.getElementById("fight_btn");
    
    console.log();
    
    //Setup button with click event to call fight function
    button.addEventListener("click", fight, false);
    

    //created an array combining all player info - add objects
    var fighters = [
        //first player
        {
            name:"Donatello", //index 0 with object-key name Donatello
            damage:20, //index 0 with damage
            health:100 //index 0 with health
        },
        //second player
        {
            name:"Leonardo", //index 1 with object-key name Donatello
            damage:20, //index 1 with damage
            health:100 //index 1 with health
        }];
    

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
    var round = 1;
    
    //initialize DOM innerHTML text for top of page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    //pulls fightername from index 0 and fighters health from object
    fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health;
    //pulls fightername from index 1 and fighters health from object
    fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health;
    
    
    //create a function to execute the code for the fight
    function fight(){
        
    //print to console log
    console.log("in the fight function");
    
    //alert to begin game with full health for each player
    //changed each variables to use the new Array items
    // remove alert: alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);
    fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health;
        
    //if i is less than 10(rounds), then execute, i++ increments by 1
    for (var i=0; i<10; i++){
        
        //set minimum damange
        //changed each variables to use the new Array items
        //comment out to use the array of objects
        // var minDamage1 = playerOne[1] * .5;
        //var minDamage2 = playerTwo[1] * .5;
        
        //generate a random number to determine damage in fight
        //changed each variables to use the new Array items
        //determine damage - change code to use the array of objects
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);
        
        //check to make sure numbers are working
        //console.log(f1);
        //console.log(f2);
        
        //inflict damage - minus number from damage
        //changed each variables to use the new Array items
        //update code to reflect array of objects
        fighters[0].health-=f1;
        fighters[1].health-=f2;
        
        
        //check health is subtracting
        //console.log(playerOneHealth);
        //console.log(playerTwoHealth);
        console.log(fighters[0].health, fighters[1].health);
        
        
        //confirm names match with damage
        //changed each variables to use the new Array items
        //comment out = console.log(playerOne[0]+":"+playerOne[2]+" "+playerTwo[0]+":"+playerTwo[2]);
        
        //check to see if there is a winner - runs winnerCheck function
        var results = winnerCheck();
        //print out results
        console.log(results);
        
        //if results is no winner, increase round number, else both are dead
        //use innerHTML to show round # and results
        round_txt.innerHTML = "ROUND #" + round + " Results:";
        //add a round each time with the increment
        round++;
        if(results === "no winner"){
            //adds one to round
            //changed each variables to use the new Array items
            //comment out alert and use innerHTML and array of objects to display name and health
            //alert(playerOne[0]+":"+playerOne[2]+" *ROUND "+round+" OVER* "+playerTwo[0]+":"+playerTwo[2]);
            fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health;
            fighter1_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health;
            
        }else{
            //make alert with results
            // comment out alert = alert(results);
            //will break out of loop
            //break;
            fighter1_txt.innerHTML = results;
            fighter2_txt.innerHTML = "";
            
            //disable the button
            button.removeEventListener("click", fight, false);
            
            //use query Selector to find element with class buttonblue
            document.querySelector(".buttonble").innerHTML = "DONE!!!";
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
    //update to use array of objects for players
    if(fighters[0].health <1 && fighters[1].health <1){
        results = "You Both Die - GAME OVER!";
    //else if player one's health is less than one, player two wins
        //changed each variables to use the new Array items
        //update code to use array of objects for players
    }else if(fighters[0].health <1){
        results = fighters[1].name + " WINS!!!"
    //else if player's two health is less than one, player one wins
        //changed each variables to use the new Array items
    }else if(fighters[1].health <1){
        results =fighters[0].name + " WINS!!!"
    };
    //return information(result) back to winnerCheck
    return results;
};

//program starts
console.log("program starts");
//fight();

})();
