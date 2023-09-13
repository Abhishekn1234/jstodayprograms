function Factorial(fact){
    const x=5;
    if(x<0){
        console.log(`No factorial for negative number`);

    }
    else if(x===0){
        console.log(`factorial of ${x} is 1.`);
    }
    else{
        let fact=1;
        for (i=1;i<=x;i++){
            fact=fact*i;
            console.log(fact);
        }
        
    }
}
return Factorial();