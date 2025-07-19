function task(){
  document.getElementById("main").innerText="CHANGE HOGYA NA";
}
function main2(){
const name= document.getElementById("main1").value;
   document.getElementById("task2").innerText="HI " + name ;


}

function task3(){
  const color=document.getElementsByClassName("change");
  for(let i=0;  i< color.length; i++){
    color[i].style.background="lightblue";
  }
}

let a = [1,2,34,56,7]
function updated(){
  document.querySelector(".one-line").innerText="TEXT UPDATED BY QUERYSLECTOR"
}




document.getElementById("btn").addEventListener("click" ,function(){

  const lines=document.querySelectorAll(".all");

  lines.forEach(function(item){
    item.style.color="red";
    item.innerText="HOWA KA NAHI PIR"
  })
})



document.getElementById("apple").addEventListener("click",function(event){
document.getElementById("display").innerText=" CLICKED "+ event.target.innerText;

})

document.getElementById("banana").addEventListener("click" ,function(event){
  document.getElementById("display").innerText=" CLICKED "+ event.target.innerText;
})

document.getElementById("mango").addEventListener("click" ,function(event){
  document.getElementById("display").innerText=" CLICKED "+ event.target.innerText;
})

async function getjoke(){
const name = await fetch("https://official-joke-api.appspot.com/random_joke");
const nam2 = await name.json();

document.getElementById("joke").innerText = nam2.setup;
document.getElementById("punch").innerText = nam2.punchline;
}




function toggle(){
  document.getElementById("on").classList.toggle("red");
}


