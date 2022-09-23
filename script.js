var x = document.getElementById("textArea");
var q = "";

function digitPressed(t) {
    q = q.concat(t);
    x.innerHTML = q;
}

function symbolPressed(t) {
    q = q.concat(t);
    x.innerHTML = q;
}

function checkDigit(c) {
    if (c >= '0' && c <= '9') {
        return;
    } else {
        return true;
    }
}

function calculate() {
    try {
        var res = eval(q);
        if (res == "Infinity") {
            alert("INCORRECT EXPRESSION!!");
            q = "";
            x.innerHTML = "Enter Your Values";
            return;
        }
        q = res.toString();
        x.innerHTML = q;
    } catch (error) {
        alert("INCORRECT EXPRESSION!!");
        q = "";
        x.innerHTML = "Enter Your Values";
    }
}

function clearScreen() {
    q = "";
    x.innerHTML = "Enter Your Values";
}