const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr)===true){
    let count = "",
    newarr=arr.slice();
   Label: for(let i = 0; i<newarr.length; i++){
     if(newarr[i]==Infinity){
       return [];
     }
      if(count=="--discard-next" && (newarr[i]=="--discard-prev" || newarr[i]=="--double-prev" || newarr[i] == "--double-next")){
        newarr.splice((i),1);
      }else if(newarr[i] == "--discard-next"){
        if(i == 0 || i == newarr.length-1){
          newarr.splice(i,1);
        }else{
          count+=newarr[i];
          newarr.splice((i),2);
          i--;
          continue Label;
        }
       }else if(newarr[i] == "--discard-prev"){
         if(i == 0 || i == newarr.length-1){
          newarr.splice(i,1);
         }else{
            count+=newarr[i];
             newarr.splice((i-1),2);
             i--;
         }
       }else if(newarr[i] == "--double-next"){
        if(i == 0 || i == newarr.length-1){
          newarr.splice(i,1);
         }else{
           count+=newarr[i];
           newarr.splice(i,1,(newarr[i+1]));
           i--;
         }
       }else if(newarr[i] == "--double-prev"){
        if(i == 0 || i == newarr.length-1){
          newarr.splice(i,1);
         }else{
          count+=newarr[i];
        newarr.splice(i,1,(newarr[i-1]));
        i--;
       }
  }
}
return newarr;
  }else{
    throw new Error('THROWN');
}
};
