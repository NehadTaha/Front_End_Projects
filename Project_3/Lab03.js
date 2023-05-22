console.log('JS correctly imported');

//Section1
let counter = 0;

let output = document.getElementById("click");

function countClicks() {

    counter += 1;

    output.innerHTML = counter;

}
//Section2
function myList() {
    let task = document.getElementById("addTask").value;
    console.log("myList");
    return task;

}

function addnewTask() {
    const node = document.createElement("li");
    const inputTask = myList();

    node.appendChild(document.createTextNode(inputTask));
    console.log(inputTask);
    document.getElementById("myTask").appendChild(node)
    clearTask();

}

function clearTask() {
    document.getElementById("addTask").value = "";
    console.log("hello");

}

//Section3
function addimage() {

    document.getElementById("cat").style.display = "";

}

function removeImage() {

    document.getElementById("cat").style.display = "none";
}


//Section4

function unlockStyle(parameter) {

    let text = document.getElementById(parameter)
        // console.log(text.innerText);
    if (text.innerText = "Locked") {
        text.innerText = "Unlocked"
            // console.log(text.innerText);
        text.className = "btn btn-success px-4 py-4"
    }
}

function unlockLastButton() {
    let text = document.getElementById("btn5")
    console.log(text.innerText);
    let output = text.innerText;
    if (document.getElementById("btn1").innerText == "Unlocked" & document.getElementById("btn2").innerText == "Unlocked" & document.getElementById("btn3").innerText == "Unlocked" & document.getElementById("btn4").innerText == "Unlocked") {
        text.innerText = "Unlocked.Congratulations!"
        text.className = "alert alert-success text-black text-center px-5"

    } else {
        text.innerText = "Locked"
        text.className = " alert alert-secondary text-black text-center px-5";
    }
}