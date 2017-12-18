const DBService = require('../services/EDIDBServices');


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

class FormHeadCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.createFormHeadC(tt);
  }

}

class CustomsCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.createCustomsC(tt);
  }

}

class CUSTOMSCERRJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.createCustomsERRC(tt);
  }

}

class FORMHEADERRJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.createFormHeadERRC(tt);
  }
}

class StatusFormHeadCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.statusFormHeadC(tt);
  }

}

class STATUSFORMHEADCERRJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.statusFormHeadCErr(tt);
  }

}

class StatusCustomsCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.statusCustomsC(tt);
  }

}

class DecResultCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = JSON.parse(msg.content);
    return this.dbservice.decResultC(tt);
  }

}

class EdiUpdateCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = msg.content.toString();
    return this.dbservice.ediUpdateC(tt);
  }

}

class EDITimeCJobProcess extends JobBase {
  constructor(jobconfig) {
    super(jobconfig);
    this.dbservice = new DBService(this.jobconfig.dbstr);
  }
  jobProcess(msg) {
    const tt = msg.content.toString();
    return this.dbservice.ediTimeC(tt);
  }

}



exports.FormHeadCJobProcess = FormHeadCJobProcess;
exports.CustomsCJobProcess = CustomsCJobProcess;  
exports.CUSTOMSCERRJobProcess = CUSTOMSCERRJobProcess;
exports.FORMHEADERRJobProcess = FORMHEADERRJobProcess;
exports.StatusFormHeadCJobProcess = StatusFormHeadCJobProcess;
exports.StatusCustomsCJobProcess = StatusCustomsCJobProcess; 
exports.DecResultCJobProcess = DecResultCJobProcess;
exports.EdiUpdateCJobProcess = EdiUpdateCJobProcess;
exports.STATUSFORMHEADCERRJobProcess = STATUSFORMHEADCERRJobProcess;
exports.EDITimeCJobProcess = EDITimeCJobProcess;
