const inputBox = document.getElementById("input-box")

const listContainer = document.getElementById("list-container")

// const addTask = function(){}
function addTask(){
    // if(inputBox.value === ''){
    //     alert("Eee 7vii fail")
    // }

    if(inputBox.value.trim()=='') {
        alert("Task can not be empty");
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click",function(e){

    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked')    //on-off
        saveData()
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)

inputBox.addEventListener("keydown", function(event){
    if(event.key === "Enter") addTask()

})
// document.addEventListener("keydown",(e)=>{
//     console.log(e.key);
    
// })
//function to store data evene if we refresh browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showData();