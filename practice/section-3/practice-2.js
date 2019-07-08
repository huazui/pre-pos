'use strict';

function createUpdatedCollection(collectionA, collectionB) {
  let longA=collectionA.length;
  let longB=(collectionB.value).length;
  let result=[];
  for(let i=0;i<longA;i++) {
    for (let j = 0; j < longB; j++) {
      if ((collectionA[i]).key == (collectionB.value)[j]) {
        if ((collectionA[i]).count > 2) {
          collectionA[i].count=collectionA[i].count-parseInt((collectionA[i].count)/3);
        }
      }
    }
    result.push(collectionA[i]);
  }

  return result;
}
