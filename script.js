// global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound (in ms)
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const totalMistakes = 3;

// global variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 500;
var cluePauseTime = 333; //how long to pause in between clues
var mistakesLeft = 0;
var playGame = true;

// create timer
var timerFunc;
var secsLeft = 5;

// start game
function startGame() {
  // (re)initialize game vars
  progress = 0;
  gamePlaying = true;
  mistakesLeft = totalMistakes;
  document.getElementById("incorrectGuessesLeft").innerHTML = mistakesLeft;
  secsLeft = 5;
  document.getElementById("timeLeftOnGuess").innerHTML = secsLeft + "seconds";
  
  // set random pattern
  randomPattern();
  
  // swap start and stop buttons when beginning gameplay
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  // play clues
  playClueSequence();
}

// stop game
function stopGame() {
  // update vars
  gamePlaying = false;
  
  // swap stop and start buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63, // C4
  2: 311.13, // D#4
  3: 392, // G4
  4: 440, // A4
  5: 493.88,	// B4
  6: 587.33 // D5
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// light up button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

// clear button
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// play single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// playing multiple clues at once
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    if (clueHoldTime >= 100) {
      clueHoldTime -= 25;
    }
  }
  
  
  if (guessCounter == 0 && playGame == true) {
    //secsLeft = 5;
  
    console.log("hi 1");
    
    timerFunc = setInterval(function() {
      if (secsLeft < 0) {
        clearInterval(timerFunc);
        document.getElementById("timeLeftOnGuess").innerHTML = "Time's Up!";
        
        // problem: does not work with alerts (loseGame())
        
      } else {
        console.log("hi 2");
      
        if (secsLeft == 1) {
          document.getElementById("timeLeftOnGuess").innerHTML = secsLeft + " second";
        } else {
          document.getElementById("timeLeftOnGuess").innerHTML = secsLeft + " seconds";
        }

        if (secsLeft < 0) {
          clearInterval(timerFunc);
          document.getElementById("timeLeftOnGuess").innerHTML = "Time's Up!";
          guessCounter++;
          playGame = false;
          console.log("hi 3");
          loseGame();
          //secsLeft = 0;

        } else {
          secsLeft--;
        }
      }
      
      
      
    }, 1000);
 }
  
  
  
}

// player loses
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
  console.log("game over");
}

// player wins
function winGame() {
  stopGame();
  alert("Congrats! You won :)");
}

// guess validation
function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  //timerFunc;
  
  
  
  
  
  // validation
  if (btn != pattern[guessCounter]) {
    // totalMistakes guesses incorrect --> lose
    if (mistakesLeft == 1) {
      mistakesLeft--;
      document.getElementById("incorrectGuessesLeft").innerHTML = mistakesLeft;
      loseGame();
    } else {
      mistakesLeft--;
      document.getElementById("incorrectGuessesLeft").innerHTML = mistakesLeft;
      progress++;
      playClueSequence();
    }
  } else {
    // guess correct
    if (guessCounter != progress) {
      // turn not over
      guessCounter++;
    } else {
      // turn over
      if (guessCounter != pattern.length - 1) {
        // not last turn
        progress++;
        playClueSequence();
      } else {
        // last turn + turn over + guess correct --> win
        winGame();
      }
    }
  }
}

// generate random pattern
function randomPattern() {
  pattern.length = 0;
  let patternLength = document.getElementById("patternLengthValue").value;
  for (let i = 0; i < patternLength; i++) {
    pattern.push(Math.floor((Math.random() * Object.keys(freqMap).length) + 1));
  }
}

// set easy or hard mode
function setMode() {
  let mode = document.getElementById("levelBox").value;
  if (mode == "easy") {
    clueHoldTime = 500;
  } else if (mode == "hard") {
    clueHoldTime = 250;
    cluePauseTime = 100;
  }
}