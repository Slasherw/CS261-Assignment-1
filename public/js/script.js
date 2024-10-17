/*function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(text => {
        console.log("Text return from REST API: "+text);
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}*/
