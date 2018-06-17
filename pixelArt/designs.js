$(function() {
  const color = $('#colorPicker');
  const height = $('#inputHeight');
  const width = $('#inputWeight');
  const canvas = $('#pixelCanvas');
  let held=false;

  $('#sizePicker').submit(function(event) {
    event.preventDefault();
    makeGrid();
  });

  /*
  $('#clear').on('click', function clearGrid(){
    canvas.html('');
  });
  */

  //makes grid
  function makeGrid() {
    canvas.html('');
    for (let i = 1; i <= height.val(); i++) {
      canvas.append('<tr></tr>');
    }
    for (let j = 1; j <= width.val(); j++) {
        $('tr').append('<td class="drag"></td>');
    }
  };

  //erases non white squares on click
  canvas.on('click', 'td', function () {

    if ($(this).css("background-color") != 'rgb(255, 255, 255)'){
          $(this).css('background-color', 'rgb(255, 255, 255)');
        }
       else{
          $(this).css('background-color', color.val());
    }
  });


  //adds drag to color function
  canvas.on("mousedown", function() {
    held = true;
  });
  canvas.on("mouseup", function() {
		held = false;
	});

  canvas.on("mousemove", "td", function(e){
    e.preventDefault();
    if (held){
      $(this).css('background-color', color.val());
    }
  });

  });
