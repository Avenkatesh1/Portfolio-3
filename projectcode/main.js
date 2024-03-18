
const copyBtn = document.querySelector(".copy-btn");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textarea.select();
  document.execCommand("copy");
  copyBtn.innerHTML = "<i class='fas fa-check'></i>";
  copyBtn.style.background = "#2DCDA7";
  copyBtn.style.color = "#fff";

  setTimeout(() => {
    document.getSelection().removeAllRanges();
    copyBtn.innerHTML = "<i class='fas fa-copy'></i>";
    copyBtn.style.background = "";
    copyBtn.style.color = "";
  }, 5000);
});