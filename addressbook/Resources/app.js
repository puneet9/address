var Gbl = require('/global');



Gbl.loadWindow = Ti.UI.createWindow({  
	theme:"Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
	navBarHidden: true,	
	fullscreen: true, 
    backgroundColor: 'transparent', 
    height:'100%',
    width:'100%' 
});	


Gbl.loadView = Ti.UI.createView({
   	backgroundColor:'#7D9E67', 
    //backgroundImage:'/acessories/images/background2.png',
  	width:200,
	height:100,
    borderWidth:3,
    //opacity:0.6,
    borderColor:'#E1E1E1',
    borderRadius:10
});

//ACTIVITY INDICATOR
var osname = Ti.Platform.osname;
var isIos = osname === 'iphone' || osname === 'ipad';
var sdkVersion = parseFloat(Ti.version);
var ActivityIndicatorStyle;

if (isIos) 
{
	ActivityIndicatorStyle = Titanium.UI.iPhone.ActivityIndicatorStyle;
} 

else if (sdkVersion >= 3.0)
{
	ActivityIndicatorStyle = Titanium.UI.ActivityIndicatorStyle;
}


Gbl.actInd = Titanium.UI.createActivityIndicator({
	width:'75%',
	height:'80%',
	font:{fontSize:'15%', fontWeight : 'bold'},	
	style:ActivityIndicatorStyle.BIG,
	//message:' ' + 'Loading Images...',
	color:'#FFF'
});

if (ActivityIndicatorStyle) {
	Gbl.actInd.style = ActivityIndicatorStyle.PLAIN;
}

//Intialize Sc
Gbl.init();
Gbl.loadView.add(Gbl.actInd);
Gbl.loadWindow.add(Gbl.loadView);
Gbl.openView('main');

