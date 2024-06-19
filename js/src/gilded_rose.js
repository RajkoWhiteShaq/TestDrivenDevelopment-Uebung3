function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (let i = 0; i < items.length; i++) {
    switch (items[i].name) {
      case 'Aged Brie':
        update_aged_brie(items[i]);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        update_backstage_pass(items[i]);
        break;
      case 'Sulfuras, Hand of Ragnaros':
        update_sulfuras(items[i]);
        break;
      case 'Conjured Mana Cake':
        update_conjured(items[i]);
        break;
      default:
        update_normal_item(items[i]);
    }
  }
}

function update_normal_item(item) {
  if (item.quality > 0) {
    item.quality -= 1;
  }
  item.sell_in -= 1;
  if (item.sell_in < 0 && item.quality > 0) {
    item.quality -= 1;
  }
}

function update_aged_brie(item) {
  if (item.quality < 50) {
    item.quality += 1;
  }
  item.sell_in -= 1;
  if (item.sell_in < 0 && item.quality < 50) {
    item.quality += 1;
  }
}

function update_conjured(item) {
  if (item.quality > 0) {
    item.quality -= 2;
  }
  item.sell_in -= 1;
  if (item.sell_in < 0 && item.quality > 0) {
    item.quality -= 2;
  }
}

function update_sulfuras(item) { 
  }

  
function update_backstage_pass(item) {
  if (item.quality < 50) {
    item.quality += 1;
    if (item.sell_in < 11 && item.quality < 50) {
      item.quality += 1;
    }
    if (item.sell_in < 6 && item.quality < 50) {
      item.quality += 1;
    }
  }
  item.sell_in -= 1;
  if (item.sell_in < 0) {
    item.quality = 0;
  }
}
