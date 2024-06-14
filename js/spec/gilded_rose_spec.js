describe("Gilded Rose", function() {

  it("should not allow quality to be more than 50", function() {
    items = [ new Item("Aged Brie",2,  50) ];    
    update_quality();
    expect(items[0].quality).toBeLessThan(51);
    });

    it("should maintain quality of Sulfuras at 80", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
    });
}
