function add() {
    var num1, num2, Add;
   num1 = paraInt(document.getElementById("firstNumber").value);
   num2 = paraInt(document.getElementById("secondNumber").value);
   Add = num1 + num2;
   document.getElementById ("result") .innerHTML ="Addition : "+Add;
   
}


function sub() {
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
    var result = parseInt(num1) - parseInt(num2);

}


function mul(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}


function div()
        {
          num1 = document.getElementById("firstNumber").value;
          num2 = document.getElementById("secondNumber").value;
          document.getElementById("result").innerHTML = num1 / num2;
        }


        
function reset() {
    document.getElementById("reset").reset();
  }