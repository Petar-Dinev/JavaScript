window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const dateInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');

    const infoTicketSection = document.getElementById('info-ticket');
    const confirmTicketSection = document.getElementById('confirm-ticket-section');
    const div = document.getElementById('main');

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextClick)

    

    

    function onNextClick(e) {
        e.preventDefault();

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit"
        editBtn.className = 'edit-btn';
        const continueBtn = document.createElement('button');
        continueBtn.textContent = "Continue"
        continueBtn.className = 'continue-btn';
        const confirmBtn = document.createElement('button');
        confirmBtn.textContent = "Confirm"
        confirmBtn.className = 'confirm-btn';
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel"
        cancelBtn.className = 'cancel-btn';
        

        
        

        const tripInfo = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            people: peopleCountInput.value,
            date: dateInput.value,
            days: daysInput.value
        }

        if(tripInfo.firstName && tripInfo.lastName && tripInfo.people && tripInfo.date && tripInfo.days) {
            const li = document.createElement('li')
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            h3.textContent = `Name: ${tripInfo.firstName} ${tripInfo.lastName}`
            const p1 = document.createElement('p')
            p1.textContent = `From date: ${tripInfo.date}`
            const p2 = document.createElement('p')
            p2.textContent = `For ${tripInfo.days} days`
            const p3 = document.createElement('p')
            p3.textContent = `For ${tripInfo.people} people`
            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            li.appendChild(article);
            li.appendChild(editBtn);
            li.appendChild(continueBtn);
            editBtn.addEventListener('click', onEdit);
            continueBtn.addEventListener('click', onContinue);
            infoTicketSection.querySelector('ul').appendChild(li);
            
            e.target.parentElement.reset()
            nextBtn.disabled = true;

            function onEdit(e) {
                li.remove();
                firstNameInput.value = tripInfo.firstName
                lastNameInput.value = tripInfo.lastName
                dateInput.value = tripInfo.date
                daysInput.value = tripInfo.days
                peopleCountInput.value = tripInfo.people
                nextBtn.disabled = false;
            }

            function onContinue(e) {
              confirmTicketSection.querySelector('ul').appendChild(li)
              editBtn.remove();
              continueBtn.remove();
              li.appendChild(confirmBtn);
              li.appendChild(cancelBtn);
              confirmBtn.addEventListener('click', onConfirm);
              cancelBtn.addEventListener('click', onCancel);
            }

            function onConfirm(e) {
              div.remove()
              const h1 = document.createElement('h1');
              h1.id ="thank-you";
              h1.textContent = 'Thank you, have a nice day!';
              const backBtn = document.createElement('button');
              backBtn.id ="back-btn";
              backBtn.textContent = "Back"
              backBtn.onclick=() => location.reload()
              document.body.appendChild(h1)
              document.body.appendChild(backBtn)
            }

            function onCancel(e) {
                li.remove()
                nextBtn.disabled = false;
            }
        }
    }

}


    
    
