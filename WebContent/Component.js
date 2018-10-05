
sap.ui.core.UIComponent.extend("bs.org.Product.Component", {
	
	metadata : {
		rootView : "bs.org.Product.view.App",
		"routing" : {
			"config" : {
				"routerClass" : "sap.m.routing.Router",
				"viewType" : "XML",
				"controlId" : "idApp",
				"controlAggregation" : "pages"
			},
			"routes" : [
				{
					"pattern" : "",
					"name" : "homePage",
					"viewName" : "bs.org.Product.view.Page1"				
				},{
					
				   "pattern" : "page2",
					"name" : "secondPage",
					"viewName" : "bs.org.Product.view.Page2"
				}
				
			]
		}
	},
	init : function(){
		// assigns component for bs.org.Product
		sap.ui.core.UIComponent.prototype.init.apply(this);	
		var oRouter = this.getRouter();
		oRouter.initialize();
		
	}
	
});

