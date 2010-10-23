$(document).ready(function() {

  var call;
  var phono = $.phono({

    apiKey: "3cd67bb6199d99464f9f3ff17b91b36f",

    onReady: function() {
      $(".call").attr("disabled", false).val("Call");
    }

  });

  $(".call").click(function() {
    if($(this).val() == "Call"){
      $(".call").val("Calling...");
      call = phono.phone.dial($(".number").text(), {
        onRing: function() {
          $(".status").html("Ringing");
        },
        onAnswer: function() {
          $(".status").html("Answered");
          $(".call").val("Hangup");
        },
        onHangup: function() {
          $(".call").attr("disabled", false).val("Call");
          $(".status").html("Hangup");
        }
      });
    } else {
      call.hangup();
    }
  });
});
