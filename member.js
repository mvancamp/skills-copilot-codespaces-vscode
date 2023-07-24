function skillsMember() {
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberRegex = /^[A-Za-z0-9\s]+$/;
    if (member == "") {
        memberError.innerHTML = "Please enter your member";
        return false;
    } else if (!memberRegex.test(member)) {
        memberError.innerHTML = "Please enter a valid member";
        return false;
    } else {
        memberError.innerHTML = "";
        return true;
    }
}