$(document).ready(function () {
  //   $(".add-task").val();
  $(".add-task").keypress(function (e) {
    if (e.keyCode == 13 && $(".add-task").val() != null) {
      var task = $('  <div class="task"></div>').text($(".add-task").val());
      var del = $('  <i class="fa fa-trash text-danger ms-4"></i>').click(
        function () {
          var p = $(this).parent();
          p.fadeOut(function () {
            p.hide();
          });
        }
      );
      var ok = $('  <i class="fa fa-check text-success ms-4"></i>" ').click(
        function () {
          var p = $(this).parent();
          //   p.hide();
          //   p.fadeOut(function () {
          $(".c-task").append(p);
          $(this).hide();
          //   });
          //   p.hide();
        }
      );

      task.append(del, ok);
      $(".ic-task").append(task);
      $(".add-task").val("");
    }
  });
});
