var module=angular.module("ShoppingService",[]);
module.service("addService",function(){
	var addproducts=[];
	this.addShopping=function(pObj){
		addproducts.push(pObj);
	};
	this.getProducts=function(){
		return addproducts;
	};
	this.deleteProducts=function(pObj){
		//addproducts.remove(pObj);
		console.log("P Obj id:"+pObj.id);
		//addproducts.splice(pObj.id,1);
		addproducts.forEach(function(s,i){
			if(s.id==pObj.id)
				addproducts.splice(i,1);	
		});
		
	};
});