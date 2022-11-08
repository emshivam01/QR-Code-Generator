let input = document.getElementById("value");
let btn = document.getElementById("btn");
let qrCode = document.getElementById("qr-code");
let section = document.getElementById("sec");

btn.addEventListener("click", () => {
  let value = input.value;
  if (!value) return;
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${value}`;
  input.value = "";
  section.classList.add("p-6");
});
