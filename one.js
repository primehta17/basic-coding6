//sum of digit

let num='3214';let sum=0;
while(num!=0){
    let digit = num%10;
   sum=sum+digit;
    num = Math.floor(num/10);
}
console.log(sum);