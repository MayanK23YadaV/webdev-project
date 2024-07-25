function calculate(){
    let F = document.getElementById("input").value
    let fact=parseFloat(F)
    let result = 1;
    for (let i=1 ; i<=fact ;i++){
    result *=i;}
    document.getElementById("result").innerHTML = "result == "+ result;
}
