/* 
STEP ONE: BUILD OUT SKELETON HTML AND STYLE IT 
-- Go back to the to do list HTML to see a baseline for how it could be set up

-- We need a text field for the questions, and then four text boxes/elongated buttons as answer choices. 

-- We need a text field for a timer in the right corner of the screen 
var timerElement = document.createElement(); ?? --> maybe easiest to do this through JS...
-- We need a text field for a high score display in the left corner of the screen 


STEP TWO: ADD A WORKING TIMER IN THE CORNER OF THE SCREEN, GET SOMETHING TO HAPPEN WHEN IT FINISHES


STEP THREE: Add a button so that the timer doesn't start until the button is clicked. 

STEP FOUR: Generate five Javascript questions, and answer choices...

var jsQuestion1 = "";
var jsQuestion2 = "";
var jsQuestion3 = "";
var jsQuestion4 = "";
var jsQuestion5 = "";

var jsQ1Answer1 = ""; <--- data-type = "correct"
var jsQ1Answer2 = ""; <--- data-type = "incorrect"
var jsQ1Answer3 = ""; <--- data-type = "incorrect"
var jsQ1Answer4 = ""; <--- data-type = "incorrect"


***LOOK BACK AT THE CAROSUEL TO SEE HOW IT HANDLED NAVIGATING***
What if they were an object? 



var displayedQuestion; 
var displayedChoiceA = ...querySelector(#choiceA);  
var displayedChoiceB = ...querySelector(#choiceB); 
var displayedChoiceC; 
var displayedChoiceD; 
var displayedTimer = ...querySelector(#timer); 
var displayedHighScore = ...querySelector(#high-score);
var clickCounter; 
//the next variable keeps track of whether this is the first click to start the program...
var startingClick = true; 

var javascriptOne = {
jsQuestion: " ",
choiceA: " "; <--- data-type = "correct"
choiceB: " "; <--- data-type = "incorrect"
choiceC: " "; <--- data-type = "incorrect"
choiceD: " "; <--- data-type = "incorrect"
questionAlreadyAsked = false; 

};

var javascriptTwo = {
jsQuestion: " ",
choiceA: " "; <--- data-type = "correct"
choiceB: " "; <--- data-type = "incorrect"
choiceC: " "; <--- data-type = "incorrect"
choiceD: " "; <--- data-type = "incorrect"
questionAlreadyAsked = false; //I could do this to set up the conditions for which question to ask, 
//but maybe it's easier to just have a global counter, and set it to how many times it's been clicked...

};

on click (){
    //THIS....
    if (javascriptQuestionOne.questionAlreadyAsked === false){
    displayQuestion.innnerHTML = javascriptOne.jsQuestion;   
    displayedChoiceA.innerHTML = javascriptOne.choiceA; 
    etc.....

    questionAlreadyAsked = true; 

    //OR....
    if(startingClick ==== true){
        startTimer();
        startingClick = false; 
    }
    clickCount++; 
    if (clickCount === 2*instead of 1 because first click happens to start it*){
    displayQuestion.innnerHTML = javascriptOne.jsQuestion;   
    displayedChoiceA.innerHTML = javascriptOne.choiceA; 
    etc...
    
    dataTypeCheck();//this function can check to see if displayQuestion's current data-type is "correct" or "incorrect"... it should be able to retrieve that since the specific object details were assigned up above this, but if it can't, then maybe parameters could get set up like:
    dataTypeCheck(objectName){
        if (objectName === "javascriptOne"){
            set all the data types for javascriptOne
        }
    }
    //Anyway, once this is done, it can return "true" for correct answers, or "false" for incorrect answers. 
        if (dataTypeCheck === true){
            assign points to high score variable 
        }

        if (dataTypeCheck === false){
            reduce time from the timer 
        }

        


    }
    if (clickCount === 3){
    displayQuestion.innnerHTML = javascriptTwo.jsQuestion;   
    displayedChoiceA.innerHTML = javascriptTwo.choiceA; 
    etc...


    }

}



}

*/