const student_name = "Mahvash Maghrabi";

//PROBLEM 1
function findBiggestNumber(array) {
  let nestedArr = array[0][0];
  for (
    let arrayLoopIndex = 0;
    arrayLoopIndex < array.length;
    arrayLoopIndex++
  ) {
    let deepArray = array[arrayLoopIndex];
    for (
      let deepArrayIndex = 0;
      deepArrayIndex < deepArray.length;
      deepArrayIndex++
    ) {
      const elementDeepArray = deepArray[deepArrayIndex];
      if (elementDeepArray > nestedArr) {
        nestedArr = elementDeepArray;
      }
    }
  }
  return nestedArr;
}

//PROBLEM 2
function balancedString(string) {
  const obj = {};
  let keys;
  for (let i = 0; i < string.length; i++) {
    const curr = string[i];
    keys = Object.keys(obj);
    if (keys.includes(curr)) {
      obj[curr] += 1;
    } else {
      obj[curr] = 1;
    }
  }
  for (let i = 0; i < keys.length - 1; i++) {
    if (obj[keys[i]] != obj[keys[i + 1]]) {
      return false;
    }
  }
  return true;
}

//PROBLEM 3
function additivePersistence(num) {
  var total,
    loop = 0;
  var value = num
    .toString(10)
    .split("")
    .map(function (x) {
      return parseInt(x);
    });

  while (value.length > 1) {
    total = 0;
    value.forEach(function (digit) {
      total = total + digit;
    });

    value = total
      .toString(10)
      .split("")
      .map(function (x) {
        return parseInt(x);
      });
    loop++;
  }

  return loop;
}

// TEST1 - findBiggestNumber
const grid1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
];

const grid2 = [
  [1, 1, 4, 1],
  [1, 6],
  [1, 2, 1, -3],
];

const grid3 = [
  [1, null, 1, null],
  [1, 0],
  [1, 2, 1, undefined],
];

const grid4 = [[], [], []];

console.log("Starting tests for " + student_name);

console.assert(findBiggestNumber(grid1) === 12, "biggest number should be 12");
console.assert(findBiggestNumber(grid2) === 6, "biggest number should be 6");
console.assert(findBiggestNumber(grid3) === 2, "biggest number should be 2");
console.assert(
  findBiggestNumber(grid4) === undefined,
  "biggest number response should be undefined"
);

// TEST 2 - balancedString
console.assert(balancedString("xxxyyyzzz") === true, "'xxxyyyzzz' is balanced");
console.assert(
  balancedString("xxxyyyzzzz") === false,
  '"xxxyyyzzzz" is not balanced'
);
console.assert(
  balancedString("abccbaabccba") === true,
  '"abccbaabccba" is balanced'
);
console.assert(
  balancedString("abcdefghijklmnopqrstuvwxyz") === true,
  '"abcdefghijklmnopqrstuvwxyz" is balanced'
);
console.assert(balancedString("pqq") === false, '"pqq" is not balanced');
console.assert(
  balancedString("fdedfdeffeddefeeeefddf") === false,
  '"fdedfdeffeddefeeeefddf" is not balanced'
);
console.assert(balancedString("www") === true, '"www is balanced');
console.assert(balancedString("x") === true, '"x" is balanced');

// TEST 3 - additivePersistence
console.assert(
  additivePersistence(1234) === 2,
  "the additive 1234 should be 2"
);
console.assert(additivePersistence(13) === 1, "the additive 13 should be 1");
console.assert(
  additivePersistence(9876) === 2,
  "the additive 9876 should be 2"
);
console.assert(additivePersistence(199) === 3, "the additive 199 should be 3");
console.assert(
  additivePersistence(1679583) === 3,
  "the additive 1679583 should be 3"
);

console.log(
  "code execution complete - if no errors are listed above, you are good to go!"
);
