//get the DOM elements and assign them to variables

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userContainer = document.querySelector("#users");

//add event listener to the form
myForm.addEventListener("submit", onSubmit);

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

function onSubmit(e) {
  e.preventDefault();
  userContainer.innerHTML = "";
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classNameList.add("error");
    msg.innerHTML = "Please enter your name and email";
    setTimeout(() => msg.remove(), 5000);
  } else {
    msg.classNameList.add("success");
    msg.innerHTML = "User added successfully!";
    setTimeout(() => msg.remove(), 5000);
    // const li = document.createElement("li");
    userContainer.classNameList.add("users-style");
    userContainer.innerHTML = `
            <h2>Saved Details</h2>
            <p><b>Name</b>: ${nameInput.value}</p>
            <p><b>Email</b>: ${emailInput.value}</p>
        `;
    setTimeout(() => userContainer.remove(), 5000);
    nameInput.value = "";
    emailInput.value = "";
  }
}
