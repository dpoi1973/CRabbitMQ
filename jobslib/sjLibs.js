const DBService = require('../services/SJDBServices');


class JobBase {
  constructor(jobconfig) {
    this.jobconfig = jobconfig;
   // this.dbservice = new DBService(jobconfig.dbstr);
  }
  process(msg) {
    console.log(`${this.jobconfig.jobName},${msg}`);
  }
  jobProcess(msg) {
    return new Promise((resolve, reject) => {
        reject('not implement!!');
      });
  }
}

class SJHeadCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.createSJHeadC(tt);
  }

}

class SJResultsCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.createSJResultC(tt);
  }

}



exports.SJHeadCJobProcess = SJHeadCJobProcess;
exports.SJResultsCJobProcess = SJResultsCJobProcess;  
