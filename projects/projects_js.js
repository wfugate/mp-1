
function textColorHelper(result){
    if (result< 0) {
        document.getElementById("output").style.color="red";
    }else if (document.getElementById("output").style.color!=="black"){
        document.getElementById("output").style.color="black";
    }
}
function addition() {
    let int1 = Number(document.getElementById("int1-input").value);
    let int2 = Number(document.getElementById("int2-input").value);
    let result = int1 + int2;
    console.log(result);
    document.getElementById("output").innerHTML=String(result);
    textColorHelper(result);
}

function subtraction() {
    let int1 = Number(document.getElementById("int1-input").value);
    let int2 = Number(document.getElementById("int2-input").value);
    let result = int1 - int2;
    document.getElementById("output").innerHTML=String(result);
    textColorHelper(result);
}

function multiplication() {
    let int1 = Number(document.getElementById("int1-input").value);
    let int2 = Number(document.getElementById("int2-input").value);
    let result = int1 * int2;
    document.getElementById("output").innerHTML=String(result);
    textColorHelper(result);
}

function division() {
    let int1 = Number(document.getElementById("int1-input").value);
    let int2 = Number(document.getElementById("int2-input").value);
    let result = int1 / int2;
    document.getElementById("output").innerHTML=String(result);
    textColorHelper(result);
}

function power(){
    let int1 = Number(document.getElementById("int1-input").value);
    let int2 = Number(document.getElementById("int2-input").value);
    let result = int1;
    if (int2<0){
        for (let i = 1; i < -int2; i++) {
            console.log(result);
            result = int1 * result;
              }
        result = 1 / result;
    } else {
        for (let i = 1; i < int2; i++) {
            result = int1 * result;
        }
    }
    document.getElementById("output").innerHTML=String(result);
    textColorHelper(result);
}

function clearText(){
    document.getElementById("output").innerHTML=String("&nbsp;");
    document.getElementById("int1-input").value=String("");
    document.getElementById("int2-input").value=String("");
    textColorHelper(0);
}