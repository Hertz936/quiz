const questions = [
    {
        question: "qual é o maior animal do mundo?",
        answers:[
            {id:1,Text: "tubarão", correct:false},
            {id:2,Text: "baleia azul", correct:true},
            {id:3,Text: "elefante", correct:false},
            {id:4,Text: "girafa", correct:false},
        ],
    },
    {
        question: "qual é o maior deserto do mundo?",
        answers:[
            {id:1,Text: "kalahari", correct:false},
            {id:2,Text: "gobi", correct:false},
            {id:3,Text: "saara", correct:true},
            {id:4,Text: "antartica", correct:false},
        ],
    },
    {
        question: "qual é o maior continente do mundo?",
        answers:[
            {id:1,Text: "asia", correct:false},
            {id:2,Text: "austrália", correct:true},
            {id:3,Text: "ártico", correct:false},
            {id:4,Text: "áfrica", correct:false},
        ],
    },
    {
        question: "qual é o maior país do mundo?",
        answers:[
            {id:1,Text: "vaticano", correct:true},
            {id:2,Text: "butão", correct:false},
            {id:3,Text: "nepal", correct:false},
            {id:4,Text: "shri lanka", correct:false},
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton =  document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0
