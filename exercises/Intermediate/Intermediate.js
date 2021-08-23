function ExK(){
  document.getElementById("ExK").innerHTML="i've failed this exercise";
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