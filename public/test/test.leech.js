describe("Leech Attack", function(){

  it("always does 1 damage", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Leech()

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.power = 1
      foo.action(baddie, attack)

      expect(baddie.health).to.equal(24)
    }


    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.power = 10
      
      foo.action(baddie, attack)

      expect(baddie.health).to.equal(24)
    }

  })

  it("returns the amount of damage done", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Leech()

    foo.power = 10

    for (var i = 0; i < 100; i++) {
      baddie.health = 25;

      var dmg = foo.action(baddie, attack)

      expect(dmg).to.equal(1)
      expect(25 - baddie.health).to.equal(dmg)
    }

  })

  it("sometimes increases power", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Leech()

    for (var i = 0; i < 100; i++) {
      baddie.health = 25;
      foo.power = 10

      var dmg = foo.action(baddie, attack)

      expect(dmg).to.equal(1)
      expect(25 - baddie.health).to.equal(dmg)
      expect(foo.power).to.be.within(10, 11)
    }

  })

})