function getArticleGenerator(articles) {
  let divEl = document.getElementById("content");
  return function nextArticle() {
    let currentArticle = articles.shift();
    if (currentArticle == undefined) {
      return;
    }
    let newArticle = document.createElement("article");
    newArticle.textContent = currentArticle;
    divEl.appendChild(newArticle);
  };
}
