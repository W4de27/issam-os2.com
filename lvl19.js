document.getElementById("btn").addEventListener("click", function () {
  const inp1 = document.getElementById("name");
  const inp3 = document.getElementById("m");
  const inp4 = document.getElementById("y");
  const inp5 = document.getElementById("cvc");

  let error1 = document.getElementById("num");
  let error2 = document.getElementById("my");
  let error3 = document.getElementById("cv");

  let span1 = document.getElementById("n");
  let span2 = document.getElementById("nm");
  let span3 = document.getElementById("date");

  let input = document.getElementById("number").value;
  input = input.replace(/\s+/g, "");
  let formative = input.match(/.{1,4}/g)?.join(" ") || "";
  const onlynumber = /\d{16}/g;
  const lettreCount = (input.match(/[a-zA-Z]/g) || []).length;

  if (onlynumber.test(document.getElementById("number").value)) {
    span2.textContent = inp1.value;
    span1.textContent = formative;
  } else if (lettreCount > 0 && lettreCount < 16) {
    error1.style.visibility = "visible";
    document.getElementById("number").style.border = "1px solid red";
  } else {
    error1.style.visibility = "visible";
    document.getElementById("number").style.border = "1px solid red";
  }

  if (inp3.value === "") {
    inp3.style.border = "1px solid red";
    error2.style.visibility = "visible";
  } else {
    document.getElementById("l").textContent = inp3.value;
  }
  if (inp4.value === "") {
    inp4.style.border = "1px solid red";
    error2.style.visibility = "visible";
  } else {
    document.getElementById("r").textContent = inp4.value;
  }

  if (inp5.value === "") {
    inp5.style.border = "1px solid red";
    error3.style.visibility = "visible";
  }
});
