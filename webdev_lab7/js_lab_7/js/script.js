function init() {
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    const message = input.value.trim();
    if (message === "") {
      alert("Please enter a message!");
    } else {
      alert("Jason Guan: " + message);
      output.textContent = message;
    }
  });
}

window.addEventListener("load", init);
