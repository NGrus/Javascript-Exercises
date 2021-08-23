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
