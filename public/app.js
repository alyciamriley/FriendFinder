  $.ajaxSettings.traditional = true;

  $("#submitBtn").on("click", function (event) {
      event.preventDefault();

      // Gather user input
      var userInput = {
          name: $('#nameInput').val(),
          photo: $('#photoInput').val(),
          scores: [
              $('#q1').val(),
              $('#q2').val(),
              $('#q3').val(),
              $('#q4').val(),
              $('#q5').val(),
              $('#q6').val(),
              $('#q7').val(),
              $('#q8').val(),
              $('#q9').val(),
              $('#q10').val()
          ]
      };

      $.post("/api/friends", userInput)
          .done(function (data) {
              $('#userMatch').html(data.matchName);
              $('#userMatchImage').attr("src", data.matchImage);
              $("#results-modal").modal("toggle");
          });

  });