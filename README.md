# Mongo-extend

Meteor package that adds an extend method to minimongo collections allowing to update documents on the client by passing an object instead of fields.

## Why this package ?

Sometimes it's practical to get an object from the database, modify the object and put it back directly in the database. However minimongo doesn't allow to do that since collections on the client could be filtered through publications, hence minimongo update operation only allow fields modifications, not objects replacement.

This package solves this problem by adding an extend method to collections on the client, allowing to pass directly the updated object as a parameter.

Under the hood, it use the brother package vjau:jsdiff2mongo that builds the update query.

## Installation

meteor add vjau:mongo-extend

## Usage
	
```js
var obj = Coll.findOne({});
obj.foo = "bar";
Coll.extend(obj);
//it just works !
```

## Limitations

Methods are ignored (not serializable by Mongo)

Arrays with variations are replaced in place instead of complicated addtoset queries
