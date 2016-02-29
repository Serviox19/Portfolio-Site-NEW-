$(document).ready(function () {

// Gets all my repos
  $.ajax({
  type: "GET",
  url: "https://api.github.com/users/serviox19/repos",
  success: function(repos) {
    for (var i = 0; i < repos.length; i++) {
    var newListItem = buildListGroup(repos[i]);
      $(".list-group").append(newListItem);
    }
    },
  error: function(jqXHR, textStatus, errorThrown) {
    alert("Something went Wrong!")
  }
  });

  function buildListGroup(repoData) {
    var apiUrl = "https://api.github.com/repos/";
    apiUrl += repoData.owner.login + "/";
    apiUrl += repoData.name;

    var newLink = $("<a>")
      .attr("href", apiUrl)
      .append(repoData.full_name)
      .addClass("list-group-item")
    return newLink;
  };


// When repo is clicked, all info will appear
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function (repoData) {
        console.log(repoData);
      }
    })
  });
});