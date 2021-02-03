
// Selectionner des li
const elements = document.getElementsByTagName('li');
console.log(elements);

// C'est une boucle
for (let element of elements){
    element.addEventListener('click', function(){
        if(this.innerText == 'Mot 1'){
            console.log('1');
        }else if(this.innerText == 'Mot 2'){
            console.log('2');
        }else if(this.innerText == 'Mot 3'){
            console.log('3');
        }else{
            console.log('4');
        };
    })
}





