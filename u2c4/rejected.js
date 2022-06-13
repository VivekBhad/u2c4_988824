// All the Code for the Rejected page goes here
let rejectedstudent=json.parse(localStorage.getItem("admission-rejected"))

displayTable(rejectedstudent);

function displayTable(rejectedStudent){
    rejectedStudent.forEach(function(element) {

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
        
    });
}
