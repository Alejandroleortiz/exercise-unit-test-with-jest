

let fromDollarToYen = function(dollarValue){ //Dollar to Yen//
	return dollarValue * 127.9;
}

let fromEuroToDollar = function(euroValue){
  return euroValue * 1.2;
}

let fromYenToPound = function(yenValue){
    return yenValue * 0.0063;
  }
module.exports = {fromDollarToYen, fromYenToPound, fromEuroToDollar};

