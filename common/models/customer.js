'use strict';

module.exports = function(Customer) {
    Customer.remoteMethod(
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

    Customer.getId = function(id, callback){
        new Promise(function(resolve, reject){
            Customer.findById(id, function(err, result){
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
   
    Customer.remoteMethod(
        'getNameAde',
        {
            description: 'get name like -> Ade',
            accepts: [
                { arg: 'firstname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameAde', verb: 'get' }
        }
    );

    Customer.getFirstname = function(firstname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    firstname : {
                        like : firstname
                    }
                }
            }
            Customer.find(filter, function(err, result){
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

    Customer.remoteMethod(
        'getLastName',
        {
            description: 'get last name like -> Mahpudin',
            accepts: [
                { arg: 'lastname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getLastName', verb: 'get' }
        }
    );

    Customer.getLastName = function(lastname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    last_name : {
                        like : lastname
                    }
                }
            }
            Customer.find(filter, function(err, result){
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

    Customer.remoteMethod(
        'getEmail',
        {
            description: 'get email like -> mahpudeen@gmail.com',
            accepts: [
                { arg: 'email', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getEmail', verb: 'get' }
        }
    );

    Customer.getEmail = function(email, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    email_address : {
                        like : email
                    }
                }
            }
            Customer.find(filter, function(err, result){
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
