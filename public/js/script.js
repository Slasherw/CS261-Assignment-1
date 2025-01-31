function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key' : 'TUd6556e896ce761431356547921d5f66d58b6d65fbe205ad5b2e17c617f73f0c3788b47da54c864a2fc8b300285695574'
        },
        body: JSON.stringify({ "UserName":username, "PassWord":password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message || 'Login successful!';
        if (data.status) { //verify login
            if (data.type === role){
                accountInfo(data); 
            }else if (data.type !== role){
                document.getElementById('message').innerText = 'Invalid Type!';
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerText = "Error with request"
    });
}

function accountInfo(data) {
    const accountInfoContainer = document.getElementById('accountInfo');
    accountInfoContainer.innerHTML = `
        <center> <h2> Account Information </h2> </center>
         <div style="height: 10px;"> </div>
        <p> <strong> Username:</strong> ${data.username || 'N/A'}</p>
        <p> <strong> Display Name (TH):</strong> ${data.displayname_th || 'N/A'}</p>
        <p> <strong> Display Name (EN):</strong> ${data.displayname_en || 'N/A'}</p>
        <p> <strong> Email:</strong> ${data.email || 'N/A'}</p>
        <p> <strong> Department:</strong> ${data.department || 'N/A'}</p>
        <p> <strong> Faculty:</strong> ${data.faculty || 'N/A'}</p>
    `;

    accountInfoContainer.style.display = 'block';
    accountInfoContainer.classList.add('show');
}
// check login
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const roleSelect = document.getElementById('role');
    const loginButton = document.getElementById('loginButton');

    function checkInputs() {
        const isUsernameFilled = usernameInput.value.trim() !== '';
        const isPasswordFilled = passwordInput.value.trim() !== '';
        const isRoleSelected = roleSelect.value !== '';

        loginButton.disabled = !(isUsernameFilled && isPasswordFilled && isRoleSelected);
    }

    usernameInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);
    roleSelect.addEventListener('change', checkInputs);

    checkInputs();
});

function togglePassword() { //hiding password
    var passwordField = document.getElementById("password");
    var toggleBtn = document.querySelector(".toggle-password");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleBtn.textContent = "Show";
    }
}

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
