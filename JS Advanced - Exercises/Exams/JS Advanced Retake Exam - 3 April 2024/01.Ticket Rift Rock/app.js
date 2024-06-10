window.addEventListener("load", solve);

function solve() {
    const form = document.querySelector(".ticket-form");
    const numberOfTicketsInput = document.getElementById('num-tickets');
    const seatingPreferenceInput = document.getElementById('seating-preference');
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phone-number');
    const purchaseBtn = document.getElementById('purchase-btn');
    const contentDiv = document.querySelector(".bottom-content");
    const previewList = document.querySelector("#ticket-preview");
    const purchaseList = document.querySelector("#ticket-purchase");

    purchaseBtn.addEventListener("click", onPurchaseBtnClick);

    function onPurchaseBtnClick(event) {
        const numberOfTickets = numberOfTicketsInput.value;
        const seatingPreference = seatingPreferenceInput.value;
        const fullName = fullNameInput.value;
        const email = emailInput.value;
        const phoneNumber = phoneNumberInput.value;

        if (
            numberOfTickets === "" ||
            seatingPreference === "" ||
            fullName === "" ||
            email === "" ||
            phoneNumber === ""
        ) {
            console.log("Please fill in all fields.");
            return;
        }

        const liEl = createElement("li", "", "ticket-purchase");
        const articleEl = createElement("article", "",);
        const ticketsCountP = createP(`Count: ${numberOfTickets}`);
        const preferenceP = createP(`Preference: ${seatingPreference}`);
        const fullNameP = createP(`To: ${fullName}`);
        const emailP = createP(`Email: ${email}`);
        const phoneNumberP = createP(`Phone Number: ${phoneNumber}`);
        const buttonsDiv = createElement("div", "", "btn-container");
        const editBtn = createBtn("Edit", "edit-btn");
        editBtn.addEventListener("click", onEditBtnClick);
        const nextBtn = createBtn("Next", "next-btn");
        nextBtn.addEventListener("click", onNextBtnClick);

        liEl.appendChild(articleEl);
        articleEl.appendChild(ticketsCountP);
        articleEl.appendChild(preferenceP);
        articleEl.appendChild(fullNameP);
        articleEl.appendChild(emailP);
        articleEl.appendChild(phoneNumberP);
        liEl.appendChild(buttonsDiv);
        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(nextBtn);
        previewList.appendChild(liEl);
        purchaseBtn.disabled = true;
        form.reset();

        function onEditBtnClick() {
            liEl.remove();
            numberOfTicketsInput.value = numberOfTickets;
            seatingPreferenceInput.value = seatingPreference;
            fullNameInput.value = fullName;
            emailInput.value = email;
            phoneNumberInput.value = phoneNumber;
            purchaseBtn.disabled = false;
        }

        function onNextBtnClick() {
            liEl.remove();
            buttonsDiv.remove();
            const buyBtn = createBtn("Buy", "buy-btn");
            buyBtn.addEventListener("click", onBuyBtnClick);
            articleEl.appendChild(buyBtn);
            purchaseList.appendChild(liEl);

            function onBuyBtnClick() {
                liEl.remove();
                const h2El = createElement("h2", "Thank you for your purchase!");
                const backBtn = createBtn("Back", "back-btn");
                backBtn.addEventListener("click", onBackBtnClick);
                contentDiv.appendChild(h2El);
                contentDiv.appendChild(backBtn);

                function onBackBtnClick() {
                    location.reload();
                }
            }
        }

    }

    function createElement(type, textContent, className) {
        const element = document.createElement(type);
        element.textContent = textContent;
        if (className) {
            element.classList.add(className);
        }
        return element;
    }

    function createP(textContent) {
        return createElement("p", textContent);
    }

    function createBtn(textContent, className) {
        const button = createElement("button", textContent, className);
        return button;
    }
}
