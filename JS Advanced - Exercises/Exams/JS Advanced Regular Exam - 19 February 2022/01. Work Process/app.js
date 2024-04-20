function solve() {
    const form = document.querySelector('form')
    const firstNameInput = document.getElementById('fname')
    const lastNameInput = document.getElementById('lname')
    const emailInput = document.getElementById('email')
    const birthInput = document.getElementById('birth')
    const positionInput = document.getElementById('position')
    const salaryInput = document.getElementById('salary')
    const addWorkerBtn = document.getElementById('add-worker')
    const tableBody = document.getElementById('tbody')
    const budgetSpan = document.getElementById('sum')

    addWorkerBtn.addEventListener('click', makeTr)

    function makeTr(e) {
        e.preventDefault()

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const birth = birthInput.value;
        const position = positionInput.value;
        const salary = salaryInput.value;

        if (firstName == '' || lastName == '' || email == '' || birth == '' || position == '' || salary == '') {
            return
        }

        const tr = document.createElement('tr')
        const firstNameTd = createElement('td', firstName)
        const lastNameTd = createElement('td', lastName)
        const emailTd = createElement('td', email)
        const birthTd = createElement('td', birth)
        const positionTd = createElement('td', position)
        const salaryTd = createElement('td', salary)
        const actionsTd = document.createElement('td')
        const firedBtn = createElement('button', 'Fired')
        firedBtn.className = 'fired'
        firedBtn.addEventListener('click', onFired)
        const editBtn = createElement('button', 'Edit')
        editBtn.className = 'edit'
        editBtn.addEventListener('click', onEdit)
        actionsTd.appendChild(firedBtn)
        actionsTd.appendChild(editBtn)

        tr.appendChild(firstNameTd)
        tr.appendChild(lastNameTd)
        tr.appendChild(emailTd)
        tr.appendChild(birthTd)
        tr.appendChild(positionTd)
        tr.appendChild(salaryTd)
        tr.appendChild(actionsTd)
        tableBody.appendChild(tr)
        form.reset()

        let currentBudget = Number(budgetSpan.textContent) + Number(salary);
        budgetSpan.textContent = currentBudget.toFixed(2)

        function onFired() {
            tr.remove()
            currentBudget = Number(budgetSpan.textContent) - Number(salary)
            budgetSpan.textContent = currentBudget.toFixed(2)
        }
        function onEdit() {
            tr.remove()
            currentBudget = Number(budgetSpan.textContent) - Number(salary)
            budgetSpan.textContent = currentBudget.toFixed(2)
            firstNameInput.value = firstName
            lastNameInput.value = lastName
            emailInput.value = email
            birthInput.value = birth
            positionInput.value = position
            salaryInput.value = salary
        }

    }

    function createElement(type, content) {
        const el = document.createElement(type);
        el.textContent = content;
        return el;
    }
}
