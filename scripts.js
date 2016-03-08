var converter = function(number) {
  output = [];
  var convertednum = 0;
  sNumber = number.toString();
  for (var i = 0; i < sNumber.length; i++){
    output.push(+sNumber.charAt(i));
    console.log(output);
  }
  debugger
  for(var j = 0; j < output.length; j++){
    iNumber = parseInt(output[j]);
    if(output[j] === 0){
      convertednum = (convertednum  * 2);
    } else if (output[j]=== 1){
      convertednum = ((convertednum * 2) + 1);
    }
  }
  return convertednum;
};

$(document).ready(function() {
  var number=["1111"];
  converter(number);

});
