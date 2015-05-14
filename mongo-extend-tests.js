Tinytest.add('normal function should work', function (test) {
  var coll = new Mongo.Collection("coll");
  var _id = coll.insert({a:1});
  var obj = coll.findOne({_id:_id});
  obj.b = 2;
  coll.extend(obj);
  var obj2 = coll.findOne({_id:_id});
  test.equal(obj, obj2);
});
