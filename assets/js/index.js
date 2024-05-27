
/* boton e input */
const btnTarea = document.querySelector('#btnTarea')

const creaTarea = document.querySelector('#creaTarea')


 

//Evento para capturar el valor del input
let value = ''


  
creaTarea.addEventListener('change', (e) => {
    value = e.target.value
    
     
})

//Crea la tarea
let contador = 0
const crearTareita = () => {

    if (value === '')  
    {
        alert ("ingrese texto en el input")
    }
    else {

   
    contador++
    const div = `
        <div id="padre-${contador}" class="card fondo"> 
            <div class="mt-3">
                <div  class= "form-check container-padre__input d-flex  ">
                    <button id="text-${contador}" class=" check-input"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg></button>
                    <label class="form-check-label" for="defaultCheck1 ">
                        <p class= "parrafo-tarea"id="parrafo-${contador}"> ${value} </p>
                    </label>                 
                    <div>
                        <button id="btnDelete-${contador}" class="color-boton__eliminar"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                      </svg> </button>
                    </div> 
                </div> 
            </div> 
        </div>
           
    `
    
    const tareas = document.querySelector('#tareas')
    tareas.insertAdjacentHTML('afterbegin', div)   
    //Evento de tachado
    const containerPadre = document.querySelector(`#padre-${contador}`)
    const tareaDos = document.querySelector(`#text-${contador}`)
    const textoDos = document.querySelector(`#parrafo-${contador}`)
   tareaDos.addEventListener ('click', () => {
        textoDos.classList.toggle('text-decoration-line-through') 
        btnDelete.classList.toggle ('color-button__delete')   
})
//Evento para eliminar
    const btnDelete = document.querySelector ( `#btnDelete-${contador}`)
        btnDelete.addEventListener ('click', () => 
        { 
            containerPadre.remove ()
            
        })
    const tareaDosCheck = document.querySelector('.form-check')
        tareaDosCheck.addEventListener ('click', () => {
            tareaDosCheck.classList.toggle ('clickCheck')
            

            
            
        })
    
    //eliminar contenido del input
    creaTarea.value = ''
    value = ''
}
}
btnTarea.addEventListener('click', crearTareita)
































// let click = creaTarea
// const crearTarea = () => {
   
//     const div = document.createElement('div')
//     div.classList.add('form-check')
//     const input = document.createElement('input')
//     input.type = 'checkbox'    
//     input.id = '2'
//     input.classList.add('form-check-input')
//     const label = document.createElement('label')
//     label.classList.add('form-check-label')
//     const parrafo = document.createElement('p')
//     parrafo.id = 'textDos'
//     parrafo.classList.add('dos')
//     parrafo.textContent = value
//     div.insertAdjacentElement('afterbegin', label)
//     div.insertAdjacentElement('afterbegin', input)
//     label.insertAdjacentElement('afterbegin', parrafo)
//     const tareas = document.querySelector('#tareas')
//     tareas.insertAdjacentElement('afterbegin', div)

// }


















































