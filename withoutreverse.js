function reverse(s){
   const r=s.split('').reduce((acc,char)=>char+acc);
   console.log(r);
}
reverse("geeks");