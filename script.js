/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
const bottone = document.getElementById('btn');
const div1 =document.getElementById('num1');
const div2 =document.getElementById('num2');
const div3 =document.getElementById('num3');
const div4 =document.getElementById('num4');
const div5 =document.getElementById('num5');
const numInseriti=document.getElementById('numeriInseriti');

bottone.addEventListener('click', function() {
    numInseriti.innerText='';
    console.clear();
    let arrayNumeri=[];

    for(let i = 0; i <5;i++){
        let numeroCasuale = Math.floor(Math.random()*100)+1;
        arrayNumeri.push(numeroCasuale);
    }
    console.log(arrayNumeri)
    div1.innerText = arrayNumeri[0];
    div2.innerText = arrayNumeri[1];
    div3.innerText = arrayNumeri[2];
    div4.innerText = arrayNumeri[3];
    div5.innerText = arrayNumeri[4];
    setTimeout(arrayVuoti,3000,arrayNumeri);
})

function inserisciNumeri(array){
    let numeriInseriti=[];
    let chiediNumeri=0;
    for(let i = 0; i < 5 ; i++){
        chiediNumeri=parseInt(prompt("inserisci numeri"));
        if(array.includes(chiediNumeri)){
            numeriInseriti.push(chiediNumeri)

        }
    }
    numInseriti.innerText= 'hai indovinato i numeri: ' + numeriInseriti;
}



function arrayVuoti(array){
    div1.innerText = '';
    div2.innerText = '';
    div3.innerText = '';
    div4.innerText = '';
    div5.innerText = '';    
    setTimeout(inserisciNumeri,1000,array);
}
