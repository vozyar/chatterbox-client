// YOUR CODE HERE:
class App {
  constructor() {

  }
  init() {

    $('#send .submit').on('submit', app.handleSubmit);
    $('#send .submit').on('click', app.handleSubmit);
    // $('.clearMessages').on('click', app.clearMessages);
  }
  send() {
    $.ajax({
      type: 'POST',
      url:  'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      data: message,
      success: function(message) {
        app.renderMessage(message);
      }

    });
      //app.renderMessage();
  }
  fetch(url) {
    if (url === undefined){
      url = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages';
    }
    $.ajax({
      type: 'GET',
      url: url ,
      success: function(data) {
        console.log("chatterbox: Message Recived");
        console.log(data);
        //console.log("It's an array? ", Array.isArray(data.results));
        var container = data.results;
        for (var i = container.length-1; i >= 0; i--) {
          var currentMessage = container[i];
          //console.log("Current Message: " + currentMessage);
          app.renderMessage(currentMessage);
        }
      }
      //'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages'
    });
  }
  clearMessages() {
    console.log("clearMessages function called.");
    $('#chats').html('');
  }
  renderMessage(message) {
    // console.log("Chats children was: ", $('#chats').children());
    var badUsers = ['anonymous', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjooon', 'anonHackers', 'undefined'];
    if (badUsers.indexOf(message.username) === - 1) {
      $('#chats').append(
      // '<div class="message">' +
      '<div class="messages">' +
        '<div class="username" onclick="app.handleUsernameClick()"> UserName:      ' + message.username + '</div>' +
        '<div class="text"> Message:       ' + message.text + '</div>' +
        '<div class="roomname"> Roomname:      ' + message.roomname + '</div>' +
      
      '</div>'
      );
    }
  }


    // console.log("Chats children is now: ", $('#chats').children());
  
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
app.fetch('http://parse.sfm6.hackreactor.com/chatterbox/classes/messages');
//$('.clearMessages').on('click', app.clearMessages);
//app.init();
//$('#send .submit').on('submit', app.handleSubmit);







