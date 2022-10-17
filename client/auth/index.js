let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let urlencoded = new URLSearchParams();
urlencoded.append("id", "test2136");

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
};

fetch("http://localhost:3000/auth", requestOptions)
    .then(response => response.json())
    .then(result => {
        localStorage.setItem('token', result.token);
        window.location.replace("/");
    });
