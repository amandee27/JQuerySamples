
var password=$("div.row div.col div.password input");
var showPassword=$("div.row div.col div.show-button button");
var features= $("div.row div.column div.notselected");

var rules = [
    function(val) { return val.length >= 8; },
    function(val) { return (/([a-z]+)/g).test(val); },
    function(val) { return (/([A-Z]+)/g).test(val); },
    function(val) { return (/([0-9]+)/g).test(val); },
    function(val) { return (/([!@#$%^&*]+)/g).test(val); }
]


password.on("keyup",function(){
  var inputValue=password.val();
  for(var i = 0; i <= 4; i++){
    if(rules[i](inputValue)){
      features.eq(i).addClass("selected");
    }else{
      features.eq(i).removeClass("selected");
    }
  }
});

showPassword.click(function(e){
  if(password.attr("type")==="password"){
    password.attr("type", "text");
    showPassword.html("Hide Password");
  }else{
    password.attr("type", "password");
    showPassword.html("Show Password");
  }
});