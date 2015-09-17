if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Крутая запись',
		body: '<strong>Hello, World</strong><p>New post блиблиблабла</p>',
		category: 'Хабарландыру',
		submitted: new Date(),
		updated: new Date(), 
		views: 0,
	});
	Posts.insert({
		title: 'Уахахаха',
		body: '<p>Всем привет!</p><p>Это реально крутая запись!</p>',
		category: 'Хабарландыру',
		submitted: new Date() - 50000,
		updated: new Date() - 5000, 
		views: 0,
	});
}