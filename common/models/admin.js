'use strict';

module.exports = function(Admin) {
    Admin.remoteMethod(
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

    Admin.getId = function(id, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    id: {
                        like : id
                    }
                }
            }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
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

    Admin.getName = function(name, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    name : {
                        like : name
                    }
                }
            }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
        'Username',
        {
            description: 'get username',
            accepts: [
                { arg: 'Username', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getUsername', verb: 'get' }
        });

    Admin.getUsername = function(username, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    user_name : {
                        like : username
                    }
                }
            }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
        'getPassword',
        {
            description: 'get pasword',
            accepts: [
                { arg: 'password', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getPassword', verb: 'get' }
        });

    Admin.getPassword = function(password, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    password: {
                        like : password
                    }
                }
            }
            Admin.find(filter, function(err, result){
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
        Admin.remoteMethod(
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
        });

    Admin.getEmail = function(email, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    email_address : {
                        like : email
                    }
                }
            }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
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
        });

    Admin.getEmail = function(email, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    email_address : {
                        like : email
                    }
                }
            }
            Admin.find(filter, function(err, result){
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

        Admin.remoteMethod(
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
        });

    Admin.getEmail = function(email, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    email_address : {
                        like : email
                    }
                }
            }
            Admin.find(filter, function(err, result){
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
}
};
