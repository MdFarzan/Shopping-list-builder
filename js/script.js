
document.body.onload = function(){
    blurBody();
    document.querySelector("#name-of-list").style.display = "block";
 
}
var firstItem = false;
document.getElementById("create-list").addEventListener("click",()=>{
    let listName = document.querySelector("input[name=list-name]").value;
    if((/^\s+$/).test(listName) || listName == ""){
        listName = "Shopping List";
    }

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

    //creating input types
    clearValues();
}


//delete item
function delItem(v){
    let temp = v.parentNode;
    v.parentNode.innerHTML = "Deleted";
    temp.remove();
}

//validations
var i=0;
function checkValidation(v){
    document.querySelector("#create-item").removeEventListener("click",addItem);
    if(v.checkValidity()){
        v.nextElementSibling.innerHTML="";
        i++;
        if(i>=2){
        document.querySelector("#create-item").addEventListener("click",addItem);
        i=0;
        }
    }

    else{
        v.nextElementSibling.innerHTML = v.validationMessage;
        
        document.querySelector("#create-item").removeEventListener("click",addItem);
        
    }
    

}

function checkDatalistValidation(v){
    
    
    if(v.checkValidity()){
        v.nextElementSibling.nextElementSibling.innerHTML="";
    }

    else{
        v.nextElementSibling.innerHTML = v.validationMessage;
    }
    
}

//clearing form values
function clearValues(){
    document.querySelector("#item-name").value = "";
    document.querySelector("#item-unit").value = "";
    document.querySelector("#item-qty").value = "";
    document.querySelector("#create-item").removeEventListener("click",addItem);
}