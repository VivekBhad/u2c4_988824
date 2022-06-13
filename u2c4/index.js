// All the JS Code for the Add Students Page Goes Here

document.querySelector("form").addEventListener("submit",myfunction);

let arr = JSON.parse(localStorage.getItem("admission")) || [];

function myfunction(event){
    event.preventDefault();
    let obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        phone:document.querySelector("#phone").value,
        gen: document.querySelector("#gender").value,
        course:document.querySelector("#course").value,
        
    };
    arr.push(obj);
    console.log(arr);

    localStorage.getItem("admission",JSON.stringify(arr));
    document.querySelector("#name").value;
    document.querySelector("#email").value = "";



}