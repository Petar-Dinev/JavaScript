async function loadCommits() {
  const username = document.getElementById("username").value;
  const repoName = document.getElementById("repo").value;
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/commits`
    );
    if (response.status != "200") {
      throw new Error(`${response.status} (Not Found)`);
    }
    const data = await response.json();
    const ulEl = document.getElementById("commits");

    const commits = data.map((el) => {
      const li = document.createElement("li");
      li.textContent = `${el.commit.author.name}: ${el.commit.message}`;
      return li;
    });
    ulEl.replaceChildren(...commits);
  } catch (error) {
    ulEl = document.getElementById("commits");
    const li = document.createElement("li");
    li.textContent = error;
    ulEl.replaceChildren(li);
  }
}
