function attachEvents() {
  document.getElementById("btnLoadPosts").addEventListener("click", onPosts);
  document.getElementById("btnViewPost").addEventListener("click", onView);
  const selectEl = document.getElementById("posts");
  const h1El = document.getElementById("post-title");
  const pEl = document.getElementById("post-body");
  const ulEl = document.getElementById("post-comments");

  async function onPosts() {
    const response = await fetch("http://localhost:3030/jsonstore/blog/posts");
    const postsData = await response.json();
    selectEl.innerHTML = "";
    for (let { id, title } of Object.values(postsData)) {
      const optionEl = document.createElement("option");
      optionEl.value = id;
      optionEl.textContent = title.toUpperCase();;
      selectEl.appendChild(optionEl);
    }
  }

  async function onView() {
    const selectPostId = selectEl.value;
    const allCommentsUrl = "http://localhost:3030/jsonstore/blog/comments";
    const commentsResponse = await fetch(allCommentsUrl);
    const commentsData = await commentsResponse.json();
    const postUrl = `http://localhost:3030/jsonstore/blog/posts/${selectPostId}`;
    const postResponse = await fetch(postUrl);
    const postData = await postResponse.json();
    h1El.textContent = postData.title.toUpperCase();
    pEl.textContent = postData.body;
    const searchComments = Array.from(Object.values(commentsData)).filter(
      (el) => el.postId === postData.id
    );
    ulEl.innerHTML = "";
    for (let comment of searchComments) {
      const li = document.createElement("li");
      li.textContent = comment.text;
      li.id = comment.id;
      ulEl.appendChild(li);
    }
  }
}

attachEvents();
