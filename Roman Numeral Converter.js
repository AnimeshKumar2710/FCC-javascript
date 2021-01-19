let numbers = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M', '']];

function convertToRoman(num) {
    let place = -1;
    let roman = '';
    while(num){

        let temp = num % 10;
        place ++;
        num = parseInt(num / 10);
        if (temp < 4){
            for (let i = 0; i < temp; i++){
                roman = numbers[place][0] + roman; 
            }
        }else if(temp == 4){
            roman = numbers[place][0] + numbers[place][1] + roman;
        } else if (temp > 4 && temp < 9){
            for (let i = 0; i < (temp - 5); i++){
                roman = numbers[place][0] + roman; 
            }
            roman = numbers[place][1] + roman;
        }else if (temp == 9){
            roman = numbers[place][0] + numbers[place + 1][0] + roman;
        }
    }
 return roman;
}
