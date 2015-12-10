$(document).ready(function () {
  $("#github-click").click(function (e) {
    e.preventDefault();

    $.ajax({
    type: "GET",
    url: "https://api.github.com/users/serviox19/repos",
    success: function(repos){
      for (var i = 0; i < repos.length; i++) {

      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("Something went Wrong!")
    }
    });

  });
});