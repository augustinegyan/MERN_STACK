/*
[Common Uses of the node FileSystem(fs)]
+Read files
+Create files
+Update files
+Delete files
+Rename files
*/


//READ FILE
const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('./htmlFiles/demoFile1.html',(err ,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(2023);
const fs = require('fs');

//READ FILE
fs.readFile('demoHTTP.js','utf-8',(error , data)=>{ //added utf-8 to deciper the buffer read
    console.log(data);
});

//WRITE FILE
fs.writeFile('./filesFolder/newFile.txt', 'File 1 just got created', (err) => {
    console.log("File saved in the Files folder");
});

//APPEND data to a file..(adds to the last part in the file)
fs.appendFile('./filesFolder/newFile.txt','/n i added to the second line',(err)=>{
    console.log("data added to last part ");
});

//DELETE FILE
fs.unlink('newfile.txt' , (err) =>{
    console.log("Deleted ");
})

//RENAME FILE
fs.rename('./filesFolder/newFiles.txt', 'newFile.txt', (err) =>{
    if (err) throw err;
    console.log('Renamed done.')
});