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
//Question-Answer Arrays
var JavaScriptOne = 
    ["What keyword allows you to set a variable in Javascript?",
    "var", //CORRECT
    "make",
    "do",
     "if"];

var JavaScriptTwo = 
   ["What decade was Javascript invented?",
    "1980's", 
    "1990's", //CORRECT
    "2000's",
    "2010's"];

var JavaScriptThree = 
   ["which is NOT a loop name in Javascript?",
    "for", 
    "while",
    "do",
    "if"];//CORRECT

var JavaScriptFour =  
    ["What superset of Javascript allows you to work with objects in local storage?",
    "ECMA", 
    "Typescript",
    "W3",
    "JSON",];//CORRECT

var JavaScriptFive = 
    ["Which of the following terms is synonymous with 'Event Bubbling'?",
    "event listeners", 
     "event delegation",
    "event propogation", //CORRECT
    "event handling"];
//querySelectors
var mainCard = document.querySelector(".card");
var displayedTimer = document.querySelector("#displayedTimer"); 
var displayedHighScore = document.querySelector("#displayedHighScore");
var displayedHighScoreName = document.querySelector("#highScoreName")
var displayedCurrentScore = document.querySelector("#displayedCurrentScore");
var displayedTimesAttempted = document.querySelector("#displayedTimesAttempted");
var startButton = document.querySelector("#startButton");
var displayedQuestion = document.querySelector("#displayedQuestion");
var displayedChoiceA = document.querySelector("#displayedChoiceA");
var displayedChoiceB = document.querySelector("#displayedChoiceB");
var displayedChoiceC = document.querySelector("#displayedChoiceC");
var displayedChoiceD = document.querySelector("#displayedChoiceD");
//Essential Variables 
var timeCount = 61; 
var clickCount = 0; 
var highScore = 0; 
var highScoreSaved = localStorage.getItem("highScore");
var userScore = 0; 
var highScoreName = "Your name here soon!"; 
var highScoreNameSaved = localStorage.getItem("highScoreName", highScoreName);
var timesAttempted = 0; 
var timesAttemptedSaved = localStorage.getItem("timesAttempted", timesAttempted);
//Sound Effects Variables
var correctSound = document.createElement("audio");
var incorrectSound = document.createElement("audio");
correctSound.src = "./sounds/correct-sound.mp3";
incorrectSound.src = "./sounds/incorrect-sound.mp3";

//Initializing the dynamic displays
displayedTimer.innerHTML = "Timer: ";
displayedHighScore.innerHTML = "High Score: " +localStorage.getItem("highScore");
displayedCurrentScore.innerHTML = "Your Score: " +userScore; 
displayedHighScoreName.innerHTML = "Name: " +localStorage.getItem("highScoreName");
displayedTimesAttempted.innerHTML = "# of Attempts: " +localStorage.getItem("timesAttempted"); 



mainCard.addEventListener("click", function(event){
    var element = event.target; 
    //Make sure they are hitting the start button to begin...
    if(clickCount === 0){
        if (element.matches("#startButton") === false){
            clickCount = 0; 
            return; 
        }
    }
    //
    clickCount++; 

    //CLICK COUNT CYCLES

    if(clickCount === 1){
        //start up the program 
        startTimer();
        
        //display Question 1
        displayedQuestion.textContent = JavaScriptOne[0];
        displayedChoiceA.textContent = JavaScriptOne[1];
        displayedChoiceB.textContent = JavaScriptOne[2];
        displayedChoiceC.textContent = JavaScriptOne[3];
        displayedChoiceD.textContent = JavaScriptOne[4];

        timesAttemptedSaved++; 
        localStorage.setItem("timesAttempted", timesAttemptedSaved++);
        localStorage.getItem("timesAttempted");

    }
    if(clickCount === 2){
        //Was the last question correct?
        if(element.matches("#displayedChoiceA") === true){
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            incorrectSound.play();
            timeCount -= 10; 
        }
        //displayQuestion 2 
        displayedQuestion.textContent = JavaScriptTwo[0];
        displayedChoiceA.textContent = JavaScriptTwo[1];
        displayedChoiceB.textContent = JavaScriptTwo[2];
        displayedChoiceC.textContent = JavaScriptTwo[3];
        displayedChoiceD.textContent = JavaScriptTwo[4];
    
    }

    if(clickCount === 3){
        //Was the last question correct?
        if(element.matches("#displayedChoiceB") === true){
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            incorrectSound.play();
            timeCount -= 10; 
        }

        
        displayedQuestion.textContent = JavaScriptThree[0];
        displayedChoiceA.textContent = JavaScriptThree[1];
        displayedChoiceB.textContent = JavaScriptThree[2];
        displayedChoiceC.textContent = JavaScriptThree[3];
        displayedChoiceD.textContent = JavaScriptThree[4];
    
    }
    
    if(clickCount === 4){
        //Was the last question correct?
        if(element.matches("#displayedChoiceD") === true){
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            incorrectSound.play();
            timeCount -= 10; 
        }
        
        displayedQuestion.textContent = JavaScriptFour[0];
        displayedChoiceA.textContent = JavaScriptFour[1];
        displayedChoiceB.textContent = JavaScriptFour[2];
        displayedChoiceC.textContent = JavaScriptFour[3];
        displayedChoiceD.textContent = JavaScriptFour[4];
    
    }

    if(clickCount === 5){
        //Was the last question correct?
        if(element.matches("#displayedChoiceD") === true){
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            incorrectSound.play();
            timeCount -= 10; 
        }

        displayedQuestion.textContent = JavaScriptFive[0];
        displayedChoiceA.textContent = JavaScriptFive[1];
        displayedChoiceB.textContent = JavaScriptFive[2];
        displayedChoiceC.textContent = JavaScriptFive[3];
        displayedChoiceD.textContent = JavaScriptFive[4];
    
    }

    if(clickCount > 6){
        //Was the last question correct?
        if(element.matches("#displayedChoiceD") === true){
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore; 
        }else{
            if(clickCount < 8){
                incorrectSound.play();
                timeCount -= 10;     
            }
        }
        var finalScore = userScore + timeCount; 
        if(finalScore > localStorage.getItem("highScore")){
            highScore = finalScore; 
            localStorage.setItem("highScore", highScore);

            highScoreName = prompt("New high score! Write your name :) ", "name here");
            localStorage.setItem("highScoreName", highScoreName);
        }

        displayedCurrentScore.textContent = "Final Score: "+finalScore;
        displayedHighScore.textContent = "High Score: " +localStorage.getItem("highScore");
        displayedHighScoreName.textContent = "Name: " +localStorage.getItem("highScoreName");
        //END GAME STUFF 

        displayedQuestion.textContent = "You finished!"
        displayedChoiceA.textContent = "";
        displayedChoiceB.textContent = "";
        displayedChoiceC.textContent = "";
        displayedChoiceD.textContent = "";

        if(timeCount > 0){
            clearInterval(timeInterval);
           }
        
        if(clickCount > 9){
            return; 
        }

    }





})


function startTimer(){
    var timeInterval = setInterval(function(){
        timeCount--; 
        
        displayedTimer.textContent = "Timer: "+timeCount+ "  second(s) remaining"; 
        
        if(timeCount <= 0 || clickCount >= 6){
            clearInterval(timeInterval);
        displayedQuestion.textContent = "You finished!"
        displayedChoiceA.textContent = "";
        displayedChoiceB.textContent = "";
        displayedChoiceC.textContent = "";
        displayedChoiceD.textContent = "";
        endGame();

        }
    }, 1000);
}

