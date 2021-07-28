function getAllCase(haveTime, allCourses){

  const lastValue = parseInt(Math.pow(2, allCourses.length));
  const totalCheckList = {};

  for(let i = 0 ; i < lastValue; i++){
    let currentValue = i;
    let j = 0;
    let currentHaveTime = haveTime;
    const currentCheckList = [];
    while(currentValue != 0){
      if(currentValue & 1 == 1){
        currentHaveTime -= allCourses[j].requireTime;
        if(currentHaveTime < 0){
          break;
        }
        currentCheckList.push(j);
      }
      currentValue = currentValue >> 1;
      j++;
    }

    if(currentCheckList.length == 0)
      continue;
    totalCheckList[currentCheckList] = true;
  }
  
  return Object.keys(totalCheckList).map((element)=> element.split(",").map((element2)=>parseInt(element2)));
}

function getMaximumSatisFaction(haveTime, allCourses){
  allCourses.sort((elem1, elem2)=> elem1.requireTime > elem2.requireTime ? 1 : -1);

  const allCase = getAllCase(haveTime, allCourses);


  let maxSatisfaction = 0;

  for(const caseValue of allCase){
    let currentSatisfaction = 0;
    while(caseValue.length > 0){
      const currentCourseIdx = caseValue.shift();
      currentSatisfaction += allCourses[currentCourseIdx].satisfaction;
      
    }


    if(maxSatisfaction < currentSatisfaction){
      maxSatisfaction = currentSatisfaction;
    }
  }

  return maxSatisfaction;
}

console.log(getMaximumSatisFaction(5, [{name:"오사카성", requireTime:2, satisfaction:5},
{name:"도톤보리", requireTime:1, satisfaction:10},
{name:"유니버설스튜디오", requireTime:5, satisfaction:20},
{name:"기온", requireTime:3, satisfaction:30}]));
console.log(getMaximumSatisFaction(3, [{name:"오사카성", requireTime:2, satisfaction:5},
{name:"도톤보리", requireTime:1, satisfaction:10},
{name:"유니버설스튜디오", requireTime:5, satisfaction:20},
{name:"기온", requireTime:3, satisfaction:30}]));

console.log(getMaximumSatisFaction(5, [
  {name:"유니버설스튜디오", requireTime:1, satisfaction:14},
  {name:"유니버설스튜디오", requireTime:1, satisfaction:12},
  {name:"도톤보리", requireTime:2, satisfaction:16},
  {name:"도톤보리", requireTime:2, satisfaction:14},
  {name:"오사카성", requireTime:3, satisfaction:18},])
);