// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
function showDecoration(str)
{
data = "year=" + str;

  $.ajax({
        url: 'decorations/fetch_data',
        type: 'get',
        data: { year: str},
        contentType: 'application/json; charset=UTF-8',       
        success: function(data){
    	  $('#year_list').html(data);
        },

     });
}


 $(document).ready(function()
    {
     
        $("#myTable").tablesorter();
    }
);