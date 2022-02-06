var input = document.querySelector("input");
input.value = "";
input.focus();

input.value;

function up(){
    document.write("<br><br>");
}
function print(frase){
    document.write(frase);
      up();
}

function calcular(){
  for(var mult = 1; mult  <= 10; mult++){
    print(mult * input.value);
  }

}

var button = document.querySelector("button");
button.onclick = calcular;