/*global confirm:false, alert:false, window:false*/
// The global jslint comment can contain a comma separated list of names. 
// Each name can optionally be followed by a colon and either true or false, 
// true indicating that the variable may be assigned to by this file, and 
// false indicating that assignment is not allowed (which is the default).
/*jslint browser:true*/
// true if the standard browser globals should be predefined. 
// This option will reject the use of import and export from the new sixth edition of ECMAScript [ES6]. 
// This option also disallows the file form of the 'use strict' pragma. 
// It does not supply self or window; 
// you will have to request these aliases of the dreaded global object yourself.

/*
 * INSTRUCTIONS:
 * Make a guessing game where the computer guesses what the human user's
 * number is between 0 and 100 (inclusive). Do NOT use Arrays and do NOT use a linear search algorithm!
 * Use if-else and confirm("some question") inside the while-loop.
 * The human is expected to click the cancel button to indicate No (confirm function retuns false)
 * or the OK button to indicate Yes (confirm function returns true).
 * Do NOT change the line "guess = Math.round((min + max) / 2);"
 * because the computer is supposed to guess efficiently by
 * asking the human if their number is higher, lower, or equal to
 * the computer's current guess.
 * You can use "return" inside the while-loop to get the computer
 * to leave the guesser function.
 * For info on how while loops work see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * For info on how return works see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 */
const guesser = () => {
    let min = 0;
    let max = 100;
    let guess;

    alert("Think of a number between 0 and 100"); //Initial alert to notify the user of the number restrictions
    while (min <= max) { //a while loop used to ensure the code executes until the correct number is guessed
    guess = Math.round((min + max) / 2);
        if(!confirm("Is your number: "+guess+ "?")){
            if (confirm("Is your number LOWER than: "+guess+ "?"))
                {max = guess} 
            else{ 
                min = guess
                //min =guess -1
                }}}
        else{
           alert("Yay, I guessed your number correctly!!");
           return;}
	}

    alert("I could not guess your number. I think you are cheating!");
};

window.onload = guesser;
