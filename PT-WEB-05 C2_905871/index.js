// fill in javascript code here
let myform =document.querySelector("form");

myform.addEventListener("submit",function(e){
    e.preventDefault();
    let docName=document.getElementById("name").value;
    let docID=document.getElementById("docID").value;
    let dept=document.getElementById("dept").value;
    let experience=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mbl").value;

    let role;
    if(experience > 5){
        role="Senior";
    }
    else if(experience >= 2 && experience<=5){
        role="Junior";
    }
    else{
        role="Traineer";
    }
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");

    let data=[docName,docID,dept,exp,email,mobile,role]

    data.forEach((ele) => {
        let td= document.createElement("td");
        td.innerText= ele
        row.appendChild(td);
    })

    let deleteTd = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.addEventListener("click",function(){
        tbody.removeChild(row);
    })
    deleteTd.appendChild(deleteBtn);
    row.appendChild(deleteTd);
    tbody.appendChild(row);
})


