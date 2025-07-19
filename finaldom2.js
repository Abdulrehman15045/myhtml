function main1(){
    document.getElementById("main").innerText="change";
}

function main2(){
    const name =document.getElementById("username").value;
    document.getElementById("output").innerText="welcome" + name + "G";
}

function main3(){
  let color= document.getElementsByClassName("msg");
  for (let i=0; i< color.length; i++){
   color [i].style.background="red"; 
  }
}

function target(event){
    const name =event.target.innerText;
    document.getElementById("result").innerText="clicked"  +  name   ;
}

    async function fetch123() {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke"); 
      const data = await response.json(); 

      document.getElementById("joke").innerText = "1️⃣ " + data.setup;      
      document.getElementById("punchline").innerText = "2️⃣ " + data.punchline; 
    }