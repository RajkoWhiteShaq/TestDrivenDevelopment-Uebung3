describe("Gilded Rose", function() {

  it("Quality over 50 is not allowed", function() {
    items = [ new Item("Aged Brie",2,  50) ];    
    update_quality();
    expect(items[0].quality).toBeLessThan(51);
    });

    it("Quality of Sulfuras should stay at 80", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
    });

    it("After sell-by date, the quality should degrade x2", function() {
    items = [ new Item("foo", 0, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(8); 
    });

    it("Quality can't be negative", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].quality >= 0).toBeTruthy();
    });


    it(" Quality of Aged Brie should increase over time", function() {
	    items = [ new Item("Aged Brie", 2, 10) ];
	    update_quality();
	    expect(items[0].quality).toEqual(11); 
      });

      it("If Backstage passes <= 10, increase Quality by 2'", function() {
	    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ];
	    update_quality();
	    expect(items[0].quality).toEqual(12); 
      });

      it("If Backstage passes <= 5, increase Quality by 3'", function() {
	    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ];
	    update_quality();
	    expect(items[0].quality).toEqual(13); 
      });

      it("If Backstage = 0, drop Quality to 0 '", function() {
	    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ];
	    update_quality();
	    expect(items[0].quality).toEqual(0); 
      });

      it("Conjured items quality should fall twice as fast", function() {
	    items = [ new Item("Conjured Mana Cake", 3, 6) ];
	    update_quality();
	    expect(items[0].quality).toEqual(4); });
});