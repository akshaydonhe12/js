let input ;
input ="no";

// if(input === "y" || input === 1 || input === "yes" ){
//     document.write("Continue...")
// }
// else if(input === 0 || input === "n" || input === "no"){
//     document.write("End")
// }
// }else(
//     document.write("Wrong input")
// )



switch(input){
    case 1: //input === 1
        document.write("continue...")
        break;
    case "y": //input === "y"
        document.write("continue...")
        break;

    case "yes": //input === "yes"
        document.write("continue...")
        break;
    case 0: //input === 0
        document.write("End")
        break;
    case "n": //input === "n"
        document.write("End...")
        break;
    case "no": //input === "no"
        document.write("End...")
        break;
    default :
        document.write("wrong input")
}


