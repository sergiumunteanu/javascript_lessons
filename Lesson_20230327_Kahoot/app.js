const questions = [
    {
        q: "What brand is this?",
        img: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=0.845xw:1.00xh;0.0657xw,0&resize=640:*",
        answers: [
            "Renault",
            "Lada",
            "Ford",
            "Mustang"
        ],
        correct: "Ford"
    },
    {
        q: "What model is this?",
        img: "https://media.ed.edmunds-media.com/toyota/camry/2021/oem/2021_toyota_camry_sedan_xle_fq_oem_1_1280.jpg",
        answers: [
            "Golf",
            "Huracan",
            "Sprinter",
            "Toyota"
        ],
        correct: "Toyota"
    },
    {
        q: "From What country is this car?",
        img: "https://cdn.motor1.com/images/mgl/lZO4g/s1/2020-audi-a5-sportback-s-line-facelift-shot-by-auditography.webp",
        answers: [
            "Romania",
            "Germany",
            "Transnistria",
            "GB"
        ],
        correct: "Germany"
    }

];

const gameDiv = document.getElementById("game");
const scoreDiv = document.getElementById("score");
const timerDiv = document.getElementById("timer");

let iQuestion = 0;
let score = 0;

// questions.forEach(question => {
//     gameDiv.innerHTML += `
//         <div class='question'>
//             <img src='${question.img}'>
//             <h1>${question.q}</h1>
//             <div class='answers'>
//                 <span>${question.answers[0]}</span>
//                 <span>${question.answers[1]}</span>
//                 <span>${question.answers[2]}</span>
//                 <span>${question.answers[3]}</span>
//             </div>
//         </div>
//     `;
// })

function showQuestion(qNumber)
{
    if(qNumber >= questions.length){
        endGame();
        return;
    }

    gameDiv.innerHTML = "";
    gameDiv.innerHTML += `
        <div class='question'>
            <img src='${questions[qNumber].img}'>
            <h1>${questions[qNumber].q}</h1>
            <div class='answers'>
                <span class='answer'>${questions[qNumber].answers[0]}</span>
                <span class='answer'>${questions[qNumber].answers[1]}</span>
                <span class='answer'>${questions[qNumber].answers[2]}</span>
                <span class='answer'>${questions[qNumber].answers[3]}</span>
            </div>
        </div>
    `;

    const answers = document.getElementsByClassName('answer');

    let seconds = 10;
    let timer = setInterval(() => {
        if(seconds <= 0){
            clearInterval(timer)
        }
        seconds -= 0.5        
        timerDiv.innerHTML = `<h1>${seconds}<span>seconds</span></h1>`;
    }, 500)

    Array.from(answers).forEach(ans => {
        ans.addEventListener("click", () => {
            if(questions[qNumber].correct == ans.textContent){
                score += 100;    
            }
            iQuestion+=1;
            showQuestion(iQuestion);
            showScore(score);
            clearInterval(timer);
        })
    })
}

function showScore(sc){
    scoreDiv.innerHTML += `
        <h1>${sc}</h1><span>score</span>
    `;
}

function endGame()
{
    gameDiv.innerHTML = `
        <div class='end'>
            <h1>The game has ended</h1>
        </div>
    `;
    timerDiv.style.display = 'none';
}

showQuestion(iQuestion)


/*
const questions = [
    {
        q: "What brand is this?",
        img: "https://www.motortrend.com/uploads/2023/01/2023-Ford-Mustang-Mach-1-6M-42.jpg",
        answers: [
            "Renault",
            "Lada",
            "Ford",
            "Mustang"        ],
        correct: "Ford"    },
    {
        q: "What model is this?",
        img: "https://hips.hearstapps.com/hmg-prod/images/2022-honda-civic-hatchback-sport-touring-309-1634066512.jpg?crop=0.554xw:0.415xh;0.327xw,0.525xh&resize=1200:*",
        answers: [
            "Golf",
            "Huracan",
            "Sprinter",
            "Civic"        ],
        correct: "Civic"    },
    {
        q: "From what country is this car?",
        img: "https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-rear-three-quarters-motion-1664827983.jpg?crop=0.782xw:0.717xh;0.150xw,0.184xh&resize=980:*",
        answers: [
            "Romania",
            "Germany",
            "Transnistria",
            "UK"        ],
        correct: "Germany"    }
];
const gameDiv = document.getElementById("game");
const scoreDiv = document.getElementById("score");
const timerDiv = document.getElementById("timer");
let iQuestion = 0;
let score = 0;
// questions.forEach(question => {//     gameDiv.innerHTML += `//         <div class='question'>//             <img src=${question.img}>//             <h1>${question.q}</h1>//             <div class='answers'>//                 <span>${question.answers[0]}</span>//                 <span>${question.answers[1]}</span>//                 <span>${question.answers[2]}</span>//                 <span>${question.answers[3]}</span>//             </div>//         </div>//     `;// });function showQuestion(qNumber) {
    if (qNumber >= questions.length) {
        endGame();
        return;
    }
    gameDiv.innerHTML = "";
    gameDiv.innerHTML += `        <div class='question'>            <img src=${questions[qNumber].img}>            <h1>${questions[qNumber].q}</h1>            <div class='answers'>                <span class='answer'>${questions[qNumber].answers[0]}</span>                <span class='answer'>${questions[qNumber].answers[1]}</span>                <span class='answer'>${questions[qNumber].answers[2]}</span>                <span class='answer'>${questions[qNumber].answers[3]}</span>            </div>        </div>    `;
    const answers = document.getElementsByClassName('answer');
    let seconds = 10;
    let timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            iQuestion += 1;
            showQuestion(iQuestion);
            return;
        }
        seconds -= 0.5;
        timerDiv.innerHTML = `<h1>${seconds}</h1><span>seconds</span>`;
    }, 500);
    Array.from(answers).forEach(ans => {
        ans.addEventListener('click', () => {
            if (questions[qNumber].correct == ans.textContent) {
                score += 100 * seconds;
                ans.style.backgroundColor = 'green';
            } else {
                ans.style.backgroundColor = 'red';
                Array.from(answers).forEach(answer => answer.textContent === questions[qNumber].correct ? answer.style.backgroundColor = 'green' : '');
            }
            clearInterval(timer);
            showScore(score);
            ans.parentElement.style.pointerEvents = 'none';
            setTimeout(() => {
                iQuestion += 1;
                showQuestion(iQuestion);
            }, 2000);
        });
    });
} 
function showScore(sc) {
    scoreDiv.innerHTML = `<h1>${sc}</h1><span>score</span>`;
}
function endGame() {
    gameDiv.innerHTML = `        <div class='end'>            <h1>The game has ended</h1>        </div>    `;
    timerDiv.style.display = 'none';
}
showQuestion(iQuestion);
*/