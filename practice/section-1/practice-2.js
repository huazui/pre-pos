'use strict';

function collectSameElements(collectionA, collectionB) {
  let longA=collectionA.length;
  let longB=collectionB[0].length;
  let result=[];
  for(let i=0;i<longA;i++) {
    for (let j = 0; j < longB; j++) {
      if (collectionA[i] == collectionB[0][j]) {
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}
