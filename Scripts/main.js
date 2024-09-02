/* Getting and storing name */

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hiiii, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hiiii, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

/* Changing image */
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "Images/Banner.jpg") {
        myImage.setAttribute("src", "Images/Sonic_miku.jpg");
    } else {
        myImage.setAttribute("src", "Images/Banner.jpg")
    }
};