function DetailView() {
	var self = Ti.UI.createView();
	
	var index = -1;
	self.addEventListener('itemSelected', function(e) {
		index = e.index + 1;
		// row.leftImage = '/images/covers/' + index + '.jpg';
		row.setLeftImage('/images/covers/' + index + '.jpg');
	});
	
	//set the showing data
	var row = Ti.UI.createTableViewRow({
		title: 'this is row',
		// height: Ti.Platform.displayCaps.platformWidth / 3,
		height: Ti.UI.SIZE
	});
	var section = Ti.UI.createTableViewSection({
		// headerTitle: 'header'
	});
	// section.add(row);
	var table = Ti.UI.createTableView({
	});	
		
	section.add(row);
	var data = [];
	data.push(section);
	table.setData(data);
	self.add(table);
	
	return self;
};

module.exports = DetailView;
