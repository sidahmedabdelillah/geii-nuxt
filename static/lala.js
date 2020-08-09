$(document).ready(function() {
  $("#dtBasicExample").DataTable({
    searching: false, // false to disable search (or any other option)
    paging: false
  });
  $(".dataTables_length").addClass("bs-select");
});