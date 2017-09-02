// YOUR CODE HERE:
class App {
  constructor() {

  }
  init() {

    $('#send .submit').on('submit', app.handleSubmit);
    $('#send .submit').on('click', app.handleSubmit);
  }
  send(message) {
    $.ajax({type: 'POST', data: message});
  }
  fetch(url) {
    $.ajax({
      type: 'GET',
      url: url ,
      success: function(data) {
        console.log("chatterbox: Message Recived");
        console.log(data);
        //console.log("It's an array? ", Array.isArray(data.results));
        var container = data.results;
        for (var i = 0; i < container.length; i++) {
          var currentMessage = container[i];
          //console.log("Current Message: " + currentMessage);
          app.renderMessage(currentMessage);
        }
      }
      //'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages'
    });
  }
  clearMessages() {
    $('#chats').html('');
  }
  renderMessage(message) {
    // console.log("Chats children was: ", $('#chats').children());
    $('#chats').append(
    // '<div class="message">' +
    '<div class="messages">' +
    '<div class="username" onclick="app.handleUsernameClick()"> UserName:' + message.username + '</div>' +
    '<div class="text"> Message: ' + message.text + '</div>' +
    '<div class="roomname"> Roomname:' + message.roomname + '</div>' +
    
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
    //$('.username').on('click', '',function() { 
      //console.log("handleUsernameClick function called.");
    //});
  }

  handleSubmit() {
    console.log("handleSubmit function invoked.");
  // $('#send .submit').on('submit');
  }


}

var app = new App();
app.fetch('http://parse.sfm6.hackreactor.com/chatterbox/classes/messages')
//app.init();
//$('#send .submit').on('submit', app.handleSubmit);







