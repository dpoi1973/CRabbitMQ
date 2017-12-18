const request = require('request');
const _ = require('lodash')

function EdibackService(hostname) {
    this.hostname = hostname;
}


EdibackService.prototype.createCustomsC = function (datas) {
    const url = `http://${this.hostname}/api/transcustomresults/createorUpdatebatch`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        timeout: 3000,
        body: datas,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                resolve('ok');
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}

EdibackService.prototype.createFormHeadC = function (datas) {
    const url = `http://${this.hostname}/api/transformheads/createorUpdatebatch`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        timeout: 3000,
        body: datas,
    }
    return new Promise((resolve, reject) => {
        if (datas.owner_code == null || datas.owner_code == "") {
            reject("owner_code 为空!")
        } else if (datas.owner_name == null || datas.owner_name == "") {
            reject("owner_name 为空!")
        } else if (datas.agent_code == null || datas.agent_code == "") {
            reject("agent_code 为空!")
        } else if (datas.agent_name == null || datas.agent_name == "") {
            reject("agent_name 为空!")
        } else if (datas.traf_mode == null || datas.traf_mode == "") {
            reject("traf_mode 为空!")
        } else {
            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    resolve('ok');
                } else if (error) {
                    reject(error);
                } else {
                    reject(body)
                }
            })
        }
    })
}

EdibackService.prototype.createCustomsERRC = function (datas) {
    const url = `http://${this.hostname}/api/transcustomresults/createorUpdatebatch`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        body: datas,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                resolve('ok');
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}

EdibackService.prototype.createFormHeadERRC = function (datas) {
    const url = `http://${this.hostname}/api/transformheads/createorUpdatebatch`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        body: datas,
    }
    return new Promise((resolve, reject) => {
        if (datas.owner_code == null || datas.owner_code == "") {
            reject("owner_code 为空!")
        } else if (datas.owner_name == null || datas.owner_name == "") {
            reject("owner_name 为空!")
        } else if (datas.agent_code == null || datas.agent_code == "") {
            reject("agent_code 为空!")
        } else if (datas.agent_name == null || datas.agent_name == "") {
            reject("agent_name 为空!")
        } else if (datas.traf_mode == null || datas.traf_mode == "") {
            reject("traf_mode 为空!")
        } else {
            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    resolve('ok');
                } else if (error) {
                    reject(error);
                } else {
                    reject(body)
                }
            })
        }
    })
}



EdibackService.prototype.statusCustomsC = function (datas) {
    var arr = [];
    arr.push(datas);
    const url = `http://${this.hostname}/api/formtempmssqls/edicustomsresult`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        body: arr,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}

EdibackService.prototype.statusFormHeadC = function (datas) {
    var arr = [];
    arr.push(datas);
    const url = `http://${this.hostname}/api/formtempmssqls/ediformhead`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        body: arr,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}

EdibackService.prototype.statusFormHeadCErr = function (datas) {
    var arr = [];
    arr.push(datas);
    const url = `http://${this.hostname}/api/formtempmssqls/ediformhead`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        body: arr,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}


EdibackService.prototype.decResultC = function (datas) {
    const url = `http://${this.hostname}/api/decmodheads/upsertdecmodel`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        body: datas,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                reject(body);
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}

EdibackService.prototype.ediTimeC = function (datas) {
    if (!_.isArray(datas)) {
        datas = JSON.parse(datas);
    }
    var arr = [];
    arr.push(datas);
    const url = `http://${this.hostname}/api/formtempmssqls/editimeupdate`;
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        body: arr,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}

EdibackService.prototype.ediUpdateC = function (datas) {
    const url = `http://${this.hostname}/api/update`;
    var data = {
        COPNO: datas
    }
    const options = {
        method: 'POST',
        uri: url,
        json: true, // Automatically parses the JSON string in the response,
        body: data,
        timeout: 20000
    }
    let edino = '';
    let edierr = '';
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                edino = body.EDI_NO;
                console.log(`导入EDI成功，导入的是COP_NO:${datas} EDI_NO:${edino}`)
                const url1 = `http://192.168.0.30:8086/api/FormHead/EDIserverRsp?COP_NO=${datas}&memo=ok&EDI_NO=${edino}`;
                request(url1, (err, res) => {
                    if (err) {
                        reject('string');
                    } else {
                        console.log(datas, body);
                        resolve(body);
                    }
                });
            } else if (error) {
                console.error(`导入EDI失败，错误是:${error}`);
                edierr = '发送超时,重启程序';
                const url1 = `http://192.168.0.30:8086/api/FormHead/EDIserverRsp?COP_NO=${datas}&memo=${edierr}&EDI_NO=${edino}`;
                request(encodeURI(url1), (err, res) => {
                    if (err) {
                        reject('string');
                    } else {
                        console.log(datas, body);
                        reject('string');
                    }
                });
            } else {
                if (body.EDI_NO) {
                    edino = body.EDI_NO;
                }
                if (!_.isArray(body.err)) {
                    console.log(body);
                    edierr = body.err
                } else {
                    edierr = body.err.toString().replace(datas, '').substring(0, 19);
                }
                console.error(`导入EDI失败，导入的是COP_NO:${datas} EDI_NO:${edino} 错误:${edierr}`);
                const url1 = `http://192.168.0.30:8086/api/FormHead/EDIserverRsp?COP_NO=${datas}&memo=${edierr}&EDI_NO=${edino}`;
                request(encodeURI(url1), (err, res) => {
                    if (err) {
                        reject('string');
                    } else {
                        console.log(datas, body);
                        reject('string');
                    }
                });
            }
        })
    })
}
module.exports = exports = EdibackService;

