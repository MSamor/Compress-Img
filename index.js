const imageConversion = require("image-conversion")
var fs = require("fs")
var path = require("path")
var root = path.join("D:\\外包项目1区\\志愿\\压缩")
var files = []
readDirSync(root)

function readDirSync(path) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            // console.log("dir: "+ele)
            readDirSync(path + "/" + ele);
        } else {
            // console.log(path+'/'+ele)
            files.push(path + '/' + ele)
        }
    })
}


view(files[0])

function view(file) {
    console.log(file)
    fs.readFile(file,(err,data)=>{
        console.log(data)
        imageConversion.compressAccurately(data, "image/jpeg", 55)
        .then(res => {
            console.log(res);
            console.log("111");
        })      
        .catch((error) => {
            console.log("error: " + error.message);
        })
    });
}
