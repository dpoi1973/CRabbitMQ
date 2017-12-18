const request = require('request');
const _ = require('lodash')

function SjbackService(hostname) {
    this.hostname = hostname;
}


SjbackService.prototype.createSJResultC = function (datas) {
    const url = `http://${this.hostname}/api/shangjianresps/createorUpdatebatch`;
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
                resolve(body);
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}

SjbackService.prototype.createSJHeadC = function (datas) {
    const url = `http://${this.hostname}/api/shangjiandecls/createorUpdatebatch`;
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
                resolve(body);
            } else if (error) {
                reject(error);
            } else {
                reject(body)
            }
        })
    })
}


module.exports = exports = SjbackService;

