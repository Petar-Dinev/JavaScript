function attachEvents() {
  const submitBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");
  const textArea = document.getElementById("messages");
  submitBtn.addEventListener("click", colectInfo);
  refreshBtn.addEventListener("click", getAllPost);
}

function showAllMsg(data) {
  const posts = Object.values(data).map((value) => `${value.author}: ${value.content}`).join("\n");
  let textArea = document.getElementById("messages");
  
    textArea.textContent = posts;
  
}

function colectInfo() {
    const authorInput = document.querySelector("input[name='author']");
    const contentInput = document.querySelector('input[name="content"]');
   const body = {
    author: authorInput.value,
    content: contentInput.value
 }
    createPost(body);
    getAllPost();
}

async function getAllPost() {
  let url = "http://localhost:3030/jsonstore/messenger";
  const response = await fetch(url);
  const data = await response.json();
  showAllMsg(data);
}

async function createPost(body) {
  const url = "http://localhost:3030/jsonstore/messenger";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
attachEvents();
