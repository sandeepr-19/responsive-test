function action() {
  let name1 = document.getElementById("yourname").value;
  let name2 = document.getElementById("partnername").value;
  if (name1 != "" && name2 != "") {
    sessionStorage.setItem("name1", name1);
    sessionStorage.setItem("name2", name2);
    submit();
  } else {
  }
}
function submit() {
  window.location.href = "sec_page.html";
}
