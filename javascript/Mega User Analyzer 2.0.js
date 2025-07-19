let userName=prompt("ENTER YOUR USERNAME");
let password=prompt("ENTER YOUR PASSWORD");

if (userName === "ABDUL REHMAN" && password === "1234"){
    console.log("SUCCESSFULL LOGIN");

}else{
    console.log("UNSUCCESSULL LOGIN");
    
}

let fullName=prompt("ENTER YOUR NAME");
let ageinput=prompt("ENTER YOUR age");
let age=parseInt(ageinput)

let marksinput=prompt("ENTER YOUR MARKS");
let marks=parseInt(marksinput);
 let grade;


if(marks <=100 && marks >=90){
      grade="A+";
}else if (marks <=89 && marks >=70){
    grade="B";
}else if (marks <=60 && marks >=69){
    grade="C";
}else if (marks <=50  && marks >=59){
    grade="D";   
}else if (marks <=50 && marks >=59){
    grade="fail";
}else if(marks >100 && marks<0){
    console.log("Invalid marks")
}

if (age >=18){
    console.log("TOU ARE ELIGIBLE");
}else{
    console.log("YOU ARE NOT ELIGIBLE");
}


console.log("FULL NAME:" + fullName);
console.log("AGE:" + age);
console.log("MARKS:" + grade);


