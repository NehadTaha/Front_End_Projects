let preferances;

function onLoadPage() {

    setTheme();

    setWelcomeText();
}

function setTheme() {

    if (localStorage.getItem("themeChosen") === "light") {
        onClickLightMode();


    }
    if (localStorage.getItem("themeChosen") === "dark") {

        onClickDarkMode();
    }



}

function setWelcomeText() {


    //let userName = localStorage.getItem(preferances.name);
    //let color = localStorage.getItem(preferances.color);
    // localStorage.setItem("preferances", JSOn.stringify(preferances.name + preferances.color))
    onClickSaveColor();
    onClickSaveName();
    let text = document.getElementById("welcomeText");
    text.innerHTML = "Welcome " + JSON.parse(userName) + "!";
    text.classList.add = JSON.parse(color);

}

function onClickLightMode() {

    localStorage.setItem("themeChosen", "light")
        //Change the background of the element Id"main"
    let background = document.getElementById("main");
    background.className = "container-flex bg-light"

    //Change the background for the navbar
    let navbarbackground = document.getElementById("navbar");
    navbarbackground.className = "navbar navbar-expand-lg bg-light";

    //Change the text color for the Welcome text


    //Change the background for the save button 
    let Buttoncolor = document.getElementById("registerButton");
    Buttoncolor.className = "btn btn-primary m-1";

    //Change the background for the save button 
    let colorButton = document.getElementById("colorButton");
    colorButton.className = "btn btn-primary m-1";
}

function onClickDarkMode() {

    localStorage.setItem("themeChosen", "dark")
        //Change the background of the element Id"main"
    let background = document.getElementById("main");
    background.className = "container-flex bg-dark"

    //Change the background for the navbar
    let navbarbackground = document.getElementById("navbar");
    navbarbackground.className = "navbar navbar-expand-lg bg-dark";

    //Change the text color for the Welcome text
    setWelcomeText();

    //Change the background for the save button 
    let Buttoncolor = document.getElementById("registerButton");
    Buttoncolor.className = "btn btn-secondary m-1";

    //Change the background for the save button 
    let colorButton = document.getElementById("colorButton");
    colorButton.className = "btn btn-secondary m-1";

    //Change the color for the label
    let input = document.getElementById("label1");
    input.style.color = "gray";
    console.log(input);
}

function onClickSaveName() {
    // TODO
    let userName = document.getElementById("nameInput").value;


    // preferances = { name: "", color: "" };
    //console.log(preferances.name);
    localStorage.setItem("preferances", JSON.stringify({ name: userName }))
    let textInput = document.getElementById("nameInput").value;
    let text = document.getElementById("welcomeText");
    text.innerHTML = "Welcome " + textInput + "!";
    // localStorage.clear();
}

function onClickSaveColor() {
    // TODO
    let textColor = document.getElementById("colorInput").value;

    localStorage.setItem("preferances", JSON.stringify({ color: textColor }))

    let text = document.getElementById("welcomeText");
    text.style.color = textColor;

}

function onClickClear() {
    // TODO
    localStorage.removeItem(preferances.nam);



}