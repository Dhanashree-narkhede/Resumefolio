function addWefield(){
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");//margin
  newNode.setAttribute("rows", 2);//rows of textarea
  
  
  let weOb = document.getElementById("we");//reference bcause we will add field below it
  let webtnOb=document.getElementById("webtn");//reference bcause we will add field above it

  weOb.insertBefore(newNode, webtn);  // in we i.e. weob then -insertbefore- what to insert -newnode- where to before -webtn-

}

function addEqfield(){
    let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");//margin
  newNode.setAttribute("rows", 2);//rows of textarea
  
  
  let eqOb = document.getElementById("eq");//reference bcause we will add field below it
  let eqbtnOb=document.getElementById("eqbtn");//reference bcause we will add field above it

  eqOb.insertBefore(newNode, eqbtn);  // in we i.e. weob then -insertbefore- what to insert -newnode- where to before -webtn-


}

//gebrating cv
function generateCV(){
  let nameField=document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  
  document.getElementById("nameT2").innerHTML = nameField;
  
  document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

  document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

  document.getElementById("linkedinT").innerHTML = document.getElementById("lnField").value;

  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

  //we

  let wes = document.getElementsByClassName("weField");

  let str = "";
  
  for (let e of wes) {
    str += `<li> ${e.value} </li>`;
  }
  
  document.getElementById("weT").innerHTML= str;


let eqs = document.getElementsByClassName("eqField");

let str1 = "";

for (let e of eqs) {
  str1 += `<li> ${e.value} </li>`;
}

document.getElementById("eqT").innerHTML= str1;

//image
let file = document.getElementById("imageField").files[0]

console.log(file);// for image info

let reader = new FileReader()
reader.readAsDataURL(file);
console.log(reader.result);

//set image in template
reader.onloadend=function(){
  document.getElementById("imgT").src = reader.result;
};

//for hideing template and showing it after generate 
document.getElementById('cv-form').style.display ='none';
document.getElementById('cv-template').style.display='block';

}


//print

function printCV(){
  window.print();
}