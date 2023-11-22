// Questo evento viene attivato quando il documento HTML è completamente caricato e analizzato.
document.addEventListener('DOMContentLoaded', function () {
    // Ottiene l'elemento "taskList" dal documento.
    var taskList = document.getElementById('taskList');

    // Aggiunge un ascoltatore di eventi all'elemento "taskList".
    // Risponde ai clic sugli elementi all'interno di "taskList".
    taskList.addEventListener('click', function (event) {
        var target = event.target;

        // Se il clic avviene su un elemento con la classe "completeButton",
        // chiama la funzione completeTask con l'elemento genitore come argomento.
        if (target.classList.contains('completeButton')) {
            completeTask(target.parentNode);
        }
        // Se il clic avviene su un elemento con la classe "deleteButton",
        // chiama la funzione deleteTask con l'elemento genitore come argomento.
        else if (target.classList.contains('deleteButton')) {
            deleteTask(target.parentNode);
        }
    });

    // Ottiene il pulsante con l'id "addButton".
    var addButton = document.getElementById('addButton');

    // Aggiunge un ascoltatore di eventi al pulsante "addButton".
    // Previeni la propagazione dell'evento agli elementi genitori quando il pulsante viene cliccato.
    // Chiama la funzione handleAddTask quando il pulsante viene cliccato.
    addButton.addEventListener('click', function (event) {
        event.stopPropagation();
        handleAddTask();
    });
});

// Funzione chiamata quando il pulsante "addButton" viene cliccato.
function handleAddTask() {
    // Ottiene il valore del task dal campo di input con l'id "taskInput".
    var taskInput = document.getElementById('taskInput');
    var taskValue = taskInput.value.trim();

    // Se il valore è vuoto, mostra un avviso all'utente.
    if (!taskValue) {
        alert('Please enter a task!');
        return;
    }

    // Altrimenti, chiama la funzione addTask con il valore del task.
    addTask(taskValue);

    // Resetta il campo di input dopo l'aggiunta del task.
    taskInput.value = '';
}

// Funzione per aggiungere un nuovo task alla lista.
function addTask(taskValue) {
    // Ottiene l'elemento "taskList" dal documento.
    var taskList = document.getElementById('taskList');

    // Verifica che il valore del task non sia indefinito o nullo.
    if (typeof taskValue === 'undefined' || taskValue === null) {
        return;
    }

    // Crea un nuovo elemento "li" contenente il testo del task e pulsanti "Complete" e "Delete".
    var li = document.createElement('li');
    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="completeButton">Complete</button>
        <button class="deleteButton">Delete</button>
    `;

    // Aggiunge l'elemento "li" alla lista dei task.
    taskList.appendChild(li);
}

// Funzione per contrassegnare un task come completato o annullare il completamento.
function completeTask(taskItem) {
    // Toglie o aggiunge la classe "completed" all'elemento del task.
    // Questa classe viene utilizzata per attraversare il testo del task con una linea orizzontale.
    taskItem.classList.toggle('completed');
}

// Funzione per eliminare un task dalla lista.
function deleteTask(taskItem) {
    // Ottiene l'elemento "taskList" dal documento.
    var taskList = taskItem.parentNode;

    // Rimuove l'elemento del task genitore del pulsante "Delete".
    taskList.removeChild(taskItem);
}
