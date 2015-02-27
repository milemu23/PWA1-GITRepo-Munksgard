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
        //randomly select job

//pass row number into the constructor

//main.js writes out the information for person's name and job

//initialize the action - third column

//person object - update() function - changes the action of the person
//display in HTML