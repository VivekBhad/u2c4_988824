// All the Code for All Students Page Goes Here

let studentlist = JSON.parse(localStorage.getItem("admisson"))||[]



displayTable(studentlist);

function displayTable(studentlist){

    studentlist.forEach(function(element){
        var tr = document.createElement("tr");
        
        var td1 = document.createElement("td");
        td1.innerText=elem.name

        
        var td2 = document.createElement("td");
        td2.innerText=elem.email

        
        var td3 = document.createElement("td");
        td3.innerText=elem.course

        
        var td4 = document.createElement("td");
        td4.innerText=elem.gender

        
        var td5 = document.createElement("td");
        td5.innerText=elem.phone

        td6=document.createElement("td");
        td6.innerText="admitted";
        td6.sty
        tr.append(td1,td2,td3,d4,td5,td6)
        document.querySelector("tbody").append(tr)

        
    });
        
    }
}