UI.registerHelper('formatDateFromNow', function(date) {
	return moment(date).fromNow();
});
UI.registerHelper('formatDate', function(date) {
	return moment(date).format('MM-DD-YYYY');
});