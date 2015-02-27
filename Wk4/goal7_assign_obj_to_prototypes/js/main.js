/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

//Michelle Munksgard
//February 27, 2015
// OBJECTS.Person

//self-executing function
(function(){

    //Define all variables
    var numOfPeople = 3;
    var people = [];
    //create an array = names, store fives names
    var names = ["Michelle", "Jenny", "Krissy", "Daylyn", "Boe"];
    var interval;
    

    //create three instances of the Person object using a for loop
    for (var i = 0; i < numOfPeople ; i++) {
        
        //generate random number from name index
        var personIndex = Math.floor(Math.random()*names.length);


        //create person object & randomly select names using Math.random
        var person = new Person(names[personIndex], i+1);
        
        //create function = populateHTML - outputs the person's name and job in the DOM
        //do not allow duplicate names
        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");
        
        //allow only one interval at a time
        clearInterval(interval);

        //set up interval that calls runUpdate() function - 30 times a second - ACTION
        setInterval(runUpdate, 1000 / 30);
        
        //call populateHTML function
        function populateHTML(data, field){
            var id=document.getElementById(field);
            id.innerHTML = data;
        }
        

    //run prototype update() function
        function runUpdate(){
            people.forEach(function(element){
                console.log(element);
                
            //update - the prototype methond in person.js
                element.update();
            });
        }
    })();