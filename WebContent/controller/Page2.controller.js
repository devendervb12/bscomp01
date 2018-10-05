sap.ui.controller("bs.org.Product.controller.Page2", {
	
	nextPage : function(){
		this.getOwnerComponent().getRouter().navTo("homePage");
	}
})