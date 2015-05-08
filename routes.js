Router.configure({
  layoutTemplate: 'layout'
});

Router.route("/", function () {
  this.render("home");
});

Router.route("/chat", function () {
  this.render("chat");
})