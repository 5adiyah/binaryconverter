var converter = function(number) {
  output = [];
  var convertednum = 0;
  sNumber = number.toString();
  for (var i = 0; i < sNumber.length; i++){
    output.push(+sNumber.charAt(i));
    console.log(output);
  }
  

});
