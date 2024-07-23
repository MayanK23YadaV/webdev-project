function calculate(){
    let F = document.getElementById("input").value
    fact=parseFloat(F)
    let result;
    result=fact+10
    document.getElementById("result").innerHTML = "result == "+ result;
}