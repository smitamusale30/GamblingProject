// Gambling Project Using Js
/*
UC7: If won would like to continue playing next month or stop Gambling
*/
function getRandomResult()
{
    let arrMaxWonDays=new Array();
    let arrMaxLostDays=new Array(); 

    let arrMaxWon=new Array();
    let arrMaxLost=new Array(); 

    let arrDays=new Array();
    let arrAmount=new Array();

    let winDay=0,lostDays=0;
    for(let i=0;i<20;i++)
    {
        console.log("Day: "+i);
        let winAmount=0,lostAmount=0;
         //UC1: As a Gambler, would start with a stake of $100 every day and bet $1 every game.
        let amount=100;
        const BET=1;
        let min=amount/2;
        let totalInteration=0,wonInteration=0,lostInteration=0;

         //UC3: As a Ca lculative Gambler if won or lost 50% of the stake, would resign for the day
        while(winAmount<min && lostAmount<min)
        {
            totalInteration++;
            //UC2: As a Gambler make $1 bet so either win or loose $1
            
            if (Math.random() < 0.5)
            {
                wonInteration++;
                amount=amount+BET;
                winAmount++; 
            } 
            else       
            {    
                lostInteration++;
                amount=amount-BET;;       
                lostAmount++;  
            } 
        }
        //UC5: Each month would like to know the days won and lost and by how much.
        console.log("winamount:  "+winAmount+" lostAmount: "+lostAmount+" Amount: "+amount);
        let lPersent=(wonInteration/totalInteration)*100;
        let unlPersent=(lostInteration/totalInteration)*100;
        if(lPersent>unlPersent)
        {
            arrMaxWonDays.push(lPersent);
        }
        else
        {
            arrMaxLostDays.push(unlPersent);
        }
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
     // UC4: After 20 days of playing every day would like to know the total amount won or lost.
    console.log("Total won days: "+winDay+" and lose Days: "+lostDays +" in one Month");
    
    console.log("Total Amount you Won is: "+tempWonAmount+"  lost Amount:  "+tempLostAmount+"  in One Month");

    
     //UC6: Would also like to know my luckiest day where I won maximum and my unluckiest day where I lost maximum
    let tempDay=0,luckiestDay=0,unluckiestDay=0;
    for(let i=0;i<arrMaxWonDays.length; i++)
    {
        tempDay=arrMaxWonDays[0];
        if(arrMaxWonDays[i]>tempDay)
        {
            tempDay=arrMaxWonDays[i];
            luckiestDay=i;
        }
    }
    console.log("Luckiest Day is:  "+luckiestDay);

    for(let i=0;i<arrMaxLostDays.length; i++)
    {
        tempDay=arrMaxLostDays[0];
        if(arrMaxLostDays[i]>tempDay)
        {
            tempDay=arrMaxLostDays[i];
            unluckiestDay=i;
        }
    }
    console.log("Un-Luckiest Day is:  "+unluckiestDay);

    
        if(luckiestDay>unluckiestDay)
        {
            getRandomResult(); 
        }
        else
        {
            console.log("Thank You!!!! Visit Again");
        }
       
}
getRandomResult(); 