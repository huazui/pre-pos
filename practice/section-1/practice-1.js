'use strict';

function collectSameElements(collectionA, collectionB) {
  let longA=collectionA.length;
  let longB=collectionB.length;
  let result=[];
  for(let i=0;i<longA;i++) {
    for (let j = 0; j < longB; j++) {
      if (collectionA[i] == collectionB[j]) {
        (collectionA[i]).value=(collectionA[i]).value-1;
        result.push(collectionA[i]);
      }
    }
  }
  return result;

}
