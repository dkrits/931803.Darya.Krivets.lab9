function getValue(){
    let Second = document.getElementsByClassName('second')[0];
    let a = Second.innerHTML.length-1;
    while (a > 0)
    {
        let ch = Second.innerHTML.charAt(a);
        if (ch == '.')
          return true;
        a -=1;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function(){document.getElementsByClassName('second')[0].innerHTML = '0'});
function calc(val){
    let notfirst = ['=', '/', '*'];
    let maybefirst = ['.', '+', '-'];
    let all = ['=', '/', '*', '+', '-'];
    let Second = document.getElementsByClassName('second')[0];
    let First = document.getElementsByClassName('first')[0];
    switch(val){
        case '=':
            Second.innerHTML = eval(First.innerHTML+Second.innerHTML);
            First.innerHTML ='';
            break;

        case 'C':
            Second.innerHTML = '';First.innerHTML = ''; 
            break;

        case 'CE':
            if(Second.innerHTML == '0'){
                First.innerHTML = '';
            }
            Second.innerHTML = Second.innerHTML.substr(0, Second.innerHTML.length - 1); 
            break;

        case '-':
        case '+':
        case '/':

        case '*':
            if(Second.innerHTML == '0') break;
            if(all.indexOf(First.innerHTML.substr(-1))!=-1 && Second.innerHTML == '0')
                First.innerHTML = First.innerHTML.substr(0, Second.innerHTML.length-1) + val;
            First.innerHTML = eval(First.innerHTML + Second.innerHTML) + val;
            Second.innerHTML = '';
            break;

        case '.':
            if (all.indexOf(Second.innerHTML.charAt(-1))!=-1){Second.innerHTML += '0.'; break;}
            if(!getValue()) Second.innerHTML += val;
            break;

        default:
            if (Second.innerHTML == 'Infinity' || Second.innerHTML == 'NaN') break;

            if (Second.innerHTML == '0')Second.innerHTML = val;
            else Second.innerHTML += val;
        break;}
    if (Second.innerHTML == ''){
        Second.innerHTML = '0';
    }
}
