$(function() {
  $('form#quiz').submit(function(event) {
    var q1 = $('input[name=question1]:checked', '#quiz').val();
    var q2 = $('input[name=question2]:checked', '#quiz').val();
    var q3 = $('input[name=question3]:checked', '#quiz').val();
    var q4 = $('input[name=question4]:checked', '#quiz').val();
    var q5 = $('input[name=question5]:checked', '#quiz').val();
    var kauaiscore = 0;
    var parisscore = 0;
    var shanghaiscore = 0;
    var aspenscore = 0;

    if (q1 === 'kauai') {
      kauaiscore += 2;
    }else if (q1 === 'paris') {
      parisscore += 2;
    }else if (q1 === 'shanghai') {
      shanghaiscore += 2;
    }else {
      aspenscore += 2;
    }

    if (q2 === 'kauai') {
      kauaiscore += 2;
    }else if (q2 === 'paris') {
      parisscore += 2;
    }else if (q2 === 'shanghai') {
      shanghaiscore += 2;
    }else {
      aspenscore += 2;
    }

    if (q3 === 'kauai') {
      kauaiscore += 2;
    }else if (q3 === 'paris') {
      parisscore += 2;
    }else if (q3 === 'shanghai') {
      shanghaiscore += 2;
    }else {
      aspenscore += 2;
    }

    if (q4 === 'kauai') {
      kauaiscore += 2;
    }else if (q4 === 'paris') {
      parisscore += 2;
    }else if (q4 === 'shanghai') {
      shanghaiscore += 2;
    }else {
      aspenscore += 2;
    }

    if (q5 === 'kauai') {
      kauaiscore += 2;
    }else if (q5 === 'paris') {
      parisscore += 2;
    }else if (q5 === 'shanghai') {
      shanghaiscore += 2;
    }else {
      aspenscore += 2;
    }


    if (aspenscore > parisscore && aspenscore > shanghaiscore && aspenscore > kauaiscore) {
      $('#aspen').show();
    }else if (parisscore > kauaiscore && parisscore > shanghaiscore && parisscore > aspenscore) {
      $('#paris').show();
    }else if (shanghaiscore > kauaiscore && shanghaiscore > parisscore && shanghaiscore > aspenscore) {
      $('#shanghai').show();
    }else {
      $('#kauai').show(); 
    }

    event.preventDefault();
    $('#quiz').hide();
    $('#intro').hide();
    $('#reset').show();

  });

    $('#reset').click(function(event) {
    $('#quiz').show();
    $('#intro').show();
    $('#kauai').hide();
    $('#paris').hide();
    $('#shanghai').hide();
    $('#aspen').hide();
    $('#reset').hide();
  });
});
