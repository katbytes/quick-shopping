$(document).ready(function() {

  $("#myForm").submit(function(e) {
    e.preventDefault();
    var value = $("#myInput").val();
    $("#myInput").val('');
    var html = "";
    html += "<li class='item'>";
    html += "<span class='itemText'>" + value + "</span>";
    html += "<button class='remove'>X</button>";
    html += "</li>";
    $("#list").append(html);
  });

  $("#list").on("click", ".remove", function() {
    $(this).parent().remove();
  });

  $("#list").on("click", ".itemText", function() {
    $(this).toggleClass('strike');
  });

})