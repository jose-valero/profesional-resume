$(document).on('scroll', function () {
  var skills = {
    ht: 90,
    jq: 50,
    rs: 60,
    wq: 40,
  };

  $.each(skills, function (key, value) {
    var skillbar = $('.' + key);
    skillbar.animate(
      {
        width: value + '%',
      },
      3000,
      function () {
        $('.speech-bubble').fadeIn();
      }
    );
  });
});
