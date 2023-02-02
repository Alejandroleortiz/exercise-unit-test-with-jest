// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = function(dollarValue){ //Dollar to Yen//
	return dollarValue * 127.9;
}
module.exports = {fromDollarToYen};

let fromEuroToDollar = function(euroValue){ //Euro to Dollar //
	return euroValue * 1.2;
}
module.exports = {fromEuroToDollar};

let fromYenToPound = function(poundValue){ //Pound to pound //
	return poundValue * 0.8;
}
module.exports = {fromYenToPound};