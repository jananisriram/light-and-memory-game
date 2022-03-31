# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Janani Sriram**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/janani-sriram-light-and-sound-memory-game-codepath-su22

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Player can pick easy or hard mode using text box input, which affects tone play time and time between played tones
- [x] Player can enter desired pattern length using text box input, generating a random pattern of that length

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x] Hard Mode, Win: https://user-images.githubusercontent.com/34949059/160547581-99e57236-9d77-4665-9531-86bd771a5fca.gif
![x] Easy Mode, Loss (Incorrect Guesses): https://user-images.githubusercontent.com/34949059/160547800-cdb5c728-a90e-4848-97f6-868b3ad964d5.gif
![x] Hard Mode, Loss (Time Runs Out): https://user-images.githubusercontent.com/34949059/160547863-953adade-29e2-4e37-bb43-e36db0870148.gif
![x] Hard and Easy Mode, Stop (Resets Game): https://user-images.githubusercontent.com/34949059/160547916-b584f629-403b-4fee-aaf5-41da53672c93.gif

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    - [x] https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
    - [x] https://www.w3schools.com/css//css_font_websafe.asp
    - [x] https://www.the-art-of-web.com/javascript/creating-sounds/
    - [x] https://pages.mtu.edu/~suits/notefreqs.html
    - [x] https://www.quora.com/What-is-the-way-set-default-text-inside-textbox-in-HTML
    - [x] http://www.learningaboutelectronics.com/Articles/How-to-retrieve-data-from-a-text-box-in-javascript.php#:~:text=To%20extract%20the%20information%20which,entered%20into%20this%20text%20box.
    - [x] https://www.w3schools.com/jsref/jsref_floor.asp
    - [x] https://www.w3schools.com/jsref/jsref_push.asp
    - [x] https://stackoverflow.com/questions/14845710/javascript-variable-access-in-html
    - [x] https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) <br />
I spent a majority of my time implementing and debugging the timer feature of my program. The most critical issue I faced was ensuring that my timer ran synchronously with the other features of the game, namely when a clue was playing; rather than counting down each second each time a new clue started playing, my timer was counting down erratically, often counting as many as 2-3 seconds at a time. The timer was also not restarting each time a new clue played, resulting in an almost guaranteed loss, since the timer kept counting down instead of giving the player time to play. In addition, I faced sizable issues when trying to work with alerts in JavaScript: the alert that should pop up when the game ends kept popping up even when I closed the alert box, causing an infinite loop I could only break by refreshing the page. <br />
In trying to find out the specific pain points of my timer-related code, I searched up various implementations of simple timer and countdown interfaces, most of which used the same general structure of setInterval and clearInterval. Educational platforms like GeeksForGeeks and public community forums like StackOverflow and Quora were especially helpful, as I was able to crowdsource tips from others who have encountered and solved the same issue. By learning about various ways in which the timer interface could be implemented, I was able to better understand how the timer works and what specifically could be causing the alert infinite loops, the speeding up of the timer, and the timer’s inability to restart. After a number of timer implementations, I was able to pinpoint the exact lines of code which were strictly necessary to make my timer functional. <br />
After fixing the timer’s countdown itself, I focused on fixing the infinite alerts and timer resets. I found that moving my timer algorithm to different methods in my JS script changed the functionality of my timer, and I knew that I wanted the timer to restart during each new clue sequence. I moved the algorithm to after playing the clue sequence in the start game method, from which I learned that clue sequences and successive lines of code occur simultaneously, allowing my timer to function. I also had to clear the timer interval wherever I wanted the game to pause or tones to restart at various points of my JS script.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) <br />
I am curious about what new JavaScript functionality I could add to my code to make it more appealing to users and to encourage more user interaction with the website. Specifically, I am interested in making a moving background and moving sections of my website when I scroll, adding to the appeal of playing the game itself. I have begun to explore some of these elementary JS, HTML, and CSS properties while building my personal website (https://jananisriram.github.io/), but I would like to build upon this knowledge through further work with web development. More specifically, I am interested in diving deep into full stack web development by using React.js and Node.js to not only simplify my JS, but also to develop more complex functionality using existing frameworks and clusters. <br />
Overall, I am interested in how web development, specifically full stack web development, interacts with other aspects of software engineering; I would love to learn more about how a combination of software frameworks, full stack web development, and domain knowledge in a specific subject can affect how users experience a product. As a computer scientist deeply interested in how technology can advance precision medicine, genomics, healthcare, and economics, I hope to apply my skills in web development and in algorithms and data structures to make precision medicine more affordable and accessible, and I believe that continuing to learn about full stack web development is critical in advancing user accessibility and awareness of such novel technologies.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) <br />
I would first analyze my code deeply and remove any extraneous variables, lines of code, or actions that make my code less efficient and more cumbersome to read. I would also add more comments, as they make it easier for both me and others to quickly read and understand my code and its overarching actions. For readability, I would make the constants have names in all capital letters, a standard that I followed and continue to follow in all of my programming classes in high school and college. I believe it is also critical to frequently revisit code and make it more efficient through loops, helper functions, or more complex data structures; I would try to achieve the same functionality with data structures which use less memory and processing time, making the game experience smoother and quicker. <br />
My first main addition to the code would be input and action validation: for example, if the player does not enter a play mode, I would create an alert that erases the incorrect input and tells the player to re-enter a value. Alternatively, I could also create default parameters for any inputs, making those the game parameters if the inputs are not of proper type. I would also add an “Erase All” or “Reset” button which would clear all input from all text boxes and reset the game parameters, including the incorrect guess and timer counts, to their original values. My most ambitious addition would be far more JS functionality, with moving button elements, a more well-developed frontend interface for better accessibility and appeal, and more backend design and interactive elements.



## Interview Recording URL Link

[My 5-minute Interview Recording] https://drive.google.com/file/d/1TQx_TAw-5hfRxjfSXf2Q_2dY8KtLewff/view?usp=sharing


## License

    Copyright Janani Sriram, 2022

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
