a="10KCoder$";
function count(a){
console.log("input: "+a)
Special_char=0;
numbers=0;
capital_letter=0;
small_letter=0;
for(i=0; i<a.length; i++){
  if(a.charCodeAt(i)>=33 && a.charCodeAt(i)<=47 || a.charCodeAt(i)>=58 && a.charCodeAt(i)<=64 || a.charCodeAt(i)>=91 && a.charCodeAt(i)<=96 || a.charCodeAt(i)>=123 && a.charCodeAt(i)<=126){
    Special_char++;
  }
  else if(a.charCodeAt(i)>=48 && a.charCodeAt(i)<=57){
    numbers++;
  }
  else if(a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90){
    capital_letter++;
  }
  else if(a.charCodeAt(i)>=97 && a.charCodeAt(i)<=122){
    small_letter++;
  }
}
console.log("Numbers: "+numbers);
console.log("capital_letter: "+capital_letter);
console.log("Small_letter: "+small_letter);
console.log("Special Characters: "+Special_char);
}


count("10KCoder$");
count("Wrold@12&3");




// function print(rows a){
// a="10kcoders"
//   c=" ";
//   b="";
//   for(i=0; i<1; i++){
//     for(j=0; j<a.length; j++){
//       if(j%2==0){
//         b=b+a[j]+" "
        
//       }
//       else{
//         c=c+a[j]+" "
//       }
//     }
//   }
// console.log(b);
// console.log(c);
 
// }


// a="10kcoders"
//   c=" ";
//   b="";
//   d="  "
//   for(i=0; i<1; i++){
//     for(j=0; j<a.length; j++){
//       j--;
//       if(j%2==0){
//         b=b+a[j]+" "
        
//       }
//       else{
//         c=c+a[j]+" "
//         j++
//         d=d+a[j]+" "
//       }
//     }
//   }
// console.log(b);
// console.log(c);
// console.log(d)