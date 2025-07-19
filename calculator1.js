function add() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  const sum = parseFloat(num1) + parseFloat(num2);

  document.getElementById("result").innerText = "RESULT: " + sum;
}
 

// add spacae and commnet here
function subtract() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  
  const sum = parseFloat(num1) - parseFloat(num2);

  document.getElementById("result").innerText = "RESULT: " + sum;
}

function multiply(){
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;

    const result= parseFloat(num1) * parseFloat(num2);

    document.getElementById("result").innerText="RESULT: " + result;
}


function divide(){
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;

    const result= parseFloat(num1) / parseFloat(num2);

    document.getElementById("result").innerText="RESULT: " + result;
}