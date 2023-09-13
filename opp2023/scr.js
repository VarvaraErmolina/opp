const node_for_click = document.getElementById("for_click")

function find_edit(){
    const name  = document.getElementsByTagName('div')[3]
    const surname  = document.getElementsByTagName('div')[4]
    const date  = document.getElementsByTagName('div')[7]
    name.innerText = 'Varvara'
    surname.innerText = 'Ermolina'
    date.innerText = 'dd.mm.yyyy'
}

node_for_click.addEventListener("click",find_edit)