/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 5 === 0) return 'Buzz';
  if (num % 3 === 0) return 'Fizz';
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let result = 1;
  for (let i = 1; i < n + 1; i += 1) {
    result *= i;
  }
  return result;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i < n2 + 1; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const sum = a + b + c;
  // eslint-disable-next-line no-restricted-syntax
  for (const side of [a, b, c]) {
    if (sum - side <= side) return false;
  }
  return true;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const isInRectangle = (
    [dotY, dotX],
    [
      lineY1, lineX1, lineY2, lineX2,
    ],
  ) => (dotX >= lineX1 && dotX <= lineX2) && (dotY >= lineY1 && dotY <= lineY2);


  let upper;
  let down;
  if (rect1.top < rect2.top) {
    upper = rect1;
    down = rect2;
  } else {
    upper = rect2;
    down = rect1;
  }
  const { top } = upper;
  const { left } = upper;
  const right = upper.left + upper.width;
  const bottom = upper.top + upper.height;

  return isInRectangle([down.top, down.left], [top, left, bottom, right])
    || isInRectangle([down.top, down.left + down.width], [top, left, bottom, right]);
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const vector = Math.sqrt((point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2);
  if (vector < circle.radius) return true;
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const repeated = [];
  const noRepeated = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const s of str) {
    if (!repeated.includes(s)) {
      const index = noRepeated.indexOf(s);
      if (index === -1) {
        noRepeated.push(s);
      } else {
        noRepeated.splice(index, 1);
        repeated.push(s);
      }
    }
  }
  return noRepeated[0] ? noRepeated[0] : null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  const interval = a > b ? [b, a] : [a, b];

  return startBracket + interval.join(', ') + endBracket;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return `${num}`.split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const getDigit = (num) => {
    if (num * 2 > 9) {
      return num * 2 - 9;
    }
    return num * 2;
  };

  const arr = `${ccn}`.split('').reverse();
  let isChange = false;
  const sum = arr.reduce((prev, value) => {
    let digit = +value;
    if (isChange) digit = getDigit(value);
    isChange = !isChange;
    return prev + digit;
  }, 0);
  return sum % 10 === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let arr = `${num}`.split('');

  while (arr.length > 1) {
    const sum = arr.reduce((prev, current) => prev + +current, 0);
    arr = `${sum}`.split('');
  }
  return arr[0];
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const OPEN_BRACKETS = ['[', '(', '{', '<'];
  const CLOSE_BRACKETS = [']', ')', '}', '>'];
  const rightBrackets = [];

  for (let i = 0; i < str.length; i += 1) {
    const indexForOpen = OPEN_BRACKETS.indexOf(str[i]);
    const indexForClose = CLOSE_BRACKETS.indexOf(str[i]);

    if (indexForOpen !== -1) {
      rightBrackets.push(CLOSE_BRACKETS[indexForOpen]);
    } else
    if (indexForClose !== -1) {
      const neededBracket = rightBrackets.pop();
      if (neededBracket !== str[i]) return false;
    } else {
      throw Error('No valid symbol');
    }
  }
  return !rightBrackets.length;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const isFirstSlash = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][0] !== '/') return false;
    }
    return true;
  };

  const getPath = (str) => {
    const path = str.split('/');
    const lastElement = path.pop();
    if (!lastElement.includes('.')) path.push(lastElement);
    return path;
  };


  const commonPath = getPath(pathes[0]);
  for (let i = 1; i < pathes.length; i += 1) {
    const path = getPath(pathes[i]);
    for (let j = 0; j < commonPath.length; j += 1) {
      const index = path.indexOf(commonPath[j]);
      if (index === -1) commonPath.splice(j -= 1, 1);
    }
  }
  if (commonPath.length) return `${commonPath.join('/')}/`;

  return isFirstSlash(pathes) ? '/' : '';
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const getColumn = (matrix, number) => matrix.map((row) => row[number]);
  const arrayMultiply = (arr1, arr2) => arr1.reduce((sum, num, i) => sum + num * arr2[i], 0);

  return m1.map((row) => {
    const res = [];
    for (let i = 0; i < row.length; i += 1) {
      const column = getColumn(m2, i);
      res.push(arrayMultiply(row, column));
    }
    return res.filter((value) => value === +value);
  });
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const isEqual = (arr) => {
    if (arr.length !== 3) return false;
    if (arr[0] === undefined) return false;
    if (arr[0] === arr[1] && arr[0] === arr[2]) return true;

    return false;
  };
  const checkRows = (matrix) => {
    for (let i = 0; i < matrix.length; i += 1) {
      const row = matrix[i];
      if (isEqual(row)) return row[0];
    }
    return false;
  };

  const getColumn = (matrix, number) => matrix.map((row) => row[number]);

  const checkColumns = (matrix) => {
    for (let i = 0; i < matrix.length; i += 1) {
      const column = getColumn(matrix, i);
      if (isEqual(column)) return column[0];
    }
    return false;
  };

  const checkDiagonals = (matrix) => {
    const diag1 = [];
    const diag2 = [];
    for (let i = 0; i < matrix.length; i += 1) {
      const row = matrix[i];
      diag1.push(row[i]);
      diag2.push(row[row.length - (i + 1)]);
    }
    if (isEqual(diag1)) return diag1[0];
    if (isEqual(diag2)) return diag2[0];
    return false;
  };

  if (checkRows(position)) return checkRows(position);
  if (checkColumns(position)) return checkColumns(position);
  if (checkDiagonals(position)) return checkDiagonals(position);
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
