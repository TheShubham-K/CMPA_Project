document.getElementById("b1").addEventListener("click", f1);
document.getElementById("b2").addEventListener("click", f2);
document.getElementById("b3").addEventListener("click", f3);
document.getElementById("b4").addEventListener("click", f4);
document.getElementById("b5").addEventListener("click", f5);
document.getElementById("b6").addEventListener("click", f6);

function f1() {
    var a, b, c;
    a = Number(document.getElementById("t1").value);
    b = Number(document.getElementById("t2").value);
    c = a + b;

    document.getElementById("p1").innerHTML = "Addition of two numbers " + "" + c;
}


function f2() {
    var a, b, d;
    a = Number(document.getElementById("t1").value);
    b = Number(document.getElementById("t2").value);

    d = a - b;

    document.getElementById("p1").innerHTML = "Substraction of two numbers " + "" + d;

}

function f3() {
    var a, b, e;
    a = Number(document.getElementById("t1").value);
    b = Number(document.getElementById("t2").value);

    e = a * b;

    document.getElementById("p1").innerHTML = "Multiplication of two numbers " + "" + e;
}

function f4() {
    var a, b, f;
    a = Number(document.getElementById("t1").value);
    b = Number(document.getElementById("t2").value);

    f = a / b;


    document.getElementById("p1").innerHTML = "Division of two numbers " + "" + f;
}

function f5(x, y) {

    x = Number(document.getElementById("t1").value);
    y = Number(document.getElementById("t2").value);

    // If the input numbers are less than 1 return an error message.
    if (x < 1 || y < 1) {
        return "Please enter values greater than zero.";
    }

    // If the input numbers are not integers return an error message.
    if (x != Math.round(x) || y != Math.round(y)) {
        return "Please enter whole numbers.";
    }

    // Now apply Euclid's algorithm to the two numbers.
    while (Math.max(x, y) % Math.min(x, y) != 0) {
        if (x > y) {
            x %= y;
        } else {
            y %= x;
        }
    }

    // When the while loop finishes the minimum of x and y is the HCF.
    document.getElementById("p1").innerHTML = "Highest common divisor is:  " + Math.min(x, y);
}

function f6(x, y) {

    x = Number(document.getElementById("t1").value);
    y = Number(document.getElementById("t2").value);

    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));



}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    document.getElementById("p1").innerHTML = "Least common factor: " + x;
}