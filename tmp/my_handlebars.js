data = {
	title: 'My first post'
};

var source = $("body").html();
var template = Handlebars.compile(source);

var context = {title: 'Test test'};
var html = template(context);

$(document).ready(function() {
	$('body').html(html);
});