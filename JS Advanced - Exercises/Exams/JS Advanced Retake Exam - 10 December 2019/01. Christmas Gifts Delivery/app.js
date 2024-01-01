function solution() {
  const gifts = [];

  const giftInput = document.querySelector(".card input");
  const addBtn = document.querySelector(".card>div button");
  const allListForGifts = document.querySelectorAll(".card ul");
  const listOfGifts = allListForGifts[0];
  const listOfSentGifts = allListForGifts[1];
  const listOfDiscardedGifts = allListForGifts[2];

  addBtn.addEventListener("click", onAddBtnClick);

  function onAddBtnClick() {
    const giftName = giftInput.value;
    const li = document.createElement("li");
    li.className = "gift";
    li.textContent = giftName;
    const sendBtn = document.createElement("button");
    sendBtn.id = "sendButton";
    sendBtn.textContent = "Send";
    li.appendChild(sendBtn);
    const discardBtn = document.createElement("button");
    discardBtn.id = "discardButton";
    discardBtn.textContent = "Discard";
    li.appendChild(discardBtn);
    gifts.push(li);
    const sortedGifts = gifts.sort((a, b) =>
      a.textContent.localeCompare(b.textContent)
    );
    for (let liEl of sortedGifts) {
      listOfGifts.appendChild(liEl);
    }
    giftInput.value = "";

    sendBtn.addEventListener("click", onSendBtnClick);
    discardBtn.addEventListener("click", onDiscardBtnClick);

    console.log(listOfGifts.children);
    console.log(listOfGifts.children[0]);
    console.log(listOfGifts.children[0].children);

    function onSendBtnClick() {
      sendBtn.remove();
      discardBtn.remove();
      listOfSentGifts.appendChild(li);
      const index = gifts.findIndex((l) => l.textContent == li.textContent);
      gifts.splice(index, 1);
    }

    function onDiscardBtnClick() {
      sendBtn.remove();
      discardBtn.remove();
      listOfDiscardedGifts.appendChild(li);
      const index = gifts.findIndex((l) => l.textContent == li.textContent);
      gifts.splice(index, 1);
    }
  }
}
