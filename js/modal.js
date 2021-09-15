let open_modal = document.getElementById('open_modal')
let modal = document.getElementById('modal')
let close = document.getElementById('close')

open_modal.addEventListener('click', function(event) {
     event.preventDefault()
     modal.style.display = 'block'
});

close.addEventListener('click', function(event) {
    event.preventDefault()
    modal.style.display = 'none'
});