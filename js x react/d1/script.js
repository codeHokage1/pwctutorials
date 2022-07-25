const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const age = document.getElementById("age").value;
const state = document.getElementById("state").value;

const maleGender = document.getElementById("male").value;
const femaleGender = document.getElementById("female").value;

const course = document.getElementsByName("course").value;

const submitBtn = document.getElementById("submit");

const messageBox = document.getElementById("message");
const infoBox = document.getElementById("info-submitted");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!firstName || !lastName || !course) {
    console.log("You must submit at least your name and a course!");
    messageBox.classNameList.add("error");
    messageBox.innerHTML = `<p>You must submit at least both of your names and a course!</p>`;
    setTimeout(() => messageBox.remove(), 5000);
  }
});

// function onSubmit(e) {
//   e.preventDefault();
//   if (nameInput.value === "" || emailInput.value === "") {
//     msg.classNameList.add("error");
//     msg.innerHTML = "Please enter your name and email";
//     setTimeout(() => msg.remove(), 5000);
//   } else {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
//     );
//     userList.appendChild(li);
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }
