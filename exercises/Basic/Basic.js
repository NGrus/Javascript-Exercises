function ExA(){
  x="hello"
  y=', you "freak"'
  document.getElementById("ExA").innerHTML=x + y
}

function ExB(){
  carBrand = "Volvo"
  carPrice = "16'000"
  document.getElementById("ExB").innerHTML="The "+carBrand+" costs "+carPrice+"."
}

function ExC_add(){
  x = 5
  y = 4
  document.getElementById("ExC_add").innerHTML="5 added to 4 equals "+ (x+y)
}
function ExC_subtr(){
  x = 5
  y = 4
  document.getElementById("ExC_subtr").innerHTML="4 subtracted from 5 equals "+ (x-y)
}
function ExC_div(){
  x = 20
  y = 5
  document.getElementById("ExC_div").innerHTML="20 divided by 5 equals "+ (x/y)
}
function ExC_modulo(){
  x = 24
  y = 5
  document.getElementById("ExC_modulo").innerHTML="24 modulo 5 equals "+ (x%y)
}
ExDcount=0
function ExD(){
  if (ExDcount<5){
    ExDcount +=1
    ExD()
  }
  else{
    document.getElementById("ExD2").innerHTML="You've reached 5 Iterations."
  }
}

function ExE(){
  exe=0
  while (exe<10000){
    exe+=1
    document.getElementById("ExE").innerHTML="The Loop has run "+ exe +" times."
  }
}

function ExF(){
  ExF = 0
  do{
    ExF++
    document.getElementById("ExF").innerHTML="The do-while Loop has run " + ExF + " Times."
  }
  while(ExF < 10000);
}

function ExG(){/*FAILED */
  exglist = [
    "one", 
    "two",
    "three",
    "four",
    "five",
    "six"
  ]
  for (let i=0; i <= exglist.length; i++){
    document.getElementById("ExG").innerHTML="there are "+ i +" items in the list.";
  }
}

function ExH1(){
  exh = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]
  x = exh.length
  console.log(x)
   document.getElementById("ExH1").innerHTML=(exh.length);
}
function ExH2(){
  exh = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]
  exh.push("eight")
   document.getElementById("ExH2").innerHTML=(exh);
}
function ExH3(){
  exh = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]
  x = exh.length
  exh.pop();
   document.getElementById("ExH3").innerHTML=(exh);
}
function ExH4(){
  exh = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]
  x = exh.length
   exh.shift();
   document.getElementById("ExH4").innerHTML=(exh);
}
function ExH5(){
  exh = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]
  x = exh.length
   exh.unshift("zero");
   document.getElementById("ExH5").innerHTML=(exh);
}
function ExH6(){
  exh = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]
  x = exh.length
   exh.sort();
   document.getElementById("ExH6").innerHTML=(exh);
}
function ExH7(){
  exh = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]
  x = exh.length
   exh.forEach(index =>
    document.getElementById("ExH7").innerHTML="number "+(exh)
    );
}
0

function ExI(){
  date = new Date();
  document.getElementById("ExI").innerHTML = date;
}
function ExJ(arg1, arg2){
  document.getElementById("ExJ").innerHTML = (arg1 + arg2);
}