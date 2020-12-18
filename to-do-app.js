let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");
let selectTheme = document.getElementById("selectTheme");
let taskTotal = document.getElementById("taskTotal");

let taskCounter = 0;

function createTask(x) {
  let ourHTML = `
    <li>
      <input
        type="checkbox"
        onclick="markTaskAsDone(this);"
      >

      ${x}

      <button
        class="del"
        onclick="deleteTask(this);"
      >
        Delete
      </button>
    </li>
  `;

  ourList.insertAdjacentHTML("beforeend", ourHTML);
  taskCounter++;
  ourField.value = "";
  ourField.focus;
}

function markTaskAsDone(checkbox) {
  checkbox.parentElement.style.textDecoration = checkbox.checked ? "line-through" : "none";
}

function updateTaskCount() {
  taskTotal.textContent = taskCounter > 0 ?
    `You have ${taskCounter} task(s) to do today` :
    "<< Please add one task above to start >>";
}

function deleteTask(task) {
  task.parentElement.remove();
  taskCounter--;
  updateTaskCount();
}

function applyTheme(event) {
  document.body.className = event.currentTarget.value;
}

/* button for adding tasks */
ourForm.addEventListener("submit", (event) => {
  event.preventDefault();

  createTask(ourField.value);
  updateTaskCount();
});

/* Event Listener on Select */
selectTheme.addEventListener("change", (event) => {
  applyTheme(event);
});
