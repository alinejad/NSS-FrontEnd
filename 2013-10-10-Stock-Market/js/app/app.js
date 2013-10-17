'use strict';

// firebase schema
var Δdb;
var Δbalance;
var Δstock;


// local schema
var db = {};

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://stock-market-fa.firebaseio.com/');
  getstockQuote();
}

function getstockQuote()
{
  var data = {symbol: 'AAPL'};
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, receivedQuote);
}

function receivedQuote(data, textstatus,jqXHR)
{
  console.log('data');
  console.log('textstatus');
  console.log('jqXHR');
}