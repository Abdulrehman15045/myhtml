function main(){
document.getElementById("mainheading").innerText="welcome abdul rehman";
}


function main2(){
    let item=document.getElementsByClassName("p")
    for(let i=0; i< item.length; i++){
   item[i].style.background="blue";

    }
}


function main3(){
    document.querySelector(".pc").innerText="hi";
}


function main4(){
  let element= document.querySelectorAll(".msg")

  element.forEach(function(item){
    item.innerText="updated";
    item.style.color="red";
  }

)

}