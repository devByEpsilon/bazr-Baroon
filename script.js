function copyCard() {
  const text = "1963 2940 9981 6037";
  navigator.clipboard.writeText(text).then(() => {
    const msg = document.getElementById("copyMessage");
    msg.textContent = "کپی شد!";
    msg.classList.add("show");

    setTimeout(() => {
      msg.classList.remove("show");
      msg.textContent = "";
    }, 2000);
  });
}
