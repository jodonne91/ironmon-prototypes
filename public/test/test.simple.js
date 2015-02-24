describe("Simple Attack", function(){

  it("always deals 3 damage", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Simple()

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.power = 1
      foo.action(baddie, attack)

      expect(baddie.health).to.equal(22)
    }

    foo.power = 10

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.action(baddie, attack)

      expect(baddie.health).to.equal(22)
    }

  })

  it("returns the amount of damage done", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Simple()

    foo.power = 10

    for (var i = 0; i < 100; i++) {
      baddie.health = 25;

      var dmg = foo.action(baddie, attack)

      expect(dmg).to.equal(3)
      expect(25 - baddie.health).to.equal(dmg)
    }

  })

})