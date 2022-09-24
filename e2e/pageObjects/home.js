class Home {
  get today() {
    return element(by.label('Today is'));
  }
}

module.exports = new Home();
