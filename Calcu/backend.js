let limit = 0;
function declareValue(value){
    const a = document.getElementById("result");
    if(limit != 13){
        limit += 1;
        a.textContent += value;
    }else if(limit === 13){
        window.location.href = "./calcu.html";
    }
}
function operation(){    
    const a =document.getElementById("result");
    a.textContent = eval(a.textContent);
}

function clearBox(){
    window.location.href = "./calcu.html";
}
