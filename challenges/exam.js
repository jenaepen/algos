function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //cache to hold the values
  let count = 0;
  const cache = {};
  for (let i = 0; i < A.length; i += 1) {
    if (cache.hasOwnProperty(A[i])) {
      cache[A[i]].push(i);
    } else {
      cache[A[i]] = [i];
    }
  }
  //console.log("cache",cache)
  for (let key in cache) {
    if (cache[key].length === 2) count += 1;
    else if (cache[key].length > 2) {
      // console.log("array",cache[key])
      for (let i = 0; i < cache[key].length; i += 1) {
        count += cache[key].length - i - 1;
        if (count > 1000000000) {
          return 1000000000;
        }
      }
    }
  }
  // console.log("count",count)
  return count;
}
// let k = []
// for(let i =0; i< 1000000001; i +=1){
//     k.push(1)
// }

//console.log('solution(k):', solution(k))

console.log("2015-07-23 08:03:02".length);

let a =
  "photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00";

function solution2(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  //split the string into individual photos
  const photoList = S.split("\n");

  for (let i = 0; i < photoList.length; i += 1) {
    photoList[i] = i + "!" + photoList[i];
  }

  // get each city in order by date
  photoList.sort((a, b) => {
    if (new Date(b.slice(-19)) < new Date(a.slice(-19))) return 1;
    else if (new Date(b.slice(-19)) > new Date(a.slice(-19))) return -1;
    else return 0;
  });
  const newList = [];
  const cache = {};
  const locationCountToUpdate = {};
  for (let i = 0; i < photoList.length; i += 1) {
    let segmentedList = photoList[i].split(", ");

    let ending;
    let order;
    for (let j = 0; j < segmentedList[0].length; j += 1) {
      if (segmentedList[0][j] === ".") {
        ending = segmentedList[0].slice(j);
        console.log(ending);
      }
      if (segmentedList[0][j] === "!") {
        order = segmentedList[0].slice(0, j);
        console.log("order:", order);
      }
    }

    let location = segmentedList[1];
    if (cache[location]) {
      cache[location] += 1;
      if (cache[location] > 9)
        locationCountToUpdate[location] = cache[location].length;
    } else {
      cache[location] = 1;
    }
    newList[order] = `${location}${cache[location]}${ending}`;
  }

  for (let k = 0; k < newList.length; k += 1) {}

  return newList.join("\n");
}
console.log(solution2(a));
