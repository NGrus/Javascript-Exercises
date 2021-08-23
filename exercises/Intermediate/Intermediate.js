function ExK(){
  document.getElementById("ExK").innerHTML="i've failed this exercise";
}
function ExL(){
  let x = 50;
  document.getElementById("ExL").innerHTML=x
}
function ExM(){
  const car ={
    company="Fiat", 
    model="500",
    state={
      bad="rusted to hell",
      medium="Light rust",
      good="no rust",
    }
  }
  document.getElementById("ExM").innerHTML=car.company + ", "+car.model+", "+state.bad;
}
