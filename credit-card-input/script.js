var col = $("div.row div.col input");

col.on("input", function () {
  var next = $(this).parent().next().children();
  if (next !== undefined) {
    var count = $(this).val().length;
    if (count === 4) {
      next.focus();
    }
  }
});

col.on("keydown", function (e) {
  if (e.key === "Backspace") {
    return;
  }
  var count = $(this).val().length;
  if (isNaN(parseInt(e.key)) || count >= 4) {
    e.preventDefault();
  }
});
