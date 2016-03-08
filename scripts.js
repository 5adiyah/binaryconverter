var converter = function(number) {
  output = [];
  var convertednum = 0;
  sNumber = number.toString();

  for (var i = 0; i < sNumber.length; i++){
    output.push(+sNumber.charAt(i));
    console.log(output);
  }

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

$(document).ready(function(){
  $("#binaryconverter").submit(function(){
    var number = parseInt($("input#number").val());
    var finalnumber = converter(number);
    $(".sentence").text(finalnumber);
    event.preventDefault();
  });

  $("button#convert").click(function(){
    $("#binaryconverter").hide();
    $("#clear").show();
    $("#result").show();
  });

  $("button#clear").click(function(){
    $("#binaryconverter").show();
    $("#clear").hide();
    $("#result").hide();
  });

});
