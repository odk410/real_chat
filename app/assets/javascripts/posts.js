$(function(){
  console.log("Pusher talk로 옮김");

  // Enable pusher logging - don't include this in production
  Pusher.logToConsole = true;

  var pusher = new Pusher('875ca84a0e960de5f4e4', {
    cluster: 'ap1',
    encrypted: true
  });

  $('#talk_submit').click(function(){
    $.ajax({
      data: {$('#msg').val()},
      url: "/talk",
      success: function(){
        // 1. Pusher 서버에 있는 정보를 바탕으로 채널에 있는 데이터를 출력
        // 2. input창을 비워준다.

        $('#msg').val('');
        $('#msg').focus();
        }
      });
    });
  // 1. /talk : 서버 저장 & 푸셔 서버에 데이터 넣기

  var channel = pusher.subscribe('odk');
  channel.bind('hello', function(data) {
    // alert(data.message);
    var text = data.message;
    $('#talks').prepend("<p>"+ text +"</p>")
  });

})



  // // odk라는 채널을 구독하고 있다가
  // // hllo라는 이벤트가 오면 controller에서 정의한 메시지를 alert로 띄운다.
  // var channel = pusher.subscribe('odk');
  // channel.bind('hello', function(data) {
  //   // alert(data.message);
  //   $('#talks').append("<p>"+ data.message +"</p>")
  // });
  // // Enable pusher logging - don't include this in production
  // Pusher.logToConsole ''= true;
  //
  // var pusher = new Pusher('875ca84a0e960de5f4e4', {
  //   cluster: 'ap1',
  //   encrypted: true
  // });
  //
  // // odk라는 채널을 구독하고 있다가
  // // hllo라는 이벤트가 오면 controller에서 정의한 메시지를 alert로 띄운다.
  // var channel = pusher.subscribe('odk');
  // channel.bind('hello', function(data) {
  //   // alert(data.message);
  //   $(#talks).append("")
  // });
// })
