const addguest = document.getElementById('addguest');

    addguest.addEventListener('click', function(e){
        e.preventDefault();
        const boxconvidados = document.getElementById('boxconvidados');

        boxconvidados.classList.toggle('show');
    })