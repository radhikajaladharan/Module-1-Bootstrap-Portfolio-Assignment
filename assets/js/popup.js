document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("staticBackdrop");
  modal.addEventListener("show.bs.modal", function (event) {
    
    const button = event.relatedTarget;
    const title = button.getAttribute("data-title");
    const body = button.getAttribute("data-body");

    modal.querySelector(".modal-title").textContent = title;
    modal.querySelector(".modal-body").textContent = body;
  });
});
