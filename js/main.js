const btn = document.querySelector('.btn')
const inputTask = document.querySelector('.inputTask')
const errorMsg = document.querySelector('.error')
const toDo = document.querySelector('.toDo')
const boxUnder = document.querySelector('.boxUnder') 
const boxEdit = document.querySelector('.boxEdit') 
const editTask = document.querySelector('#editTask')
const saveEditBtn = document.querySelector('.saveEditBtn') 

// dodanie nowego zadania:
const addToDo = (e) => {
    e.preventDefault()

    // sprawdzenie inputa 
    if (inputTask.value === "") {
        errorMsg.style.display = 'block'
        setTimeout(() => {
            errorMsg.style.display = 'none'
        }, 2000)
    }
    // jeżeli OK:
    else {
        console.log('ok')
        // Tworzę nowy div o klasie 'toDo'
        const newDiv = document.createElement('div');
        newDiv.classList.add('toDo');

        // tworzę p i dodaję wartość z inputa:
        const newToDo = document.createElement('p')
        newToDo.textContent = inputTask.value 

        // dodaję <p> do nowego div'a:
        newDiv.appendChild(newToDo);

        // zeby były widoczne 
        newDiv.style.display = 'flex'


        // tworzę itemki do usuwania 
        const newItem = document.createElement('div')
        newItem.classList.add('item');
        
        const deleteImg = document.createElement('img');
        deleteImg.classList.add('img');
        deleteImg.src = './icon/delete.png';  // Ścieżka do ikony
        deleteImg.alt = 'kosz';

        // ikonka edycji
        const editImg = document.createElement('img')
        editImg.classList.add ('img')
        editImg.src = './icon/edit.png'
        editImg.alt = 'edycja'

        newItem.appendChild(editImg)
        newItem.appendChild(deleteImg)
        newDiv.appendChild(newItem);



        // Do kontenera dodaję nowego diva:
        boxUnder.appendChild(newDiv)

        inputTask.value = ""
    }
}

const deleteToDo = (e) => {
    // Szukam rodzica z klasą .toDo
    const toDoItem = e.target.closest('.toDo');
    // Usuwam cały div .toDo 
    toDoItem.remove();   
}


const openWindowToEdit = (e) => {
    currentTask = e.target.closest('.toDo');
    boxEdit.style.display = 'flex';

    // ustawiam wartość dla editTask w inpucie 
    // oraz szukam pierwszego p i biore 
    // z niego wartosc 
    editTask.value = currentTask.querySelector('p').textContent;

}


const saveTask = (e) => {
    e.preventDefault();
      // Sprawdzam, czy w formularzu jest treść
      if (editTask.value !== "") {
        // Aktualizuję tekst zadania
        currentTask.querySelector('p').textContent = editTask.value;
        
        // Ukrywam okno
        boxEdit.style.display = 'none';

    } else {
        // Jeżeli nie ma tekstu, komunikat o błędzie
        alert('Musisz wpisać treść zadania!');
    }
}

btn.addEventListener('click', addToDo)
boxUnder.addEventListener('click', (e) => {
    if (e.target.alt === 'kosz') {
        deleteToDo(e)
    }
    else {
        openWindowToEdit(e)
    }
});  

saveEditBtn.addEventListener("click", saveTask)