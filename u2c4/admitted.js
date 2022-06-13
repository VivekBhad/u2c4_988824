// All the Code for the Admitted page goes here
admittedStudent=JSON.parse(localStorage.getItem("admission")

displayTable(admittedstudent)

function displayTable(admittedstudent){
    admittedstudent.forEach(function(elemt) {

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

        tr.append(td1,td2,td3,d4,td5)
        document.querySelector("tbody").append(tr)
    })
}
