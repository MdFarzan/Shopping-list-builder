console.log("js is perfectly referenced.");
document.body.onload = function(){
    document.querySelector("#name-of-list").style.display = "block";
    document.querySelector("main").style.opacity = "0.3";
}

document.getElementById("create-list").addEventListener("click",()=>{
    let listName = document.querySelector("input[name=list-name]").value;
    document.querySelector("#list-name").innerText = listName;
    document.querySelector("#name-of-list").style.display = "none";
    displayBody();
});

//body displayer
function displayBody(){
    document.querySelector("main").style.opacity = "1";
}