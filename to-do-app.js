let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");
let selectTheme = document.getElementById("selectTheme");
let taskTotal = document.getElementById("taskTotal");
let taskCounter = 0;

/*button for adding tasks*/
ourForm.addEventListener("submit", (e) => {

    e.preventDefault();

    createItem(ourField.value);

    changeTheme();

    taskCount();
});
/*CREATE TASKS*/
function createItem(x) {

    let ourHTML = `<li> <input type="checkbox" onclick="taskDone(this);"> ${x} <button class="del" onclick="deleteItem(this);">Delete</button></li>`;
    ourList.insertAdjacentHTML("beforeend", ourHTML);
    taskCounter ++;
    ourField.value = "";
    ourField.focus;
}

/*TASK DONE: LINE THROUGH*/
function taskDone(itemDone) {
    if(itemDone.checked == true) {
    itemDone.parentElement.style.textDecoration = "line-through green";
} else { 
    itemDone.parentElement.style.textDecoration = "none"; 
}

}

/*COUNT TASKS*/
function taskCount() {
    if(taskCounter > 0) {
        taskTotal.textContent = `You have ${taskCounter} task(s) to do today`;
    }
    else { taskTotal.textContent = "<< Please add one task above to start >>"; }

}

/*DELETE TASKS*/
function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
    changeTheme();
    taskCounter --;
    taskCount();

}

/*Event Listener on Select*/
selectTheme.addEventListener("change", () => {

    changeTheme();
    
} )

/*FUNCTION TO CHANGE THEME COLOR*/

function changeTheme() {

    let y = selectTheme.selectedIndex;
    let themeChoice = document.getElementsByTagName("option")[y].value;
     
    if (themeChoice == "light"){
        document.body.style.backgroundColor = "#457B9D";
        const itemsOdd = document.querySelectorAll('li:nth-child(2n + 1)');
        for (let i = 0; i < itemsOdd.length; i++) {

            itemsOdd[i].style.backgroundColor = '#A8DADC';
            itemsOdd[i].style.color = '#000000';
        }

        const itemsEven = document.querySelectorAll('li:nth-child(2n + 2)');
        for (let i = 0; i < itemsEven.length; i++) {

            itemsEven[i].style.backgroundColor = '#f1faee';
            itemsEven[i].style.color = '#000000';
        }

        
    }
    else if (themeChoice == "dark")  { 
        document.body.style.backgroundColor = "#264653";
        const itemsOdd = document.querySelectorAll('li:nth-child(2n + 1)');
        for (let i = 0; i < itemsOdd.length; i++) {

            itemsOdd[i].style.backgroundColor = '#E76F51';
            itemsOdd[i].style.color = '#ffffff';
        }

        const itemsEven = document.querySelectorAll('li:nth-child(2n + 2)');
        for (let i = 0; i < itemsEven.length; i++) {

            itemsEven[i].style.backgroundColor = '#F4A261';
            itemsEven[i].style.color = '#ffffff';
        }
    }


}
