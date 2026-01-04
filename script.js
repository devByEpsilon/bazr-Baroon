function copyCard() {
  const text = "6037 9981 2940 1963";
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
