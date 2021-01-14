// Gambling Project Using Js
/*
UC1: As a Gambler, would start with a stake of $100 every day and bet $1 every game.

UC2: As a Gambler make $1 bet so either win or loose $1

UC3: As a Calculative Gambler if won or lost 50% of the stake, would resign for the day

UC4: After 20 days of playing every day would like to know the total amount won or lost.

UC5: Each month would like to know the days won and lost and by how much.

UC6: Would also like to know my luckiest day where I won maximum and my unluckiest day where I lost maximum

UC7: If won would like to continue playing next month or stop Gambling
*/
function getRandomResult()
{
    let arrMaxWonDays=new Array();
    let arrMaxLostDays=new Array(); 

    let arrDays=new Array();
    let arrAmount=new Array();

    let winDay=0,lostDays=0;
    for(let i=0;i<20;i++)
    {
        console.log("Day: "+i);
        let winAmount=0,lostAmount=0;
        let amount=100;
        const bet=1;
        let min=amount/2;
        while(winAmount<min && lostAmount<min)
        {
            if (Math.random() < 0.5)
            {
                amount=amount+bet;
                winAmount++; 
            } 
            else       
            {    
                amount=amount-bet;;       
                lostAmount++;  
            } 
        }
        console.log("winamount:  "+winAmount+" lostAmount: "+lostAmount+" Amount: "+amount);
        if(winAmount>lostAmount)
        {
                arrDays.push("win");
                arrAmount.push(winAmount);
        }
        else
        {
            arrDays.push("lost");
            arrAmount.push(lostAmount);
        }
    }

    for(let i=0;i<arrAmount.length;i++)
    {
        if(arrDays[i]=="win" && arrAmount[i]==50)
        {
            arrMaxWonDays.push(i);
        }
        if(arrDays[i]=="lost" && arrAmount[i]==50)
        {
            arrMaxLostDays.push(i);
        }

    }

    let temp=1;
    let tempWonAmount=0,tempLostAmount=0,maxWon=0,maxLost=0;
    for(let i=0;i<arrDays.length && i<arrAmount.length;i++)
    {
        maxLost=arrAmount[0];
        maxWon=arrAmount[0];
        if(arrDays[i]=="win")
        {
            winDay++;
            //console.log(tempWonAmount+"   "+arrAmount[i]);
            tempWonAmount=tempWonAmount+arrAmount[i];
        }
        else
        {
            lostDays++;
           // console.log(tempLostAmount+"   "+arrAmount[i]);
            tempLostAmount=tempLostAmount+arrAmount[i];
        }
        console.log("Day : "+temp+" you "+arrDays[i]+" the Game!!! "); 
        temp++;
    }
    console.log("Total won days: "+winDay+" and lose Days: "+lostDays +" in one Month");
    
    console.log("Total Amount you Won is: "+tempWonAmount+"  lost Amount:  "+tempLostAmount+"  in One Month");

    console.log("Luckiest Day are ");
    for(let i=0;i<arrMaxWonDays.length; i++)
    {
       console.log(arrMaxWonDays[i]);
    }

    console.log("UN-Luckiest Day are ");
    for(let i=0;i<arrMaxLostDays.length; i++)
    {
       console.log(arrMaxLostDays[i]);
    }

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
       
      readline.question('Would You Like to Continue The Game ? Y/N :  ', ans => {
        if(ans=="Y" || ans=="y")
        {
            getRandomResult(); 
        }
        else
        {
            console.log("Thank You!!!! Visit Again");
        }
        readline.close();
      });
}
getRandomResult(); 