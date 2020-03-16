const username = document.getElementById('username')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value === '' || username.value == null){
        messages.push('Name is required')
    }

    if (password.value === confirm.value){
        alert('registrasi sukses')
    }

    if (password.value != confirm.value){
        messages.push('Password tidak sama')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
   
})