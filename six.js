let num1=4,num2=2;
let value='+'; let add,sub,mul,div,mod;
if(value=='+'){
 add= num1+num2;
 console.log(add);
}else if(value=='-'){
  sub= num1-num2;
  console.log(sub);
}else if(value=="*"){
    mul=num1*num2;
    console.log(mul);
}else if(value =='/'){
    div=num1/num2;
    console.log(div);
}else if(value=='%'){
    mod=num1%num2;
    console.log(mod)
}else{
    "invalid sign";
}
