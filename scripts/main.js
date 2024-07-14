document.querySelector("img").addEventListener("click",
 function () {
  alert("Woof Woof :3");
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");

	if (mySrc === "img/dog.png") {
		myImage.setAttribute("src", "img/dog2.png");
	} if (mySrc === "img/dog2.png") {
		myImage.setAttribute("src", "img/dog3.jpeg");
	} if (mySrc ===  "img/dog3.jpeg") {
		myImage.setAttribute("src", "img/dog4.jpg");
	} if (mySrc === "img/dog4.jpg") {
		myImage.setAttribute("src", "img/dog5.jpg");
	} if (mySrc === "img/dog5.jpg") {
		myImage.setAttribute("src", "img/dog.png");

	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hii hii hello, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Hii hello again, ${storedName}`;
}

myButton.onclick = () => {
	setUserName();
}