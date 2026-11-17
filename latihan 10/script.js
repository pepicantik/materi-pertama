let aritmatikaAngka1,operatorAritmatika,aritmatikaAngka2,hasilOperasi;

document.getElementById('button_aritmatika').onclick = function() {
    //input
    aritmatikaAngka1 = document.getElementById('aritmatikaAngka1').value;
    aritmatikaAngka2 = document.getElementById('aritmatikaAngka2').valueAsNumber;
    operatorAritmatika = document.getElementById('operatorAritmatika').value;
    
    //operasi
    hasilOperasi = eval(aritmatikaAngka1 + operatorAritmatika + aritmatikaAngka2);
    
    //output
    document.getElementById("hasilOperasi").textContent = hasilOperasi;
}