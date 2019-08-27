'use strict';

module.exports = function(Transaction) {
    Transaction.remoteMethod(
        'getId',
        {
            description: 'get Id',
            accepts: [
                { arg: 'id', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getId', verb: 'get' }
        }
    );

    Transaction.getId = function(id, callback){
        new Promise(function(resolve, reject){
            Transaction.findById(id, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
    
    Transaction.remoteMethod(
        'getName',
        {
            description: 'get name',
            accepts: [
                { arg: 'name', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getName', verb: 'get' }
        }
    );

    Transaction.getName = function(name, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    name : {
                        like : name
                    }
                }
            }
            Transaction.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Transaction.remoteMethod(
        'getQuantity',
        {
            description: 'get quantity',
            accepts: [
                { arg: 'quantity', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getQuantity', verb: 'get' }
        });

    Transaction.getItem = function(item, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    item: {
                        like : item
                    }
                }
            }
            Transaction.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Email Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });

    Transaction.remoteMethod(
        'category',
        {
            description: 'get category',
            accepts: [
                { arg: 'Category', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getCategory', verb: 'get' }
        });

    Transaction.getCategory = function(category, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    category : {
                        like : category
                    }
                }
            }
            Transaction.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Akhir Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Transaction.remoteMethod(
        'getQuantity',
        {
            description: 'get quantity',
            accepts: [
                { arg: 'quantity', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getQuantity', verb: 'get' }
        });

    Transaction.getQuantity = function(password, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    quantity: {
                        like : quantity
                    }
                }
            }
            Transaction.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Email Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
}

};
