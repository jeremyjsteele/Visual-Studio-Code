var http = require('http');
var formidable = require('formidable');
const os = require('os');
var fs = require('fs');
const tempDir = os.tmpdir();
const path = require('path');
const uniqueDirName = path.join(tempDir, 'temp_site_files');
//fs.mkdirSync(uniqueDirName);
const filePath = path.join(uniqueDirName, 'upLoadedfile.txt');
//fs.writeFileSync(filePath, 'Hello from temp file!');
var fs = require('fs');
const data = fs.readFileSync(filePath, 'utf-8');
console.log(data);

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      //var submitted_file = fs.createReadStream(newpath);
      var originalFilename = uploadedfile.txt
      var newpath = 'C:/Users/jerem/site/demo' + files.filetoload.originalFilename;
      //fs.rename(oldpath, newpath, function (err) {
        //if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      //});
 //});
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);