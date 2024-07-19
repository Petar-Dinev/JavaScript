window.addEventListener('load', solve);

function solve() {
    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');
    const nextBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list')
    const statusHeader = document.getElementById('status');

    nextBtn.addEventListener('click', onNextBtnCLick);

    function onNextBtnCLick(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const fromDate = fromDateInput.value;
        const toDate = toDateInput.value;

        if (firstName == '' || lastName == '' || fromDate == '' || toDate == '' || (fromDate >= toDate)) {
            return;
        }

        nextBtn.disabled = true;
        form.reset();

        const li = createElement('li', '', 'vacation-content');
        const article = createElement('article');
        li.appendChild(article);
        const nameHeader = createElement('h3', `Name: ${firstName} ${lastName}`);
        article.appendChild(nameHeader);
        const fromDateP = createP(`From date: ${fromDate}`);
        article.appendChild(fromDateP);
        const toDateP = createP(`To date: ${toDate}`);
        article.appendChild(toDateP)
        const editBtn = createBtn('Edit', 'edit-btn');
        editBtn.addEventListener('click', onEditBtnCLick)
        li.appendChild(editBtn)
        const continueBtn = createBtn('Continue', 'continue-btn');
        continueBtn.addEventListener('click', onContinueBtnClick);
        li.appendChild(continueBtn);
        infoList.appendChild(li);

        function onEditBtnCLick() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            fromDateInput.value = fromDate;
            toDateInput.value = toDate;
            nextBtn.disabled = false;
            li.remove();
        }

        function onContinueBtnClick() {
            editBtn.remove();
            continueBtn.remove();
            const confirmBtn = createBtn('Confirm', 'confirm-btn');
            confirmBtn.addEventListener('click', onConfirmBtnClick);
            li.appendChild(confirmBtn);
            const cancelBtn = createBtn('Cancel', 'cancel-btn');
            cancelBtn.addEventListener('click', onCancelBtnClick);
            li.appendChild(cancelBtn);
            confirmList.appendChild(li);

            function onConfirmBtnClick() {
                li.remove();
                statusHeader.textContent = "Vacation Requested";
                statusHeader.className = "vacation-confirmed";
                nextBtn.disabled = false;
                statusHeader.addEventListener('click', onStatusHeaderClick)
            }
            function onCancelBtnClick() {
                li.remove();
                nextBtn.disabled = false;
                statusHeader.textContent = 'Cancelled Vacation';
                statusHeader.className = 'vacation-cancelled'
                statusHeader.addEventListener('click', onStatusHeaderClick)
            }

            function onStatusHeaderClick() {
                location.reload()
            }
        }

    }

    function createElement(type, content, className) {
        const el = document.createElement(type);
        el.textContent = content;
        if (className) {
            el.className = className;
        }
        return el;
    }

    function createP(content, className) {
        return createElement('p', content, className)
    }

    function createBtn(content, className) {
        return createElement('button', content, className)
    }
}