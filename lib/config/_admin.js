
AdminConfig = {
	adminEmails: ['qusaitabbal@gmail.com'],
	collections: {
		Questions: {
			icon: 'comment',
			omitFields: ['createdAt'],
			tableColumns: [
			   { label: 'Title', name: 'title' }
			 ],
			showEditColumn: true, // Set to false to hide the edit button. True by default.
			showDelColumn: true, // Set to false to hide the edit button. True by default.
			showWidget: true,
			color: 'blue'
		},
		Answers : {
			omitFields: ['createdAt'],
			tableColumns: [
			   { label: 'Content', name: 'content' }
			 ],
			showEditColumn: true, // Set to false to hide the edit button. True by default.
			showDelColumn: true, // Set to false to hide the edit button. True by default.
			showWidget: true,
			color: 'red'
		}
	}
};