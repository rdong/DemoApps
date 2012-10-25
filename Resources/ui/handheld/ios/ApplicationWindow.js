function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		UserView = require('ui/common/UserView');
		
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView();
		userView = new UserView();
		
	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title:'MerryMe'
	});
	masterContainerWindow.add(masterView);
	
	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title:'Showing View'
	});
	detailContainerWindow.add(detailView);
	
	// add user view container
	var userContainerWindow = Ti.UI.createWindow({
		title:'User View'
	});
	userContainerWindow.add(userView);
	
	//create iOS specific NavGroup UI
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window:masterContainerWindow
	});
	self.add(navGroup);
	
	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
		navGroup.open(detailContainerWindow);
	});
	
	// add behavior for user view
	masterView.addEventListener('btnClicked', function(e) {
		userView.fireEvent('opened', e);
		navGroup.open(userContainerWindow);
	});
	
	return self;
};

module.exports = ApplicationWindow;
