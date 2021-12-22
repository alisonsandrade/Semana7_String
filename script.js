function createList(number, title) {
    for (let index = 0; index < number; index++) {;
        let cont = index + 1
        let node = document.createElement("li");
        node.className = "list-group-item"
        if (title === "" || title === undefined) {
            let textNode = document.createTextNode("Text " + cont)
            node.appendChild(textNode)
        } else {
            let textNode = document.createTextNode(`${title} ${cont}`)
            node.appendChild(textNode)
        }
        
        document.querySelector("#list").appendChild(node)
        
    }
}

document.querySelector("#btnGenerator").addEventListener("click", function(event) {
    event.preventDefault()
    
    let quantidade = parseInt(document.querySelector("#number").value)
    const titulo = document.querySelector("#title").value

    quantidade = isNaN(quantidade) || quantidade <= 0 ? 1 : quantidade

    createList(quantidade, titulo)
    document.querySelector("#btnGenerator").setAttribute('disabled', 'disabled')
})