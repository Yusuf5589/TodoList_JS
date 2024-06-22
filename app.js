let post = document.getElementById("post");
let todoText = document.getElementById("todoText");
let list = document.getElementById("list");


function todocreate(){
    if(todoText.value == ""){
        return null;
    }else{
        list.innerHTML += `<li id="todo">
        <div id="text">
            ${todoText.value}
        </div>
        <button id="DeleteIcon"><i id="deleteaccept" class="fa-solid fa-trash text-danger"></i></button></li>`;
        todoText.value = "";
    }
}

post.addEventListener("click", todocreate);

function deletebtnClick(e){

    if(e.target.id == "deleteaccept"){
        let DeleteDiv = e.target.parentElement.parentElement;
        DeleteDiv.remove();
    }else{
        return null;
    }
    e.preventDefault();
}

document.addEventListener("click", deletebtnClick);
