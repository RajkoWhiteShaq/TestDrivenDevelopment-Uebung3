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

