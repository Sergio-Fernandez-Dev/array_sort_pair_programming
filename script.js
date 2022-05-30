function orderNumbers(numbers) {
    let aux;
    let index = 0;
    let limit = numbers.length -1; // 4
    let changed = false;
    do {
        console.log(numbers);
        changed = false;
        index = 0;
        while (index < limit) { // 0 < 4
            if(numbers[index] > numbers[index + 1]) { // si numbers[0] > number[1]
                aux = numbers[index]; //aux = numbers[0] === 2
                numbers[index] = numbers[index + 1]; // en la posicion numbers[0] coloca el número que está en la posicion numbers[1] == 1
                numbers[index + 1] = aux; //Coloca el número guardado en aux en la posición numbers[1];              
                index++;
                changed = true;
            } else {
                index++;
            }
        }
        console.log(numbers);
        console.log(changed);
    }while(changed == true);
}

orderNumbers([2,1,5,8,7,6,3]);