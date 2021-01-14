const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Would You Like to Continue The Game ? Y/N', ans => {
    if(ans== "Y")
    {
        console.log("OK");
    }
    else
    {
        console.log("Thank you!!");
    }
    readline.close();
  });