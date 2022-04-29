class Validation{
    constructor() {}
    validateLogin(user) {
        if (!user.phone || !user.password) {
        return false
        }
        return true
    }
}

class ExportValidation {
    constructor() {
      if (!this.instance) {
        this.instance = new Validation();
      }
    }
    getInstance() {
      return this.instance;
    }
}

const exp = new ExportValidation();
module.exports = exp.getInstance();