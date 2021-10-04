function tabuada(){
    var number = document.getElementById('txtn');
    var tabuada = document.getElementById('seltab');
    var n = Number(number.value);
    tabuada.innerHTML = '';
    for(var c = 1; c <= 10; c++){
        var item = document.createElement('option');
        item.text = `${n} x ${c} = ${n*c}`;
        item.value = '';
        tabuada.appendChild(item);
    }
}