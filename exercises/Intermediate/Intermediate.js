function ExK(arg){
  switch(document.getElementById("ExK")){
    case 1:
      document.getElementById("ExK").innerHTML="you've entered 1 as an argument"
    case 2:
      document.getElementById("ExK").innerHTML="you've entered 2 as an argument"
    case 3:
      document.getElementById("ExK").innerHTML="you've entered 3 as an argument"
    default:
      document.getElementById("ExK").innerHTML="You've entered no argument, the code worked."
  }
}
function ExL(){
  let x = 50;
  document.getElementById("ExL").innerHTML=x
}


function ExM(){
  const car={
    company:"Fiat", 
    model:"500",
      state:{
        bad:"rusted to hell",
        medium:"Light rust",
        good:"no rust",
      },
  };
  document.getElementById("ExM").innerHTML="Car is a "+car.company +" model "+ car.model +" and "+car.state.bad
}
ExO = () => {
  document.getElementById("ExO").innerHTML="It Worked"
}
ExP = () => {
  try {
    nonfunct()
  }
  catch{
    document.getElementById("ExP").innerHTML="The function was not found. this worked."
  }
}
function ExQ(){
  document.getElementById("ExQ").innerHTML = "You've just changed the text";
}
function ExR(){
  document.getElementById("ExR").style.color = "red";
}
function ExS(){
  let a = 50;
  let b = 60;
  document.getElementById("ExS").innerHTML="the result of a(50) added to b(60) is "+(a+b)+", but i think i did this wrong.";
}