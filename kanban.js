window.addEventListener("keydown", checkKey);

function checkKey(ev){
  
    if(ev.keyCode === 13)
    {
        saveNewTask();

    }


}
// Hämta ett element i html-strukturen med hjälp av id. Lagra i konstant variabel
const mySaveButton = document.getElementById("saveNewTask");
// lägg till klick på save-knappen
mySaveButton.addEventListener("click",saveNewTask);

// Funktion som skall läsa in ny händelse och lagra i kanban todo
// Obs funktionen fungerar bara vid tryck på knapp ej enter.
// Detta pga hur vi adresserar mottagaren. Ändras i lektion 3.
function saveNewTask(){
   
  // Hämta textrutans innehåll
  const text = document.getElementById('newTask');
  if(text.value.trim().length > 0)
  {
    console.log(text.value);
    // skapa en ny div
    var divTask = document.createElement('div');
    divTask.className = "createdTask";
    // lägg till lyssnare till vårt nya element.
    divTask.addEventListener("click",moveToNext);

    // skapa en text-node som du kan lägga in i din nya div
    var theText = document.createTextNode(text.value);
    //lägg till text-noden till din nyskapade div
    divTask.appendChild(theText);

    // lägg till nya diven i föräldern till knappen du tryckte på
    // hämta kanban-klassen och gå in i första elementet [0]
    const firstKanban = document.getElementsByClassName('kanban')[0];

    // Lägg till tillbaka-knapp
    var backButton = document.createElement('button');
    backButton.className = "backButton";
    backButton.innerHTML = "&larr;";
    backButton.addEventListener("click", moveBack);
    divTask.appendChild(backButton);    



    firstKanban.appendChild(divTask);
    
  }  // end if

  // Tömmer textrutan
  text.value = "";

}  // end function


function moveToNext(){

    // vi måste hitta vilket index vår nuvarande förälder har.
    // detta för att kunna byta ut föräldern mot en bättre...
    // 
    const kanban = Array.from(document.getElementsByClassName('kanban'));
   // Leta efter index för förälder jag kom ifrån...
    let currentParentIndex = kanban.indexOf(this.parentElement);
   
    console.log(currentParentIndex);

    if(currentParentIndex<kanban.length-1)
    {
     currentParentIndex = currentParentIndex + 1;
     kanban[currentParentIndex].appendChild(this);
    }
}

function moveBack(ev){

ev.stopPropagation();

    const clickedParent = this.parentElement;
    const kanban = Array.from(document.getElementsByClassName('kanban'));
    let currentParentIndex = kanban.indexOf(clickedParent.parentElement);
   
    if(currentParentIndex > 0)
    {
        currentParentIndex -= 1;
        kanban[currentParentIndex].appendChild(clickedParent);
    }
    
}









