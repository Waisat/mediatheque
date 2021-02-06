var byCrypt = require('bcryptjs')

class User{
  constructor(username, email, password) {

    this.username= username;
    this.email = email;
    this.password = byCrypt.hashSync(password, 8);

  }


}
module.exports = {User}
