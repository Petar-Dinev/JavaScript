function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(x => x.addEventListener('click', onToggle));


    function onToggle(e) {
        const parent = e.target.parentElement;
        if(parent.querySelector('input[value="unlock"]').checked) {
            console.log(parent.querySelector('div'));
            if(e.target.textContent === 'Show more') {
                parent.querySelector('div').style.display = 'block'
                e.target.textContent = 'Hide it'
            } else {
                parent.querySelector('div').style.display = 'none'
                e.target.textContent = 'Show more' 
            }
           
        }
    }
}
