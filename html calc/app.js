document.getElementById("add").addEventListener("click", function() {
    var num1Value = Number(document.getElementById("num1").value);
    var num2Value = Number(document.getElementById("num2").value);
    var output = num1Value + num2Value;
    
    document.getElementById("answer").innerHTML = output;
})

document.getElementById("sub").addEventListener("click", function() {
    var num1Value = Number(document.getElementById("num").value);
    var num2Value = Number(document.getElementById("num3").value);
    var output = num1Value - num2Value;
    
    document.getElementById("theanswer").innerHTML = output;
})

document.getElementById("mult").addEventListener("click", function() {
    var num1Value = Number(document.getElementById("number").value);
    var num2Value = Number(document.getElementById("number1").value);
    var output = num1Value * num2Value;
    
    document.getElementById("output").innerHTML = output;
})