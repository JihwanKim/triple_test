// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function sum(paintItemObj){
  let sumResult = 0;
  for (key of Object.keys(paintItemObj)){
      sumResult += paintItemObj[key].currentPaintNum;
      if(sumResult > 1000000000)
          return -1;
  }
  return sumResult;
}

// O(N^2)
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // line:{isContinous:false/true, currentPaintNum:0}
  const results = {};
  let maxValue = 0;
  for(let idx = 0; idx < A.length; idx++){
      for(let currentLine = 0 ; currentLine < A[idx]; currentLine++){
          if(!results[currentLine]){
              results[currentLine] = {lastIdx: -1};
          }

          if(results[currentLine].lastIdx == -1){
            maxValue+= 1;
          }else{
              if(results[currentLine].lastIdx != idx-1){
                  // 끊어짐
                  maxValue += 1;
              }
              // 이어졌을땐 아무것도 안함.
          }
          results[currentLine].lastIdx = idx;
          if(currentLine% 1000000 == 0)
            console.log("currentLine? ",currentLine);
      }
  }
  return maxValue;
}


console.log(solution([1000000000, 1]));
/// 2번째문제 첫번째것만 확인했어도 됐겠다!!