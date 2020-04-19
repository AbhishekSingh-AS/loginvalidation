var attempt = 3;
function validate(){
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
// const loginErrorMsg = document.getElementById("login-error-msg");
if(username.length === 0)
{
    alert("UserName Can't be EMPTY;");
    return false;
} 
else if(password.length < 8)
{
    alert("Password must Consist of 8 Characters;");
    return false;
}
else if(username.length > 1 && password.length > 8)
{
    if( username == "user" && password == "qwertyuiop")
    {
        alert("login successfully");
        window.location = "info.html";
        return false;
    }
    else
    {
        attempt--;
        alert("WRONG CREDENTIALS!!! You have left "+attempt+" attempt;");
        if(attempt == 0)
        {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
}