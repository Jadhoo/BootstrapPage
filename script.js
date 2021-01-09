document.getElementById("toggle-menu").addEventListener('click', event => {
    event.preventDefault();
    document.getElementById("wrapper").classList.toggle("toggled");
    document.getElementById("rose-img").classList.toggle("rose-t");
  });