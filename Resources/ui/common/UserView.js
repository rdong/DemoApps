function UserView() {
	var self = Ti.UI.createView({
		horizontalWrap: false
	});
	var btnText = '';
	self.addEventListener('opened', function(e) {
		btnText = e.method;
		btn.title = btnText;
	});
	
	var nameLabel = Ti.UI.createLabel({
		color: '#000',
		text: 'Username',
		left: '10%',
		top: '10%',
		height: '30',
		width: '80'
	});
	var pwdLabel = Ti.UI.createLabel({
		color: '#000',
		text: 'Password',
		left: '10%',
		top: '20%',
		height: '30',
		width: '80'
	});
	var nameText = Ti.UI.createTextField({
		top: nameLabel.top,
		right: '10%',
		height: nameLabel.height,
		width: Ti.Platform.displayCaps.platformWidth / 3,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  		color: '#336699'
	});
	var pwdText = Ti.UI.createTextField({
		top: pwdLabel.top,
		right: '10%',
		height: pwdLabel.height,
		width: Ti.Platform.displayCaps.platformWidth / 3,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  		color: '#336699'
	});
	var btn = Ti.UI.createButton({
		height: 30,
		width: 80,
		center: '50%',
		backgroundColor:'transparent',
	});
	btn.addEventListener('click', function(e) {
		if (btnText == 'sign in') {
			// try to sign in user
		} else {
			// try to sign up new user
		}
	});
	
	self.add(nameLabel);
	self.add(pwdLabel);
	self.add(nameText);
	self.add(pwdText);
	self.add(btn);
	
	return self;
};

module.exports = UserView;
