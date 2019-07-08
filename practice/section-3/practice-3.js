'use strict';

function createUpdatedCollection(collectionA, collectionB) {
  let long=collectionA.length;
  let result=[];
  result.push({key: collectionA[0], count: 1});
  let longB=1;
  for (let i=1;i<long;i++){
    longB=result.length;
    for(let j=0;j<longB;j++){
      if(collectionA[i]==(result[j]).key){
        (result[j]).count++;
        break;
      }
      if((j==longB-1)){
        result.push({key:collectionA[i],count:1});

      }

    }

  }
  let longA1=result.length;
  let longB1=(collectionB.value).length;
  let result1=[];
  for(let i=0;i<longA1;i++) {
    for (let j = 0; j < longB1; j++) {
      if ((result[i]).key == (collectionB.value)[j]) {
        if ((result[i]).count > 2) {
          result[i].count=result[i].count-parseInt((result[i].count)/3);
        }
      }
    }
    result1.push(result[i]);
  }
  return result1;
}
