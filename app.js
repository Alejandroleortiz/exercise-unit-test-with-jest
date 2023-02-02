// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = function(dollarValue){
	return dollarValue * 127.9;
}

module.exports = {fromDollarToYen};