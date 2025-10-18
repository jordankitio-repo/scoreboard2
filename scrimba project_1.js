let score_1=document.getElementById("score1")
let score_2=document.getElementById("score2")
let homescorecount=0
let guestscorecount=0
let startTime = 0;
let elapsed = 0;
let timerInterval = null;

const timerDisplay = document.getElementById('timer-display');

function updateTimer() {
    const currentTime = Date.now();
    const totalElapsed = elapsed + (currentTime - startTime);
    const totalSeconds = Math.floor(totalElapsed / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.textContent =
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 250); // Update 4x per second for smoother display
}

function pauseTimer() {
    if (!timerInterval) return;
    clearInterval(timerInterval);
    timerInterval = null;
    elapsed += Date.now() - startTime;
    console.log('Timer paused');
}

function resumeTimer() {
    if (timerInterval) return;
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 250);
    console.log('Timer resumed');
}

function restartTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = 0;
    elapsed = 0;
    timerDisplay.textContent = '00:00:00';
    console.log('Timer restarted');
}


function homeaddone(){
    homescorecount= homescorecount+1
    score_1.innerText=homescorecount
    console.log('one added')
}

function homeaddtwo(){
    homescorecount= homescorecount+2
    score_1.innerText=homescorecount
    console.log('two added')
}
function homeaddthree(){
    homescorecount= homescorecount+3
    score_1.innerText=homescorecount
    console.log('three added')
}



function guestaddone(){
    guestscorecount= guestscorecount+1
    score_2.innerText=guestscorecount
    console.log('one added')
}

function guestaddtwo(){
    guestscorecount= guestscorecount+2
    score_2.innerText=guestscorecount
    console.log('two added')
}
function guestaddthree(){
    guestscorecount= guestscorecount+3
    score_2.innerText=guestscorecount
    console.log('three added')
}

function reseter(){
    guestscorecount=0;
    homescorecount=0;
    score_1.innerText=homescorecount;
    score_2.innerText=guestscorecount;
    console.log ('reseted all values)')
}
