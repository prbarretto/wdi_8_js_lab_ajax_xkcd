$(document).ready(function(){
  $('.2007').click(function(event){
    comics2007();
  });

  $('.2008').click(function(event){
    comics2008();
  });


  var comics2007 = function(){
    $.ajax({
      url: "http://xkcd-unofficial-api.herokuapp.com/xkcd",
      type: 'GET',
      dataType: 'json',
      data: {year: '2007'},
        })
      .done(function(data) {
      console.log(data);
      var list2007 = $("#2007-list")
        new_item1 = $("<li>")
        new_item2 = $("<li>")
        new_item3 = $("<li>");
        new_item1.text(data[0].title)
        new_item2.text(data[1].title)
        new_item3.text(data[2].title)
        $('#2007-list').append(new_item1, new_item2, new_item3);
      })
      .fail(function() {
        console.log("error");
        })
      .always(function() {
        console.log("complete");
      });
  };

   var comics2008 = function(){
    $.ajax({
      url: "http://xkcd-unofficial-api.herokuapp.com/xkcd",
      type: 'GET',
      dataType: 'json',
      data: {year: '2008'},
        })
      .done(function(data) {
      console.log(data);
      var list2008 = $("#2008-list")
        new_item1 = $("<li>")
        new_item2 = $("<li>")
        new_item3 = $("<li>");
        new_item1.text(data[0].title)
        new_item2.text(data[1].title)
        new_item3.text(data[2].title)
        $('#2008-list').append(new_item1, new_item2, new_item3);
        })
      .fail(function() {
        console.log("error");
        })
      .always(function() {
        console.log("complete");
      });
  };
});
