Mongo.Collection.prototype.extend = function(obj){
  if (!obj){
    throw new Error("you must pass an object as a parameter");
  }

  if (obj && !obj._id){
    throw new Error("passed object must have an _id");
  }

  //console.log(this);
  var foo = this.findOne({});
  //console.log(foo);
  if (obj && _.isString(obj._id)){
    var oldObj = this.findOne({_id:obj._id});
    var query;
    if (oldObj && oldObj._id === obj._id){
      query = jsDiff2Mongo(oldObj, obj);
      this.update.apply(this, query);
    } else {
      throw new Error("no object in mongoDB with this _id")
    }
 }
};
