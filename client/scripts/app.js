// YOUR CODE HERE:
class App {
  constructor() {
  }
  init() {
  
  }
  send(message) {
    $.ajax({type: 'POST', data: message});
  }
  fetch() {
    $.ajax({type: 'GET'});
  }
  clearMessages() {
    $('#chats').html('');
  }
  renderMessage(message) {
    // console.log("Chats children was: ", $('#chats').children());
    $('#chats').append('<div>' + message.text +'</div>');

    // console.log("Chats children is now: ", $('#chats').children());
  }
  renderRoom(room) {
    //console.log("RoomSelect children was: ", $('#roomSelect').children());
    $('#roomSelect').append('<div>' + room + '<div>');
    //console.log("RoomSelect children now is: ", $('#roomSelect').children());
  }

  handleUsernameClick() { 

  }
}

var app = new App();