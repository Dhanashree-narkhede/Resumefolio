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

function addacfield(){
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("acField");
  newNode.classList.add("mt-2");//margin
  newNode.setAttribute("rows", 2);//rows of textarea
  
  
  let acOb = document.getElementById("ac");//reference bcause we will add field below it
  let acbtnOb=document.getElementById("acbtn");//reference bcause we will add field above it

  acOb.insertBefore(newNode, acbtn);  // in we i.e. weob then -insertbefore- what to insert -newnode- where to before -webtn-

}

function addskfield(){
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skillsField");
  newNode.classList.add("mt-2");//margin
  newNode.setAttribute("rows", 2);//rows of textarea
  
  
  let skillsOb = document.getElementById("skills");//reference bcause we will add field below it
  let skbtnOb=document.getElementById("skbtn");//reference bcause we will add field above it

  skillsOb.insertBefore(newNode, skbtn);  // in we i.e. weob then -insertbefore- what to insert -newnode- where to before -webtn-

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

  document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

  document.getElementById("projectT").innerHTML = document.getElementById("projectField").value;

  document.getElementById("linkedinT").innerHTML = document.getElementById("lnField").value;

  // document.getElementById("eqT").innerHTML = document.getElementById("eqField").value;

  //we

  let wes = document.getElementsByClassName("weField");

  let str = "";
  
  for (let e of wes) {
    str += `<li> ${e.value} </li>`;
  }
  
  document.getElementById("weT").innerHTML= str;
  //we end

  //ac
  
  let achievements = document.getElementsByClassName("acField");

  let str3 = "";
  
  for (let e of achievements) {
    str3 += `<li> ${e.value} </li>`;
  }
  
  document.getElementById("achievementsT").innerHTML= str3;

// ac end

 //ak
  
 let aks = document.getElementsByClassName("eqField");

 let str4 = "";
 
 for (let e of aks) {
   str4 += `<li> ${e.value} </li>`;
 }
 
 document.getElementById("eqT").innerHTML= str4;

// ak end

// sk

let sks = document.getElementsByClassName("skillsField");

let str10 = "";

for (let e of sks) {
  str10 += `<li> ${e.value} </li>`;
}

document.getElementById("skT").innerHTML= str10;


// sk end

//eq

let eqs = document.getElementsByClassName("eqField");

let str1 = "";

for (let e of eqs) {
  str1 += `<li> ${e.value} </li>`;
}

document.getElementById("eqT").innerHTML= str1;

//eq end



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