export class UserDAO {
  constructor(userid, name, email, password) {
    this.userid = userid;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get email() {
    return this.email;
  }

  set email(email) {
    this.email = email;
  }

  get password() {
    return this.password;
  }

  set password(password) {
    this.password = password;
  }

  get role() {
    return this.role;
  }

  set role(role) {
    this.role = role;
  }
}
