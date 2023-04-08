let myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiSave = document.getElementById("emoji-save");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
let savedEmojis = JSON.parse(localStorage.getItem("myEmojis")) || [];

function renderEmojis(emojiList) {
  let emojiHtml = "";
  for (let i = 0; i < emojiList.length; i++) {
    emojiHtml += `<span> ${emojiList[i]}</span>`;
  }
  emojiContainer.innerHTML = emojiHtml;
}

function renderSavedEmojis() {
  emojiSave.innerHTML = "";
  let emojiHtml = "";
  for (let i = 0; i < savedEmojis.length; i++) {
    emojiHtml += `<span> ${savedEmojis[i]}</span>`;
  }
  emojiSave.innerHTML = emojiHtml;
}

// Render saved emojis when the page loads
renderSavedEmojis();

saveBtn.addEventListener("click", function () {
  // Update the saved emojis
  savedEmojis = [...myEmojis];
  localStorage.setItem("myEmojis", JSON.stringify(savedEmojis));
  renderSavedEmojis();
});

resetBtn.addEventListener("click", function () {
  localStorage.clear();
  savedEmojis = [];
  renderSavedEmojis();
});

renderEmojis(myEmojis);

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    renderEmojis(myEmojis);
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    renderEmojis(myEmojis);
  }
});

popBtn.addEventListener("click", function () {
  myEmojis.pop();
  renderEmojis(myEmojis);
});

shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  renderEmojis(myEmojis);
});
