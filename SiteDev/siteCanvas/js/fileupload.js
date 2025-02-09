const http = require('http');
const formidable = require('formidable');
const os = require('os');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    	let util = require('util');
    	let form = new formidable.IncomingForm(); 
    	form.parse(req, function (err, fields, files) {  
    		const path = os.tmpdir();
    		let oldpath = files.filetoupload[0].filepath; 
    		let newpath = 'C:/Users/jerem/Visual Studio Code/website/' + files.filetoupload[0].originalFilename;
    		fs.rename(oldpath, newpath, 
		(error) => {
			if (error) {
				console.log(error);
				}
				else {
					console.log(files.filetoupload[0].filepath);
					console.log(files.filetoupload[0].newFilename);
 					console.log(files);
    					console.log(oldpath);
    					console.log(newpath);
            				console.log(files);					
					res.write('File uploaded, renamed, and saved!');
					res.end();
				}
			});
		});		
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit" name="fileUploader">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);