'use strict';

function createUpdatedCollection(collection, collectionB) {
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
