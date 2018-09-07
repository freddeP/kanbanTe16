// global variabel som hanterar sparfunktionen
var saveArr =[];

var kanban = document.getElementsByClassName('kanban');
kanban = Array.from(kanban);

for(let i in kanban)
{
    console.log(kanban[i]);

    kanban[i].addEventListener("dragover", dragOver);
    kanban[i].addEventListener("drop", drop);

}


// Lägg till click på knapp

const newTaskButton = document.getElementById('saveNewTask');
newTaskButton.addEventListener("click",saveNewTask);

function saveNewTask(){

    // hämta ny task från textarea
    const newTaskText = document.getElementById('newTask').value;
    // hämta din template
    const myTemplate = document.getElementById('todoTemplate');
    // kopiera din template till ett nytt element
    let newTemplate =  myTemplate.cloneNode(true);
    newTemplate.children[0].innerHTML = newTaskText;
    newTemplate.className = "todoTemplate";
    let id = "_"+ Date.now();
    newTemplate.id = id;
    // hämta första kanban
    let kanban = document.getElementsByClassName('kanban')[0];
    // lägg till newTemplate till kanban nr 1 [0]
    kanban.appendChild(newTemplate);

    // lägg till dragevent på nyskapad task
    
    newTemplate.addEventListener("dragstart" , dragStart);
    newTemplate.addEventListener("dragend" , dragEnd);

    saveToLocal(newTemplate,0);

}

var draggedEl = "";

function dragStart(){
    draggedEl = this;
}
function dragEnd(){  
}

function dragOver(ev){
    ev.preventDefault();
}

function drop(){
    this.appendChild(draggedEl);
}


function saveToLocal(taskObj, kanbanIndex)
{
    // Objekt som är skapat och som skall sparas: taskObj
    // Index där objektet ligger är: kanbanIndex

    var tmpObj = {};
    tmpObj.id = taskObj.id;
    tmpObj.kanbanIndex = kanbanIndex;
    tmpObj.content = taskObj.innerHTML;
    tmpObj.className = taskObj.className;
    tmpObj.draggeble = true;


    saveArr.push(tmpObj);

    console.log(saveArr);

    localStorage.setItem("kanban", JSON.stringify(saveArr) );


}
