'use strict';

function countSameElements(collection) {
  let long=collection.length;
  let result=[];
  result.push({key: collection[0], count: 1});
  let longB=1;
  for (let i=1;i<long;i++){
    longB=result.length;
    for(let j=0;j<longB;j++){
      if(collection[i]==(result[j]).key){
        (result[j]).count++;
        break;
      }
      if((j==longB-1)){
        result.push({key:collection[i],count:1});

      }

    }

  }
  return result;
}
