const btn = document.querySelector('.btn')
const inputTask = document.querySelector('.inputTask')
const errorMsg = document.querySelector('.error')
const toDo = document.querySelector('.toDo')
const boxUnder = document.querySelector('.boxUnder') 

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


btn.addEventListener('click', addToDo)
boxUnder.addEventListener('click', deleteToDo);  