
(function(Gbl) {
	
	if(!Gbl) return;
	
	Gbl.views.main = function(window) {
		
 
	  
	  
	  var mainView = Ti.UI.createView({
		backgroundColor:'white',
		height:'87%',
		width:'100%',
		top:'6%',
		bottom:'7%',
		borderColor:'black',
		borderWidth:1
	});
	
	    var body = Ti.UI.createView({
		 backgroundColor:'black',
		 height:'88%',
		 width:'100%',
		 
		borderColor:'black',
		borderWidth:1
	});

mainView.add(body);
var people = Titanium.Contacts.getAllPeople();
var totalContacts = people.length;
Ti.UI.setBackgroundColor('#F0FFFF');
var data = [];
   

var view = Ti.UI.createView({
    height : "50dp",
    width : "100%",
    top : '0dp',
    backgroundColor : '#050505',
});

var text = Ti.UI.createLabel({
    text : "Contact Book",
    left : 20,
    color : '#fff'

});

view.add(text);
body.add(view);

var template = {
    childTemplates : [{
       
        
    }, {
        type : 'Ti.UI.Label',
        bindId : 'rowtitle',
        properties : {
        left : '10dp'
        }
    }]
};
if( totalContacts > 0 )
{ 
    for( var index = 0; index < totalContacts; index++ )
    {
         var person = people[index];
        Titanium.API.info(person.fullName);
        //table.add(person.fullName);
        if(person.fullName != null){
            data.push({
                rowtitle : {
                    text :person.fullName
                   
                },

            });
        }
    }
}

var listView = Ti.UI.createListView({
    top : '55dp',
    templates : {
        'plain' : template
    },

    defaultItemTemplate : 'plain',
});

var section = Ti.UI.createListSection({
    items : data
});

listView.sections = [section];

body.add(listView);



	window.add(mainView);
	

	Gbl.renderView();
		};
	
	
	
	
	
})(typeof Gbl !='undefined' ? Gbl : null);



