'use strict';

module('Intergration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
}

function teardownTest(){
}

asyncTest('Calculate 2 numbers', function(){
  expect(4);

  $("#op1").val("3");
  $("#op2").val("2");
  $("#operator").val("*");
  $("#calculate").trigger("click");

  $("#result").on("DOMChanged",function(){
    deepEqual($("#op1").val(), "", "op1 should be blank");
    deepEqual($("#op2").val(), "", "op2 should be blank");
    deepEqual($("#operator").val(), "", "operator should be blank");
    deepEqual($("#result").text(), "6", "result should be 6")


  });


});
