const popup = document.querySelector(".form");
const form = popup.querySelector("form");
const name = popup.querySelector("[name=name]");
const weight = popup.querySelector("[name=weight]");
const age = popup.querySelector("[name=age]");
const mail = popup.querySelector("[name=mail]");
const phone = popup.querySelector("[name=phone]");

let isStorageSupport = true;

form.addEventListener("submit", function (evt) {
  if (!name.value || !weight.value || !age.value || !mail.value || !phone.value) {
    evt.preventDefault();
    form.classList.add("form-error");
  } else {
    if(isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("weight", weight.value);
      localStorage.setItem("age", age.value);
      localStorage.setItem("mail", mail.value);
      localStorage.setItem("phone", phone.value);
    }
  }
})
