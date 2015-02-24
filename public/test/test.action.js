describe("Generic Attack", function(){

  it("uses the power property", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Action()

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.power = 1
      foo.action(baddie, attack)

      expect(baddie.health).to.equal(24)
    }

    foo.power = 10

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.action(baddie, attack)

      expect(baddie.health).to.be.within(15, 24)
    }

  })

  it("returns the amount of damage done", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Action()

    foo.power = 10

    for (var i = 0; i < 100; i++) {
      baddie.health = 25;

      var dmg = foo.action(baddie, attack)

      expect(dmg).to.be.within(1, 10)
      expect(25 - baddie.health).to.equal(dmg)
    }

  })

})