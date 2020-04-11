


var result = document.querySelectorAll("button");
for(var i=0; i<result.length; i++){
    result[i].onclick = function(){
        var fn = document.getElementById("fn").value;
        var sn = document.getElementById("sn").value;
        myfun(this.innerText,parseInt(fn),parseInt(sn));
    };
    // if(d.innerText == '+'){
    //     myfun(result[i].innerText);
    // }
    // if(d.innerText == '-'){
    //     myfun(result[i].innerText);
    // }
    // if(d.innerText == '*'){
    //     myfun(result[i].innerText);
    // }
    // if(d.innerText == ''){
    //     myfun(result[i].innerText);
    // }
}
function myfun(sym,fn,sn){
    if(sym == '+'){
        document.querySelector("#result").innerText = fn+sn;
    }
    if(sym == '-'){
        document.querySelector("#result").innerText = fn-sn;
    }
    if(sym == '*'){
        document.querySelector("#result").innerText = fn*sn;
    }
    if(sym == '/'){
        document.querySelector("#result").innerText = fn/sn;
    }
}