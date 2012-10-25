//Master View Component Constructor
var UserView = require('ui/common/UserView');

function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'transparent',
		backgroundImage: '/images/background.jpg',
		horizontalWrap: false
	});
	
	//some dummy data for our table view
	var tableData = [
		{title:'Apples', price:'1.25', hasChild:true, color: '#000'},
		{title:'Grapes', price:'1.50', hasChild:true, color: '#000'},
		{title:'Oranges', price:'2.50', hasChild:true, color: '#000'},
		{title:'Bananas', price:'1.50', hasChild:true, color: '#000'},
		{title:'Pears', price:'1.40', hasChild:true, color: '#000'},
		{title:'Kiwis', price:'1.00', hasChild:true, color: '#000'}
	];
	
	var table = Ti.UI.createTableView({
		width: '50%',
		height: '60%',
		// right: Ti.Platform.displayCaps.platformWidth,
		right: '0',
		top: '0',
		backgroundColor:'transparent',
		data:tableData
	});
	self.add(table);
	
	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			index: e.index
		});
	});
	
	// create coverflow view
	var imagePath = '/images/covers/'
	// var image1 = new Object({
		// height: Ti.Platform.displayCaps.platformWidth / 3,
		// image: imagePath + '1.jpg',
		// width: Ti.Platform.displayCaps.platformWidth / 3
	// });
	// var image2 = new Object({
		// height: Ti.Platform.displayCaps.platformWidth / 3,
		// image: imagePath + '2.jpg',
		// width: Ti.Platform.displayCaps.platformWidth / 3
	// });
	// var image3 = new Object({
		// height: Ti.Platform.displayCaps.platformWidth / 3,
		// image: imagePath + '3.jpg',
		// width: Ti.Platform.displayCaps.platformWidth / 3
	// });
	var images = [];
	for (var i=1;i<4;i++) {
		var image = new Object({
			height: Ti.Platform.displayCaps.platformWidth / 3,
			image: imagePath + i + '.jpg',
			width: Ti.Platform.displayCaps.platformWidth / 3
		});
		images.push(image);
	}
	var cfv = Ti.UI.iOS.createCoverFlowView({
		backgroundColor: 'transparent',
		height: Ti.Platform.displayCaps.platformWidth / 3,
		width: Ti.Platform.displayCaps.platformWidth,
		top: table.height,
		// bottom: '100%',
		// images: [image1, image2, image3]
		images: images
	});
	
	//add behavior
	cfv.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			index: e.index
		});
	});
	self.add(cfv);
	
	var uv = new UserView();
	
	// create buttons
	var btn1 = Ti.UI.createButton({
		height: 30,
		width: 80,
		bottom: 0,
		left: '20%',
		backgroundColor:'transparent',
		title: 'sign in'
	});

	btn1.addEventListener('click', function(e) {
		self.fireEvent('btnClicked', {
			method: 'sign in'
		});
	});
	var btn2 = Ti.UI.createButton({
		height: 30,
		width: 80,
		bottom: 0,
		right: '20%',
		backgroundColor:'transparent',
		title: 'sign up'
	});
	btn2.addEventListener('click', function(e) {
		self.fireEvent('btnClicked', {
			method: 'sign up'
		});
	});
	self.add(btn1);
	self.add(btn2);
	
	return self;
};

module.exports = MasterView;