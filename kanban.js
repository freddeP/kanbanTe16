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
  
  console.log(text.value);
    // skapa en ny div
    var divTask = document.createElement('div');
    // lägg till lyssnare till vårt nya element.
    divTask.addEventListener("click", function()
    { console.log(this);
    });

    // skapa en text-node som du kan lägga in i din nya div
    var theText = document.createTextNode(text.value);
    //lägg till text-noden till din nyskapade div
    divTask.appendChild(theText);

    // lägg till nya diven i föräldern till knappen du tryckte på
    this.parentElement.appendChild(divTask);

    // Tömmer textrutan
    text.value = "";

}






