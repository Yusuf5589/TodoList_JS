let post = document.getElementById("post");
let todoText = document.getElementById("todoText");
let list = document.getElementById("list");
let todoList = document.getElementById("todoList");
let popupCreate = document.getElementById("popupCreate");

function todocreate(e){
    if(todoText.value == ""){
        return null;
    }else{
        popupCreate.style.zIndex = 1;
        popupCreate.innerHTML += `
        <div class="w-100 h-100 p-0 m-0 row d-flex justify-content-center align-items-center position-absolute" id="popup">
            <div class="col-10 col-xl-6 border border-2 rounded-4 bg-white p-0 m-0">
                <div class=" w-100 p-4 border border-2" id="popupTitle">Onay Kutusu</div>
                <div class=" w-100 py-5 px-4 border border-2" id="todoText">Yeni bi görev eklemek ister misiniz?</div>
                <div class=" w-100 p-4 border border-2 d-flex justify-content-end">
                    <button class="btn btn-danger mx-2" id="close">İptal</button>
                    <button class="btn btn-success" id="accept">Evet</button>
            </div>
        </div>
        </div>
        `;
    }
    e.preventDefault();
}

post.addEventListener("click", todocreate);

function deletebtnClick(e){

    if(e.target.id == "deleteaccept"){
        let DeleteDiv = e.target.parentElement.parentElement;
        DeleteDiv.remove();
    }
    else if(e.target.id == "accept"){
        list.innerHTML += `<li id="todo">
        <div id="text">
            ${todoText.value}
        </div>
        <button id="DeleteIcon"><i id="deleteaccept" class="fa-solid fa-trash text-danger"></i></button></li>`;
        todoText.value = "";
        popupCreate.style.zIndex = -1;
        let popup = document.getElementById("popup");
        popup.remove();
    }
    else if(e.target.id == "close"){
        let popup = document.getElementById("popup");
        popupCreate.style.zIndex = -1;
        popup.remove();
    }
    else{
        return null;
    }
    e.preventDefault();
}

document.addEventListener("click", deletebtnClick);
