const pageUrl = window.location.href;
const authId = pageUrl.split('?').at(-1);

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let urlencoded = new URLSearchParams();
urlencoded.append("id", authId);

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
};

fetch("/auth", requestOptions)
    .then(response => response.json())
    .then(result => {
        localStorage.setItem('token', result.token);
        window.location.replace("/");
    });
