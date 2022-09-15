function CheckSpeed(speedPer_hr) {
   const speed_limit = 70;
   const km_per_point = 5
    if (speedPer_hr < speed_limit + km_per_point) {
      console.log("Ok");
    }
    const points = Math.floor((speedPer_hr - speed_limit) / km_per_point);
    if (points >= 12) {
        console.log("Licence Suspended");
    } else {
        console.log("point => ", points);
    }
    
}

// CheckSpeed(85);

function showNumber(number) {
    for (let i = 0; i <= number; i++) {

        if ((i % 2) === 0 ) {
            console.log(`${i} => Even`)
        } else {
            console.log(`${i} => Odd`)
        }
        
    }
}
// showNumber(5);



function truthyCount(countArr) {
    let count = 0
    for (let i of countArr) {
      if (i) {
        count++;
      }
    }
    console.log(count);
}
// truthyCount([1,3,4]);


function sumLimit(number) {
    let sum = 0
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    } 
  }
  console.log(sum);
}
sumLimit(10);