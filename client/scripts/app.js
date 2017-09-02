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
    $.ajax({
      type: 'GET',
      //url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages'
    });
  }
  clearMessages() {
    $('#chats').html('');
  }
  renderMessage(message) {
    // console.log("Chats children was: ", $('#chats').children());
    $('#chats').append(
    // '<div class="message">' +
    '<div class="message">' +
    '<div class="username" onclick="app.handleUsernameClick()">' + message.username + '</div>' +
    '<div class="text">' + message.text + '</div>' +
    '<div class="roomname">' + message.roomname + '</div>' +
    
    '</div>'
    );

    // console.log("Chats children is now: ", $('#chats').children());
  }
  renderRoom(room) {
    //console.log("RoomSelect children was: ", $('#roomSelect').children());
    $('#roomSelect').append('<div>' + room + '<div>');
    //console.log("RoomSelect children now is: ", $('#roomSelect').children());
  }

  handleUsernameClick() { 
    $('.username').on('click', function() { 
      console.log("handleUsernameClick function called.");
    });
  }

  handleSubmit() {
    
  
  }
}

var app = new App();