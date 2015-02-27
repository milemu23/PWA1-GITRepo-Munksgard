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

    //add Person object to -- main.js needs it
    window.Person=Person;

    //create two variables with all the Person instances = job = with     4 different jobs, actions = 3 different actions
    Person.jobs = ["mechanic", "artist", "accountant", "nurse"];
    Person.actions = ["sleeping", "eating", "working"];

    //Person Object - has name, passing from main.js
    //Person constructor is created
    function Person(name, row){
        console.log("Person Created: ", name);
        
        //name -set in this constructor for the Person
        this.name = name;

        //randomly select action
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
        
        //randomly select job
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //pass row number into the constructor
        this.row = row;

        //main.js writes out the information for person's name and job

        //initialize the action - third column by using HTML id
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }

    //person object - update() function - changes the action of the       person
    //display in HTML
    Person.prototype.update = function(){
        if (Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;
        }
    }
})();