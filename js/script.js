console.log("js is perfectly referenced.");
document.body.onload = function(){
    blurBody();
    document.querySelector("#name-of-list").style.display = "block";
 
}
var firstItem = false;
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

//closing dialog box
function closeDialog(v){
    v.parentNode.style.display = "none";
    displayBody();
}

var itemContainer = [];

//add item handler
function addItem(){
    let name = document.querySelector("#item-name").value;
    let item_unit = document.querySelector("#item-unit").value;
    let units = document.querySelector("#item-qty").value;
    let con = document.querySelector(".container");
    var node = document.querySelector(".container").cloneNode(true);    
    node.childNodes[3].innerText = name;
    node.childNodes[4].innerText = units + " " + item_unit + ".";
    
    //adding double click to delete
    
    node.style.display = "block";
    
    document.querySelector("main").appendChild(node);
}


//delete item
function delItem(v){
    let temp = v.parentNode;
    v.parentNode.innerHTML = "Deleted";
    temp.remove();
}


