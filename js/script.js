
$('#yes').click(function() {
  
  $('#yes-no').addClass('hidden');
  $('#the-island-wash').addClass('hidden');
  $('#the-island').addClass('shake');
  $('#tickets').addClass('ticket-rise');
  $('#ticket-waves').addClass('anim-ticket-waves');
  
  return false;
  
});

$('#no').click(function() {
  
  $('#yes-no').addClass('hidden');
  $('#the-island-wash').addClass('hidden');
  $('#the-island').addClass('shake-long');
  $('#compass').addClass('anim-fadeout');
  // $('#the-island').addClass('anim-fadeout');
  $('#sky p').addClass('anim-fadeout');
  $('#burst').addClass('anim-fadeout');
  $('#helicopter').addClass('anim-fadeout');
  $('h1').addClass('anim-fadeout');
  $('#ship').addClass('anim-fadeout');
  $('#llama').addClass('anim-fadeout');
  $('#llama-bubbles').addClass('hidden');
  $('#waves').addClass('anim-fadeout');
    
  $('#smoke').addClass('anim-fadeout');
  $('#delorean').addClass('anim-fadeout');
  $('#whiteout').addClass('anim-whiteout');

  return false;

});