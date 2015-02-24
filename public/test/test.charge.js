describe("Charged Attack", function(){

  it("uses the power property", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Charge()

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.power = 1
      foo.charged = true
      foo.action(baddie, attack)

      expect(baddie.health).to.be.within(23, 24)
    }


    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.power = 10
      foo.charged = true

      foo.action(baddie, attack)

      expect(baddie.health).to.be.within(5, 24)
    }

  })

  it("returns the amount of damage done", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Charge()

    foo.power = 10

    for (var i = 0; i < 100; i++) {
      baddie.health = 25;

      foo.charged = true

      var dmg = foo.action(baddie, attack)

      expect(dmg).to.be.within(1, 20)
      expect(25 - baddie.health).to.equal(dmg)
    }

  })

  it("relies on the charged property", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Charge()

    foo.charged = false
    var dmg = foo.action(baddie, attack)
    
    expect(dmg).to.equal(0)
    expect(baddie.health).to.equal(25)

  })

})