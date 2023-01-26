// De facut:
// C00ki (formular)
// Local Host [mesaj]
// buton la parola {sper}




let nume = document.getElementById('nume');
let prenume = document.getElementById('prenume');
let arr = [nume, prenume];
let para1 = document.getElementById('p1');
let para2 = document.getElementById('p2');
let form = document.getElementById('myForm');

let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let email = document.getElementById('email');
let result = document.getElementById('result');

let passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[●!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{7,}$/;
let parol = document.getElementById('pass');
let resultPass = document.getElementById('passResult');

let cooki = [nume, prenume, email];



function handleForn(e) {
    e.preventDefault();
    function checNP(a) {
        a.forEach((element, index) => {

            if (element.value == "" && index == 0) {
                nume.setAttribute('class', 'red');
                para1.setAttribute('class', 'pred');
            }
            else if (element.value == "" && index == 1) {
                prenume.setAttribute('class', 'red');
                para2.setAttribute('class', 'pred');
            }
            else if (typeof element.value == "string" && index == 0) {
                nume.setAttribute('class', 'green');
                para1.setAttribute('class', 'pgreen');
            }
            else if (typeof element.value == "string" && index == 1) {
                prenume.setAttribute('class', 'green');
                para2.setAttribute('class', 'pgreen');
            }
        });
    }
    checNP(arr)

    function ValidateEmail(e) {
        if (emailVal.test(e.value)) {
            email.setAttribute('class', 'green');
            result.setAttribute('class', 'pgreen');
        }
        else {
            email.setAttribute('class', 'red');
            result.setAttribute('class', 'pred');
        }
    }
    ValidateEmail(email)

    function passChech(p) {
        if (passVal.test(p.value)) {
            parol.setAttribute('class', 'green');
            resultPass.setAttribute('class', 'pgreen');
            
        }
        else {
            parol.setAttribute('class', 'red');
            resultPass.setAttribute('class', 'pred');
            
        }
    }
    passChech(parol)
}

form.addEventListener('submit', handleForn)
