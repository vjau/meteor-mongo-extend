Tinytest.add('normal function should work', function (test) {
  var coll = new Mongo.Collection("coll");
  var _id = coll.insert({a:1});
  var obj = coll.findOne({_id:_id});
  obj.b = 2;
  coll.extend(obj);
  var obj2 = coll.findOne({_id:_id});
  test.equal(obj, obj2);
});

Tinytest.add('objects with array should work', function(test){
  var coll2 = new Mongo.Collection("coll2");
  var _id = coll2.insert({a:1, b:[1,2,3]});
  var obj = coll2.findOne({_id:_id});
  obj.b.push(4);
  coll2.extend(obj);
  var obj2 = coll2.findOne({_id:_id});
  test.equal(obj, obj2);
});
