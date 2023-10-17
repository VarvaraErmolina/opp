
let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;
const button = document.getElementById("verify");
button.addEventListener("click", verify);

const elementA = document.getElementById("a");

const elementB = document.getElementById("b");

const elementC = document.getElementById("c");

//const elementSend = document.getElementById("send");
//elementSend.addEventListener("click", verify_send)

function verify() {
    console.log("a, b, c")
    let a = Number(elementA.innerText);
    let b = Number(elementB.innerText);
    let c = Number(elementC.innerText);
    console.log(a, b, c)

    let ineq1, ineq2
    if ((a < b) && (b < c)) {
        ineq1 = true;
        ineq2 = false;
    }
    else if ((a > b) && (b > c)) {
        ineq2 = true;
        ineq1 = false;
    }
    else {
        ineq1 = false;
        ineq2 = false;
    }

    if (ineq1) {
        result = "Выполняется первое неравенство (A < B < C)"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else if (ineq2) {
        result = "Выполняется второе неравенство (A > B > C)"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = "Ни одно неравенство не выполняется"
        document.getElementById("result").innerText = messageText + result;
        //document.getElementsByName('result')[0].value = result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsById('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}


