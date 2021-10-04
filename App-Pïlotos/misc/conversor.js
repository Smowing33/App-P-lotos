function convertir(){
    var text =  " " ;
    var conversor = document.getElementById("txtInfo").value;
   // conversor = prompt("pone una letra").toUpperCase();
    for (let index = 0; index < conversor.length; index++) {
    
    switch (conversor[index].toUpperCase()) {
        case "-":
            text = text+  " -";        
            break;
        case "A":
            text = text+  " Alpha";        
            break;
        case "B":
            text = text+ " Bravo";        
            break;
        case "C":
            text = text+ " Charlie";        
            break;
        case "D":
            text = text+ " Delta";        
            break;
        case "E":
            text = text+ " Echo";        
            break;
        case "F":
            text = text+ " Foxtrot";        
            break;
        case "G":
            text = text+ " Golf";        
            break;
        case "H":
            text = text+ " Hotel";        
            break;
        case "I":
            text = text+ " India";        
            break;
        case "J":
            text = text+ " Juliet";        
            break;
        case "K":
            text = text+ " Kilo";        
            break;
        case "L":
            text = text+ " Lima";        
            break;
        case "M":
            text = text+ " Mike";        
            break;
        case "N":
            text = text+ " November";        
            break;
        case "O":
            text = text+ " Oscar";        
            break;
        case "P":
            text = text+ "Pappa";        
            break;
        case "Q":
            text = text+ " Quebec";        
            break;
        case "R":
            text = text+ " Romeo";        
            break;
        case "S":
            text = text+ " Sierra";        
            break;
        case "T":
            text = text+ " Tango";        
            break;
        case "U":
            text = text+ " Uniform";        
            break;
        case "V":
            text = text+ " Victor";        
            break;
        case "W":
            text = text+ " Wsiky";        
            break;
        case "X":
            text = text+ " X-Ray";        
            break;
        case "Y":
            text = text+ " Yankee";        
            break;
        case "Z":
            text = text+ " Zulu";        
            break;
        case "0":
            text = text+ " 0";        
            break;
        case "1":
            text = text+ " 1";        
            break;
        case "2":
            text = text+ " 2";        
            break;
        case "3":
            text = text+ " 3";        
            break;
        case "4":
            text = text+ " 4";        
            break;
        case "5":
            text = text+ " 5";        
            break;
        case "6":
            text = text+ " 6";        
            break;
        case "7":
            text = text+ " 7";        
            break;
        case "8":
            text = text+ " 8";        
            break;
        case "9":
            text = text+ " 9";        
            break;
    
        default:
            text = text+ "No conozco esa letra ";
            
    }
    }
    document.getElementById("resultado").innerHTML = text;
}

