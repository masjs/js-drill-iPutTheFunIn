var expect = chai.expect;

let exerciseName = `iPutTheFunIn`
describe(`${exerciseName}()`, function() {
  it('should be a function', function() {
    return expect(exerciseName).to.be.a('function');
  });

  describe('BASIC', function(){
    it('should return a string', function(){
      const output = iPutTheFunIn("xxxxxx")
      return expect(output).to.be.a('string')
    })
    
    it('iPutTheFunIn("blue") should return "bl~!FUN!~ue"', function(){
      const output = iPutTheFunIn("blue")
      return expect(output).to.equal('bl~!FUN!~ue')
    })

    it('iPutTheFunIn("us") should return "u~!FUN!~s"', function(){
      const output = iPutTheFunIn("u~!FUN!~s")
      return expect(output).to.be.a('string')
    })

    it('iPutTheFunIn("me") should return m~!FUN!~e', function(){
      const output = iPutTheFunIn("me")
      return expect(output).to.equal('m~!FUN!~e')
    })

    it('iPutTheFunIn("this is a very serious issue") should return "this is a very~!FUN!~ serious issue"', function(){
      const output = iPutTheFunIn("this is a very~!FUN!~ serious issue")
      return expect(output).to.equal("this is a very~!FUN!~ serious issue")
    })

    it('iPutTheFunIn("wat") should return "sorry thats not very fun"', function(){
      const output = iPutTheFunIn("wat")
      return expect(output).to.equal("sorry thats not very fun")
    })

    it('iPutTheFunIn("dedupes") should return "sorry thats not very fun"', function(){
      const output = iPutTheFunIn("dedupes")
      return expect(output).to.equal("sorry thats not very fun")
    })

    it('iPutTheFunIn("I") should return "sorry thats not very fun"', function(){
      const output = iPutTheFunIn("I")
      return expect(output).to.equal("sorry thats not very fun")
    })
  })
  
  describe('ADVENTURE: checking the input', function(){
    it('if no argument is passed, the function should return "only strings can be fun"', function(){
      const output = iPutTheFunIn()
      return expect(output).to.equal("only strings can be fun")
    })

    it('if a number is passed as an argument, the function should return "only strings can be fun"', function(){
      const output = iPutTheFunIn(3)
      return expect(output).to.equal("only strings can be fun")
    })

    it('if an array is passed as an argument, the function should return "only strings can be fun"', function(){
      const output = iPutTheFunIn([])
      return expect(output).to.equal("only strings can be fun")
    })

    
  })


  
});