// Break, Continue, Nested Loop


for(let counter=1; counter <=10; counter ++){

// break & continue mai jaha pe bhi break, continue milega uske aage ka statment excute nahi hoga uss current block mai

    // if(counter ==5){
    //     //break; //break loop
    //     continue; // particuler line ignore
    // }

    document.write(counter);
    document.write('<br>');

// Nested loop : loop ke andhar loop   
    for(let counter2 =1; counter2 <3; counter2 ++){

        if(counter == 5){
            break;
        }

        document.write("hello world");
        document.write("<br>")
    }
}