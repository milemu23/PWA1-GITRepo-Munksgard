//Michelle Munksgard
//Feburary 8, 2015
//Buggy Search

// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    //Get the element with the id="results" and store it in resultsDIV
	var resultsDIV = document.getElementById("results"),
        //Search for the first <form> element (index 0) in the document
        //search property sets or returns the querystring part of the URL
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
    //declares validqte as a variable and assigns it to the function query
	var validqte = function(query){
		
		// Trim whitespace from start and end of search query
        //while the character at index 0 is blank
		while(query.charAt(0) == " "){
            //the query extracts the length of query word starting with index 1
			query = query.substring(1, query.length);
		};
        //while the last character is exactly equal to ""
		while(query.charAt(query.length-1) === "") {
			//the query extracts the query word at index 0 and the length of the word minus 1
			query = query.substring(0, query.length - 1);
		};
		
		// Check search length, must have 3 characters
        //if the word length is less than 3 characters
		if(query.length < 3){
            //alert the user that the search query is too small and to try again
			alert("Your search query is too small, try again.");
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
            //call search input, give focus to <a> element
			searchInput.focus();
            //return results
			return;
		};
		
        //call search with query results
		search(query);
	};
	
	// Finds search matches
    //declares function as a variable of search
	var search = function(query){
		
		// split the user's search query string into an array
        //joins search results into an array and declares them as variable queryArray
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
        //for each i(query search) keep checking until the length of the words in the database are greater than i
		for(var i=0, j=db.length; i<j; i++) {

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
				var qitem = queryArray[ii].tolowercase();

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if (compare !== -1) {
					//push the results of the database
					results.push(db[i]);
				}
				;
			}
			;
		};
		//call results and sort the elements of the array
		results.sort();
		
		// Check that matches were found, and run output functions
        //if the result's length is empty
		if(results.length = 0){
            //call no match
			noMatch();
        //else call show matches with the results
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
        //execute no match found if function is called
        //uses html and displays paragraph
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
        //call resultsDIV with html
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
        //call resultsDIV with html
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
		var query = searchInput.value;
		//call validqte with query results
		validqte(query);

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	};

})();