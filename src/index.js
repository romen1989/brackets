module.exports = function check(str, bracketsConfig) {
  let result = 0;
  for(let i = 0; i < bracketsConfig.length; i++) {
    console.log(bracketsConfig[i][0]);
    console.log(bracketsConfig[i][1]);
    let odd = 0;
    let even = 0;
    for(let j = 0; j < str.length; j++) {
      console.log('j='+ j % 2);
      if (bracketsConfig[i][0] === str[j]) {
        console.log('a[i]='+str[j]);
        result++;
        if (j % 2 === 1) {
          odd++;
        } else even++;
      }
      if (bracketsConfig[i][1] === str[j]) {
        console.log('a[i]='+str[j]);
        result--;
        if (j % 2 === 1) {
          odd++;
        } else even++;
      }
      if (result < 0) {
        console.log('end');
        return false;
      }
    }
    console.log('odd'+odd);
    console.log('even'+even);
    if (odd - even !== 0) {
      return false;
    }
  }
  console.log('result='+result);
  if (result === 0) {
    return true;
  } else return false;
  //console.log(arr);
}
