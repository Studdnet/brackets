module.exports = function check(str, bracketsConfig) {
    let arrayString = str.split('');  
            for (let i=0; i<=1; i++) {
                for (let j=0; j<bracketsConfig.length; j++) {
                    for (let k = 0; k < arrayString.length; k++) {
                        if (arrayString[k] == bracketsConfig[j][0] && arrayString[k+1] == bracketsConfig[j][1]) {
                            delete arrayString[k];   
                            delete arrayString[k+1]; 
                            arrayString = arrayString.filter(element => element !== undefined);
                            i = 0;
                        }
                    }
                }
            }
        if (arrayString.length != 0) {
            return false;
        } else {
            return true;
        }
} 

