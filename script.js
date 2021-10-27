let button = document.querySelector('button');
let image = document.querySelector('img');

button.addEventListener('click', function(){
    image.classList.add('active');
    swal({
        content: image,
        button: 'ДА ОНКОН ТРАХНИ МЕНЯ'
    });
})