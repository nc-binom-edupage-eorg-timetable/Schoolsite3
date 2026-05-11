// Save notes automatically
const noteInput = document.getElementById("noteInput");

// Load saved note
noteInput.value = localStorage.getItem("savedNote") || "";

// Save note on input
noteInput.addEventListener("input", () => {
  localStorage.setItem("savedNote", noteInput.value);
});

function appendValue(value) {
  document.getElementById("calcDisplay").value += value;
}

function clearDisplay() {
  document.getElementById("calcDisplay").value = "";
}

function calculate() {
  const display = document.getElementById("calcDisplay");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// ✅ NumLock keypad input
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const display = document.getElementById("calcDisplay");

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    display.value += key;
  }
  if (key === "Enter") calculate();
  if (key === "Backspace") display.value = display.value.slice(0, -1);
  if (key === "Escape") clearDisplay();
});
