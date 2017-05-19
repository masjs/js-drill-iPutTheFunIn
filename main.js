//------------------------------------------------------------------
// TASK :  iPutTheFunIn()
//      Write a function called `iPutTheFunIn()`
//      It should accept a string and return a string with the word 
//      `~!FUN!~` inserted at the midpoint
//      i.e.   iPutTheFunIn('ball') => ba~!FUN!~ll
//             iPutTheFunIn('bistec') => bis~!FUN!~tec
//
//      If the argument is a string with an odd number of characters,
//      make the fun come early and round down for the midpoint

//      i.e.   iPutTheFunIn('I') => 'sorry thats not very fun'
//             iPutTheFunIn('you') => 'sorry thats not very fun'
//
//------------------------------------------------------------------

var iPutTheFunIn = function(){
}

var output1 = iPutTheFunIn("blue")
var output2 = iPutTheFunIn("us")
var output3 = iPutTheFunIn("this is a very serious issue")
var output4 = iPutTheFunIn("wat")
var output5 = iPutTheFunIn("codings")
var output6 = iPutTheFunIn("I")


console.assert(output1 === "bl~!FUN!~ue")
console.assert(output2 === "u~!FUN!~s")
console.assert(output3 === "this is a very~!FUN!~ serious issue")
console.assert(output4 === "sorry thats not very fun") 
console.assert(output5 === "sorry thats not very fun") 
console.assert(output6 === "sorry thats not very fun")
