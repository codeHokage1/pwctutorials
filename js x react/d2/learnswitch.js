// const color = "red";

// switch (color) {
//     case 'red': console.log("Color is red"); break;
//     case 'blue': console.log("Color is blue"); break;
//     case 'green': console.log("Color is green"); break;
//     default: console.log('Color is neither red, blue or green');
// }

let score = 60;
switch (true) {
  case score >= 70 && score <= 100:
    console.log("Distinction");
    break;
  case score >= 60 && score <= 69:
    console.log("Very Good");
    break;
  case score >= 50 && score <= 59:
    console.log("good");
    break;
  case score >= 40 && score <= 49:
    console.log("Pass");
        break;
  case score < 39:
        console.log("Failed");
        break;
  default:
    console.log("Score not recognized");
    break;
}
