module.exports = function check(str, bracketsConfig) {
  // your solution
    //var arr=['([{}])'];
    //var exampl = [['(', ')'], ['[', ']'], ['{', '}']];
    let arrayString = str.split('');  
    let check;
    for (let i=0; i<bracketsConfig.length; i++) {    
        let countX=0, countY=0;
        for (let x = 0; x <= arrayString.length; x++) {
            if (arrayString[x] == bracketsConfig[i][0]) {
                countX++;
            }
        }
        for (let y = 0; y <= arrayString.length; y++) {
            if (arrayString[y] == bracketsConfig[i][1]) {
                countY++;
            }
        }
        if (countX != countY){
            check=false;
            break;
        } else {
            check=true;
        }
    }
    if (check==true) {
        for (let f=0; f<=bracketsConfig.length+1; f++) {
            for (let a=0; a<=bracketsConfig.length; a++) {
                for (let b = 0; b <= arrayString.length; b++) {
                    for (let j = 0; j <= arrayString.length; j++) {
                        if (arrayString[j] == bracketsConfig[a][0] && arrayString[j+1] == bracketsConfig[a][1]) {
                            delete arrayString[j];   
                            delete arrayString[j+1]; 
                            arrayString = arrayString.filter(element => element !== undefined);
                        }
                    }
                    if (arrayString.length == 0) {
                        return true;
                    }
                }
                if (a==(bracketsConfig.length-1)) {
                    break;
                }
            }
        }
        if (arrayString.length != 0) {
            return false;
        } else if (arrayString.length == 0) {
            return true; 
        }
    } else {
        return false;
    }    
}
