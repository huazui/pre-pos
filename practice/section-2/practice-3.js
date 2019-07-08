'use strict';

function countSameElements(collection) {
  let long=collection.length;
  let result=[];
  result.push({name: collection[0], summary: 1});
  let longB=1;
  for (var i=1;i<long;i++){
    longB=result.length;
    let t=(collection[i]).length;
    if(t==3){
      let longA=collection[i][2]-1;
      long=long+longA;
      collection[i]=collection[i][0];
      for(let k=0;k<longA;k++){
        collection.push(collection[i][0]);

      }

    }
    if(t==4){
      let longA=collection[i][2]-1;
      long=long+longA;
      collection[i]=collection[i][0];
      for(let k=0;k<longA;k++){
        collection.push(collection[i][0]);
      }
    }
    if(t==5){
      let longA=collection[i][2]+collection[i][3]-1;
      long=long+longA;
      collection[i]=collection[i][0];
      for(let k=0;k<longA;k++){
        collection.push(collection[i][0]);
      }
    }
    for(let j=0;j<longB;j++){
      if(collection[i]==(result[j]).name){
        (result[j]).summary++;
        break;
      }
      if((j==longB-1&&collection[i].length==1)){
        result.push({name:collection[i],summary:1});

      }


    }

  }
  return result;
}
