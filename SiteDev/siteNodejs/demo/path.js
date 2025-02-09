const path = require('path');

// Construct an absolute path from parts
const absolutePath = path.join('/home', 'user', 'documents', 'file.txt'); 

// Check if a path is absolute
const isAbsolutePath = path.isAbsolute(absolutePath); // Returns true