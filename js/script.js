console.log("js is perfectly referenced.");
document.body.onload = function(){
    blurBody();
    document.querySelector("#name-of-list").style.display = "block";
 
}

document.getElementById("create-list").addEventListener("click",()=>{
    let listName = document.querySelector("input[name=list-name]").value;
    document.querySelector("#list-name").innerText = listName;
    document.querySelector("#name-of-list").style.display = "none";
    displayBody();
});

//body blurer
function blurBody(){
    document.querySelector("main").style.filter = "blur(3px)";
}
//body displayer
function displayBody(){
    document.querySelector("main").style.filter = "blur(0px)";
}

//add items
document.querySelector("#add-item").addEventListener("click",()=>{
    blurBody();
    document.querySelector("#item-details").style.display = "block";
});

//add item handler