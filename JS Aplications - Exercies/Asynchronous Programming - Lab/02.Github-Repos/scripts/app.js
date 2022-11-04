function loadRepos() {
  let username = document.getElementById("username").value;
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
}

function handleResponse(response) {
  if (response.ok == false) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

function handleData(data) {
  const list = document.getElementById("repos");

  let items = data.map((rep) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = rep.html_url;
    a.textContent = rep.full_name;
    li.appendChild(a);
    return li;
  });

  list.replaceChildren(...items);
}

function handleError(error) {
  const list = document.getElementById("repos");
  list.textContent = error;
}
