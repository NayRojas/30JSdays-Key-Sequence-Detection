let keysArray = [];
const secretCode = "sexy";

window.addEventListener("keyup", (e) => {
  keysArray.push(e.key);
  keysArray.splice(
    -secretCode.length - 1,
    keysArray.length - secretCode.length
  );
  console.log(keysArray.join(""));

  if (keysArray.join("").includes(secretCode)) {
    alert("They did pressed the secret code");
    cornify_add();
  }
});
