function removeBlog() {
  const btn = document.querySelectorAll(".btn-danger");

  btn.addEventListener("click", function () {
    const row = document.querySelectorAll(".row");
    row.remove();
    alert("succesful");
  });
}
removeBlog();

function addBlog() {
  const btn2 = document.querySelectorAll(".btn-primary");
  btn.addEventListener("click", function () {
    const add = document.querySelectorAll(".cardbody");
    add.createElement("th") * 3;
    add.innerText = ["tittle", "artistic", "year"];
    btn2.appendChild(add);
    alert("succesful");
  });
}
addBlog();
