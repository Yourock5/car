const form = document.querySelector('.form-test-drive')
//https://jsonplaceholder.typicode.com
form.addEventListener('submit', (event) => {
    event.preventDefault()

    let data = {}

    for (let { name, value } of form.elements) {
        if (name) {
            data[name] = value
        }
    }

    fetch('https://mbox2.i.ua/?_rand=1940649830&_rand=1632478084&phcode=32222a8eed9edf3d1a54006857d4e5a3', {
        method: 'POST', 
        body: JSON.stringify(data)
})
    .then(response => {
        if (response.status === 200 || response.status === 201) {
            return response.json()
        } else {
            throw new Error(response.status)
        }
    })
    .then(data => {
        alert('успешно')
        form.requestFullscreen()
    })
    .catch(error => {
        alert()
    })
})