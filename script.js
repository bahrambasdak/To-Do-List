let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("#add-form input");
let searchInput = document.querySelector("#search-form input");
let addBtn = document.querySelector("#add-form span");

list.addEventListener("click",(e)=>{
    if(e.target.className == "delete-btn"){
        e.target.parentNode.remove();
        if(list.children.length == 0){
            let listEmptyMsg = document.createElement("div");
            listEmptyMsg.style.textAlign = "center";
            listEmptyMsg.style.color = "#333";
            listEmptyMsg.innerText = "your list is empty";
            listEmptyMsg.id = "emptyMsg";
            list.appendChild(listEmptyMsg);
        }
    }
    
})

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!addInput.value) return;
    if(document.querySelector("#emptyMsg")){
        document.querySelector("#emptyMsg").remove();
    }

list.append(creatListItem(addInput.value));
addInput.value = "";
})

function creatListItem(textValue){
    let listItem = document.createElement("li");
    let titleSpan = document.createElement("SPAN");
    let btnSpan = document.createElement("SPAN");
    titleSpan.className = "title";
    titleSpan.innerText = textValue;
    btnSpan.className = "delete-btn";
    btnSpan.innerText = "delete";
    listItem.appendChild(titleSpan);
    listItem.appendChild(btnSpan);
    return listItem;
}

searchInput.addEventListener("input",(e)=>{
    Array.from(list.children).forEach(element=>{
        if(document.querySelector("#emptyMsg")) return;

        if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = "flex";
        }
        else{
            element.style.display = "none";
        }
    })
})