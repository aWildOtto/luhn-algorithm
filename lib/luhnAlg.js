//this function takes in a number with a check digit attatched at the end
module.exports = function (digits){
  if (typeof(digits)!="number") {
    return false;
  }
  var listofDigStr = digits+"".split("");
  var sum = 0;
  console.log(listofDigStr);
  var len = listofDigStr.length;
  var other = false;
  for(var i = len-1; i >= 0; i --){
    if (other) {
      if ((listofDigStr[i]*2+"").length>1) {
        console.log("sum: "+sum + " + current number: "+(Number(listofDigStr[i]*2)-9));
        sum += (Number(listofDigStr[i]*2)-9);
        console.log(" = "+sum);
      }
      else{
        console.log(listofDigStr[i]+" is not over 2 digits");
        sum += Number(listofDigStr[i]*2);
        console.log("sum is now: "+sum);
      }
      other = false;
    }else{
      sum += Number(listofDigStr[i]);
      console.log(listofDigStr[i]+", sum is now: "+sum);
      other = true;
    }
  }

  console.log(sum);
  if (sum%10 === 0) {
    console.log()
    return true;
  }
  return false;
}