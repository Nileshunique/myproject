document.querySelector('#clicking').addEventListener('click', function(){
    var name = document.querySelector('#name').value;
    console.log(name[0]);
    for(var i=1; i<=name.length; i++){
        if(name.charAt(i)==" "){
            console.log(name[i+1]);
            i=i+1;
        }
    }
});


/*
document.querySelector('#clicking').addEventListener('click', function(){
    var name = document.querySelector('#name').value;
    console.log(name[0]);
    for(var i=1; i<=name.length; i++){
        if(name.charAt(i)==" "){
            console.log(name[i+1]);
            i=i+1;
        }
    }
});
*/

/*

document.querySelector('#clicking').addEventListener('click', function(){
    var name = document.querySelector('#name').value;
    var initial = name.charAt(0);
    for(var i=1; i<=name.length; i++){
        if(name.charAt(i)==" "){
            initial = initial + name.charAt(i+1);
            i=i+1;
        }
    }
    console.log(initial);
});
*/

/*
function initial(name){
    var initial = name.charAt(0);
    for(var i=1; i<=name.length; i++){
        if(name.charAt(i)==" "){
            initial = initial + name.charAt(i+1);
        }
    }
    console.log(initial);
}
initial('Nilesh kumar');
*/