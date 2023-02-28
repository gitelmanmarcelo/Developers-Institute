const form=document.forms[0];

form.addEventListener('submit',onFormSubmit);

function onFormSubmit(e) {
    if (e.target.limit.value !== '10' || e.target.query.value.length === 0) {
        console.log('bad');
        e.preventDefault();
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
txt = document.createTextNode(urlParams.get('limit'));
document.body.appendChild(txt);
txt = document.createTextNode(urlParams.get('query'));
document.body.appendChild(txt);


// Exercise with JSON


let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`

// Parse this JSON string into a JS object
// Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// Create another variable to stringify the JS object. Console.log the variable
// Then use pretty print (look at the lesson)

const obj = JSON.parse(jsonString);
obj.quiz.sport.q1.options.forEach(element => { console.log(element)
});

const v2 = JSON.stringify(obj);
console.log(v2);

const v3 = JSON.stringify(obj,undefined,4);
console.log(v3);

