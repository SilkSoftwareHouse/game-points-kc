export function addItem(item, items, bonusTable) {
  let _item = {};

  if(items.hasOwnProperty(item.name)){
    _item = items[item.name];
    _item.name = item.name;
    _item.qty += 1;
    _item.points = calcItemPoints(_item.qty, bonusTable[item.name]);
    items[item.name] = _item;
  } else {
    _item = {
      name: item.name,
      qty: 1,
      points: calcItemPoints(1, bonusTable[item.name])
    };

    items[item.name] = _item;
  }

  return items;
}

export function sumOverall(items) {
  let _points = {
    bonus: 0,
    overall: 0
  };

 forIn(items, function (item) {
    _points.overall += item.points.overall;
    _points.bonus += item.points.bonus;

    return _points;
  });

 return _points;
}

function calcItemPoints(itemQty, bonusTable){
  if(bonusTable.bonus){
    return calcBonus(itemQty, bonusTable);
  } else{
    return {
      bonus: 0,
      overall: itemQty * bonusTable.unit_points
    }
  }
}

function calcBonus(itemQty, bonusTable, value) {
  let _value = value || {bonus: 0, overall: 0};
  let _itemQty = itemQty;

  if(_itemQty >= bonusTable.bonus.qty){
    _itemQty -= bonusTable.bonus.qty;
    _value.bonus += bonusTable.bonus.bonus;
    _value.overall += bonusTable.bonus.bonus;

    return calcBonus(_itemQty, bonusTable,_value);
  } else {
    _value.overall += _itemQty * bonusTable.unit_points;

    return _value;
  }
}

export function forIn(obj, fn, thisObj){
  for (let key in obj) {
    if (exec(fn, obj, key, thisObj) === false) {
      break;
    }
  }

  function exec(fn, obj, key, thisObj){
    return fn.call(thisObj, obj[key], key, obj);
  }
  return forIn;
}

export function objectMap(obj, fun){
  let _obj = Object.assign({}, obj);

  return Object.keys(_obj).map(function(key, index){
    return fun( _obj[key], index);
  });
}