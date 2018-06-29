// Select color input
// Select size input
 
var height, width, size, color;

// When size is submitted by the user, call makeGrid()
  $('#sizePicker').submit(function (event) {
	event.preventDefault(); 
	height = $('#inputHeight').val(); 
	width = $('#inputWeight').val(); 
	makeGrid(height, width); 
	
})
   function makeGrid(x, y) {
  $('tr').remove();
// Your code goes here!
 for(var i = 1;i <= x; i++) { 
 	$('#pixelCanvas').append('<tr id=table' + i + '></tr>'); 
 for(var j = 1; j <= y; j++) {  
 	$('#table' + i).append('<td></td>');


      }
    }
 $('td').click(function colorCell() { 
 	 let color = $('#colorPicker').val(); 
   $(event.target).css('background-color', color);
 })
 } 
