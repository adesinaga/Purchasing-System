'use strict';

module.exports = function(Commodity) {
    Commodity.remoteMethod(
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

    Commodity.getId = function(id, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    id: {
                        like : id
                    }
                }
            }
            Commodity.find(filter, function(err, result){
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

    Commodity.remoteMethod(
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

    Commodity.getName = function(name, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    name : {
                        like : name
                    }
                }
            }
            Commodity.find(filter, function(err, result){
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

    Commodity.remoteMethod(
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

    Commodity.getCategory = function(category, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    category : {
                        like : category
                    }
                }
            }
            Commodity.find(filter, function(err, result){
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

    Commodity.remoteMethod(
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

    Commodity.getQuantity = function(password, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    quantity: {
                        like : quantity
                    }
                }
            }
            Commodity.find(filter, function(err, result){
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
};
