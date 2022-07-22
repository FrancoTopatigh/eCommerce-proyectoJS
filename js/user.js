const aplication = document.querySelector('.container-user')

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then((res) => res.json())
.then((data) => {
    data.forEach(user => {
        // DATOS PROVEEDORES
        const paragraph = document.createElement("p")
        paragraph.innerHTML = user.name + "<br/>" + "Email:  " + user.email + "  " + " - "  + "Telefono:  " + user.phone
        aplication.appendChild(paragraph)
    })
})
.catch(err => console.log(err))