
//alert prompt confirm

// let age = prompt("welcome", 20);//20 default value

// if(age != null){
//     document.write(`your age is ${age}`);
// }else{
//     document.write('age filed is blank')
// }

// confirm -->

let response = confirm("are you sure you want to delete");

if(response){
    document.write("deleted");
}else{
    document.write("not deleted");
}