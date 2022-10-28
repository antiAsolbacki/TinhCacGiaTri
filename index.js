const numbers = [1, 2, 3, 4, 5];
const target = 4 ;

for (let index = 0; index <= numbers.length; index++) {
    const elenment = numbers[index];
    if (target == elenment) {
        console.log(index);
    }
    else { console.log("NO"); }
}