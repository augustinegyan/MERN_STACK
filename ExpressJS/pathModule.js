const path = require ('path')




console.log(__dirname)
console.log(__filename)

console.log(path.parse(__filename))

// 2 forward slash (/) makes it the root 
console.log(path.join("folder1","folder2","folder3"))
console.log(path.join("/folder1","//folder2","folder3"))

/*console.log(path.basename("C:/Users/20fingers/Desktop/MERN_STACK/ExpressJS/pathModule.js"))

console.log(path.dirname("C:/Users/20fingers/Desktop/MERN_STACK/ExpressJS/pathModule.js"))

console.log(path.extname("C:/Users/20fingers/Desktop/MERN_STACK/ExpressJS/pathModule.js"))

console.log(path.parse("C:/Users/20fingers/Desktop/MERN_STACK/ExpressJS/pathModule.js"))
*/
