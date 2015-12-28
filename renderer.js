var fs = require("fs");

function mergeValues(values,content){
	//Cycle over the keys
	for(var key in values){
		//replace all {{key}} with the value from the values object
		content= content.replace("{{"+key+"}}",values[key]);
	}
	//return mergedContent
	return content;
}
 function view(templateName,values,response){
 	//read from the template file
 	var fileContents = fs.readFileSync('./views/'+templateName+'.html',{encoding: "utf8"});
 	//insert value into the content
 	fileContents = mergeValues(values,fileContents);
 	//Write out the content to the response.
 	response.write(fileContents);
 }

 module.exports.view = view;