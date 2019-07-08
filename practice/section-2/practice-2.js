'use strict';

function countSameElements(collection) {
  let long=collection.length;
  let result=[];
  result.push({key: collection[0], count: 1});
  let longB=1;
  for (var i=1;i<long;i++){
    longB=result.length;
    let t=(collection[i]).length;
    if(t>1){
      let longA=collection[i][2]-1;
      long=long+longA;
      collection[i]=collection[i][0];
      for(let k=0;k<longA;k++){
        collection.push(collection[i][0]);

      }

    }
    for(let j=0;j<longB;j++){
      if(collection[i]==(result[j]).key){
        (result[j]).count++;
        break;
      }
      if((j==longB-1&&collection[i].length==1)){
        result.push({key:collection[i],count:1});

      }


    }

  }


  return result;
}
