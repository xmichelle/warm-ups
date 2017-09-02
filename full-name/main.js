class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    if (this.firstName !== '' && this.lastName !== '') {
      return this.firstName + ' ' + this.lastName
    }
    else if (this.firstName === '') {
      return this.lastName
    }
    else if (this.lastName === '') {
      return this.firstName
    }
  }
}

// new Dinglemouse("Clint", "Eastwood").getFullName()

// Another way using the trim method

class Name {
  constructor(firstName, lastName) {
    this.firstName = firstName.concat(' ')
    this.lastName = lastName
  }

  getFullName() {
    return this.firstName.concat(this.lastName).trim()
  }
}

// new Name("Clint", "Eastwood").getFullName()
