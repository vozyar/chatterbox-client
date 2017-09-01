// YOUR CODE HERE:
class App {
  constructor() {
  }
  init() {
  
  }
  send(message) {
    $.ajax({type: 'POST', data: message});
  }
}

var app = new App();