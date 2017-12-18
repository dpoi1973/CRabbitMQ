const amqp = require('amqplib/callback_api');
const config = require('config');
const mqConnStr = config.get('Common.mqServer');
const jobs = config.get('Common.Jobs');
const MQService = require('./services/MQServices');
const mqService = new MQService(mqConnStr);


amqp.connect(mqConnStr, (err, coon) => {
    jobs.forEach(j => {
        coon.createChannel((er, ch) => {
            ch.assertQueue(j.queueConfig.queueName, { exclusive: j.queueConfig.exclusive }, (jqerr, q) => {
                ch.prefetch(j.queueConfig.queuePrefechNum);
                const joblib = require(j.path);
                const job = new joblib[j.className](j);
                ch.consume(q.queue, (msg) => {
                    job.jobProcess(msg).then(result => {
                        if (result == 'ok') {
                            mqService.sendToQueue(JSON.parse(msg.content), j.BackQueueName)
                                .then((ok) => {
                                    ch.ack(msg);
                                })
                                .catch((se) => {
                                    ch.nack(msg);
                                });
                        } else {
                            ch.ack(msg);
                        }
                    })
                        .catch(perr => {
                            if (perr == 'string') {
                                mqService.sendToQueue(msg.content.toString(), j.ErrorQueueName)
                                    .then((ok) => {
                                        ch.ack(msg);
                                    })
                                    .catch((se) => {
                                        ch.nack(msg);
                                    });
                            } else {
                                mqService.sendToQueue(JSON.parse(msg.content), j.ErrorQueueName)
                                    .then((ok) => {
                                        ch.ack(msg);
                                    })
                                    .catch((se) => {
                                        ch.nack(msg);
                                    });
                            }
                        })
                }, { noAck: false });
            })
        })
    })
})