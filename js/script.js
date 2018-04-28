var navItems = document.querySelectorAll("#nav-0, #nav-1, #nav-2, #nav-3, #nav-4, #nav-5, #nav-6, #nav-7, #nav-8, #nav-9, #nav-10, #nav-11, #nav-12, #nav-13, #nav-14");

var filterizd = $('.filtr-container').filterizr({
  layout: 'packed'
});

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", activeNavLink);
}

function activeNavLink() {
  var str1 = "#nav-";
  for (var i = 0; i < navItems.length; i++) {
    var idCheck = str1.concat(i);
    $(idCheck).removeClass("active");
    if ("#" + this.id == idCheck) {
      console.log(this.id);
      $(idCheck).addClass("active");
    }
  }
}
