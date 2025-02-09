var http = require('http');
var formidable = require('formidable');
//const os = require('os');
//const tempDir = os.tmpdir();
var os = require('os');
var fs = require('fs');
//const path = require('path');
//const uniqueDirName = path.join(tempDir, 'temp_site_files');
//fs.mkdirSync(uniqueDirName); 
//creates folder temp_site_files once
//const filePath = path.join(uniqueDirName, '.');
//const data = fs.readdirSync(filePath, 'utf-8');
//fs.writeFileSync(filePath, 'utf-8')

const server = http.createServer(function (req, res) {
//http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    	var util = require('util');
    	var form = new formidable.IncomingForm(); 
    	form.parse(req, function (err, fields, files) { 
    	//console.log(files); 
    		const path = os.tmpdir();
    		//const path = os.tmpdir(); require('path');
    		//const absolutePath = os.tmpdir();
    		//const absolutePath = '/home/user/documents/file.txt';
    		//const parsedPath = parse(path);
    		var oldpath = files.filetoupload[0].filepath;
    		//var oldpath = files.filetoupload.filepath; 
    		var newpath = 'C:/Users/jerem/site/demo/' + files.filetoupload[0].originalFilename;
    		fs.rename(oldpath, newpath, 
		(error) => {
			if (error) {
				console.log(error);
				}
				else {
					console.log(files.filetoupload[0].filepath);
					console.log(files.filetoupload[0].newFilename);
 					console.log(files);
    					//console.log(path);
    					console.log(oldpath);
    					console.log(newpath);
					//console.log("\nNamed!\n");
					//getCurrentFilenames();
   					//res.write('File uploaded, moved, and saved!');
					//function getCurrentFilenames() {
					//console.log("Current filenames:");
    					//fs.readdirSync(path)
        				//.forEach(file => {
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
    //const path = path.join(uniqueDirName, '.');
    //const data = fs.readFileSync(filePath, 'utf-8');
    res.write('<input type="submit" name="fileUploader">');
    //console.log(os.tmpdir());
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
//});

const port = 8080;

//server.listen(port, () => {
  console.log(`Server running on port ${port}`);
//});