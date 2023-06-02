function displayInfo(res) {
    let users = res.data;
    let list = document.querySelector('ul');
    if (list != null) list.remove();

    const ul = document.createElement('ul');
    for (let user of users) {
        let li = document.createElement('li');
        li.textContent = "@" + user.name + " : " + user.text;
        ul.appendChild(li);
        document.body.appendChild(ul);

    }
    console.log(users);

}

function addText() {
    const text = document.querySelector('#text').value;
    let user = {name: "Unknown", text: text}
    // TODO : handle POST return status code
    axios.post(url, user).then(displayInfo)
}

const url = "http://localhost:5005/users";
axios.get(url).then(displayInfo);

const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', addText);
