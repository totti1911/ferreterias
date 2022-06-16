
//seleccionar los elementos html que necesitamos
var input = document.getElementById("material")
var input2 = document.getElementById("cantidad")
var boton = document.getElementById("boton")
var input3 = document.getElementById("precio")
var input4 = document.getElementById("ferreteria")
var tareas = document.querySelector(".materiales")
var cantidades = document.querySelector(".cantidades")
var precios = document.querySelector(".precios")
var ferreterias = document.querySelector(".ferreterias")


//Cuando se haga click en el boton
boton.addEventListener("click", function() {
  //obtener lo que hay escrtito en el imput
  var material = input.value

  //añadirlo como un nuevo elemento <li>
  var li = document.createElement("li")
  li.textContent = material
  tareas.appendChild(li)


})
//Cuando se haga click en el boton
boton.addEventListener("click", function() {
    //obtener lo que hay escrtito en el imput
    var cantidad = input2.value
  
    //añadirlo como un nuevo elemento <li>
    var li = document.createElement("li")
    li.textContent = cantidad
    cantidades.appendChild(li)

  })
  //Cuando se haga click en el boton
boton.addEventListener("click", function() {
    //obtener lo que hay escrtito en el imput
    var precio = input3.value
  
    //añadirlo como un nuevo elemento <li>
    var li = document.createElement("li")
    li.textContent = precio
    precios.appendChild(li)

  })
//Cuando se haga click en el boton
boton.addEventListener("click", function() {
    //obtener lo que hay escrtito en el imput
    var precio = input4.value
  
    //añadirlo como un nuevo elemento <li>
    var li = document.createElement("li")
    li.textContent = ferreteria
    ferreterias.appendChild(li)

  })





