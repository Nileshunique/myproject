var input = [23,56,55,43,24];

function createArrayOfEvenNumber(a){
    var b = [],c = [], i;

    for(i=0;i<=a.length;i++){
        if(a[i] % 2==0){
            c.push(a[i]);
        }
        else {
            b.push(a[i]);
        }
    }
    return b;
}

var result = createArrayOfEvenNumber(input);
console.log(result);

/*
var input = [23,56,55,43,24];

function createArrayOfEvenNumber(a){
    var b = [],i;

    for(i=0;i<=a.length;i++){
        if(a[i] % 2==0){
            a.pop();
        }
        else {
            b.push(a[i]);
        }
    }
    return b;
}

var result = createArrayOfEvenNumber(input);
console.log(result);

*/


/*

var input = [23,56,55,43,24];

function createArrayOfEvenNumber(a){
    var b = [],i;

    for(i=0;i<=a.length;i++){
        if(a[i] % 2==0){
            b.push(a[i]);
        }
    }
    return b;
}

var result = createArrayOfEvenNumber(input);
console.log(result);
*/