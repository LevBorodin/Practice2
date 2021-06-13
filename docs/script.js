function calculate(){
  let a=document.forma1.t1.value;
  let b=document.forma1.t2.value;
  let s=a*b;
  let c=Math.sqrt(a*a+b*b);
  document.forma1.res1.value=s;
  document.forma1.res2.value=c;

  let a1=document.forma2.t11.value;
  let b1=document.forma2.t22.value;
  let e1=document.forma2.t33.value;
  let s1=a1*b1*(Math.sin(e1)*-1);
  let c1=s1/a1;
  document.forma2.res11.value=s1;
  document.forma2.res22.value=c1;

  let a2=document.forma3.t111.value;
  let s2=Math.PI*a2*a2;
  let c2=2*Math.PI*a2;
  document.forma3.res111.value=s2;
  document.forma3.res222.value=c2;

  let a3=document.forma4.t1111.value;
  let b3=document.forma4.t2222.value;
  let s3=Math.PI*a3*b3;
  let c3=Math.PI*(a3+b3);
  document.forma4.res1111.value=s3;
  document.forma4.res2222.value=c3;

  let a4=document.forma5.t11111.value;
  let s4=a4*Math.sqrt(2);
  let c4=a4*a4;
  document.forma5.res11111.value=s4;
  document.forma5.res22222.value=c4;

  let a5=document.forma6.t111111.value;
  let b5=document.forma6.t222222.value;
  let s5=Math.sqrt(a5*a5+b5*b5);
  let c5=a5*b5/2;
  document.forma6.res111111.value=s5;
  document.forma6.res222222.value=c5;
}