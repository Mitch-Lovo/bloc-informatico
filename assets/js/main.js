import { getItems } from "./firestore.js";

const buton = document.getElementsByClassName('boton')
let categorias = document.querySelector('.categorias')
let todos


buton.addEventListener("click", (e) => {
  console.log('click')
})

async function loadTodos() {
  todos = []

  try {
    const response = await getItems();

    todos = [...response];
    mostrar()
  } catch (error) {
    console.error(error);
  }

  return todos
}

const mostrar = ()=>{
  let cat = ""
  todos.forEach(element => {
    console.log(element)
    cat += `
    <div class="categoria">
      <img src="${element.img}" alt="" />
      <h3>${element.nombre}</h3>
      <p>${element.descripcion}</p>
    </div>
    ` 
  });
  categorias.innerHTML = cat
  console.log(cat)
}


window.addEventListener("scroll", function () {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("scroll", this.window.scrollY > 0);

  //console.log(menu);
});

window.addEventListener("load", function(){
  console.log("loadd")
  //loadTodos()
})


