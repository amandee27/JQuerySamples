var data = $("div.container div.addItem input");
var addButton = $("div.container div.addItem button");
var completed = $("div.container div.completed div.completed-list");
addButton.click(function () {
  var value = data.val();
  if (value !== "") {
    var editBool = false;
    var item = $("<div/>");
    var row = $("<div/>").attr("class", "row");
    var col = $("<div/>").attr("class", "col");
    var input = $("<input/>")
      .attr("type", "checkbox")
      .attr("id", value)
      .attr("name", value);
    var label = $("<label/>").attr("for", value).text(value);
    var col2 = $("<div/>").attr("class", "col");
    var button1 = $("<button/>").text("Edit");
    var button2 = $("<button/>").text("Delete");
    var hr = $("<hr>").attr("style", "border-top: 0.5px solid #2222");
    var edit = $("<input/>").attr("type", "text").val(value).hide();
    col.append(input, label, edit);
    col2.append(button1, button2);
    row.append(col, col2);
    item.append(row, hr);
    $("div.container div.toDo div.list").prepend(item);
    data.val("");
    button2.click(function () {
      item.remove();
    });
    button1.click(function () {
      if (!editBool) {
        editBool = true;
        label.hide();
        edit.show();
        button1.text("Done");
      } else {
        var newVal = edit.val();
        editBool = false;
        if (newVal !== "") {
          label.text(newVal);
        }
        label.show();
        edit.hide();
        button1.text("Edit");
      }
    });
    input.click(function () {
      if ($(this).prop("checked")) {
        label.attr("style", "text-decoration: line-through;");
        completed.prepend(item);
      } else {
        label.attr("style", "text-decoration: none;");
        $("div.container div.toDo div.list").prepend(item);
      }
    });
  }
});
