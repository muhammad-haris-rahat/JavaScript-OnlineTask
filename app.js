function ShowOrHide(){
    let input = document.getElementById("password")
    if(input.type === "password"){
        input.type = "text"
    }else{
        input.type = "password"
    }
}