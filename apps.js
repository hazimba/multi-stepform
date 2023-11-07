let continueButton = document.querySelectorAll('.continue')
    let backButton = document.querySelectorAll('.back')
    let container = document.querySelectorAll('.main-container')
    
    let counter = 0
    function goNext(){
        container[counter].classList.remove('to-display')
        container[counter+1].classList.add('to-display')
        counter++
    }

    function goBack(){
        container[counter].classList.remove('to-display')
        container[counter-1].classList.add('to-display')
        counter--
    }