let numvalue=0;

function clicked(elem){
    elem.style.backgroundColor = "hsl(172, 67%, 45%)";
    elem.style.color = "hsl(183, 100%, 15%)";
    document.getElementById('customvalue').value='';
    let value = elem.innerText;
    numvalue = parseFloat(value)/100;
}


var buttons = document.querySelectorAll('#b');

for (var i = 0; i < buttons.length; i++) {
    var self = buttons[i];

    self.addEventListener('click', function (event) {  
        event.preventDefault();
        for (var j = 0; j < buttons.length; j++){
            var lol = buttons[j];
            lol.style.backgroundColor = "hsl(183, 100%, 15%)";
            lol.style.color = "white";
        }
        clicked(this);
        
    }, false);
}

function dodaj(elem){
    elem.classList.add("wrong");
}
function usun(elem){
    elem.classList.remove("wrong");
}


function sprawdz(){
    let bill = document.getElementById('billvalue').value;
    let custom = document.getElementById('customvalue').value;
    let people = document.getElementById('nopvalue').value;
    if (custom != ''){
        for (var i = 0; i < buttons.length; i++){
            var lol = buttons[i];
            lol.style.backgroundColor = "hsl(183, 100%, 15%)";
            lol.style.color = "white";
        }
    }
    
    if (bill != '' & custom != '' & people != ''){
        var p =  /([0-9]*[.])?[0-9]+/;
        if (people.match(p) && bill.match(p) && custom.match(p))
        {
            document.querySelector('.error').classList.add("hidden");
            document.querySelectorAll('.inp').forEach(usun);
            let tip = Number(bill)*(Number(custom)/100)/Number(people);
            let total = Number(bill)*(1 + (Number(custom)/100))/Number(people);
            document.querySelector('.value1').innerHTML= `$${tip.toFixed(2)}`;
            document.querySelector('.value2').innerHTML= `$${total.toFixed(2)}`;
        }
        else
        {
            document.querySelector('.error').classList.remove("hidden");
            document.querySelectorAll('.inp').forEach(dodaj);
            document.querySelector('.value1').innerHTML = '$0.00';
            document.querySelector('.value2').innerHTML = '$0.00';
        }
    }
    if (bill != '' & custom == '' & numvalue!=0 & people != ''){

        var p =  /([0-9]*[.])?[0-9]+/;
        if (people.match(p) && bill.match(p))
        {
            document.querySelector('.error').classList.add("hidden");
            document.querySelectorAll('.inp').forEach(usun);
            let tip = Number(bill)*(Number(numvalue))/Number(people);
            let total = Number(bill)*(1 + (Number(numvalue)))/Number(people);
            document.querySelector('.value1').innerHTML= `$${tip.toFixed(2)}`;
            document.querySelector('.value2').innerHTML= `$${total.toFixed(2)}`;
        }
        else
        {
            document.querySelector('.error').classList.remove("hidden");
            document.querySelectorAll('.inp').forEach(dodaj);
            document.querySelector('.value1').innerHTML = '$0.00';
            document.querySelector('.value2').innerHTML = '$0.00';
        }
    }
}

setInterval(sprawdz, 500);

function reset(){
    document.getElementById('billvalue').value='';
    document.getElementById('customvalue').value='';
    document.getElementById('nopvalue').value='';
    document.querySelector('.value1').innerHTML = '$0.00';
    document.querySelector('.value2').innerHTML = '$0.00';
}
