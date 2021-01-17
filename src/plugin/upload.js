var csv = window.require('csv-parser')
var fs = window.require('fs')
var xlsx = window.require('node-xlsx');

//csv 文件
function loadCsv(filePath) {
    let promise = new Promise(function (resolve, reject) {
        var data = [];
        var csvData = fs.createReadStream(filePath);
        csvData.setEncoding('utf-8');
        csvData.pipe(csv());
        csvData.on('data', function (row) {
            data.push(row)
        })
        csvData.on('end', function () {
            console.log('已加载数据')
            console.log(data[0]);
            var string = data[0];
            string = string.trim();
            // console.log(string.split('\n'));
            resolve(string.split('\n'));
        })
        csvData.on("error", function(err) {
            console.log(err.stack);
            reject(err);
        })
    })
    return promise;
}

// excel 文件
function loadExcel(filePath) {
    let promise = new Promise(function(resolve, reject) {
        try {
            var data = xlsx.parse(filePath);
            console.log(data);
            resolve(data[0].data);
        } catch(error) {
            console.error(error);
            reject(error);
        }
    })
    return promise;
}


// json 文件
function loadJson(filepath) {
    let promise = new Promise(function (resolve, reject) {
        var data;
        try {
            var jsondata = fs.readFileSync(filepath, "binary");
            data = JSON.parse(jsondata);
            // console.log(data);
            resolve(data);
        }
        catch (err) {
            console.log(err);
            reject(err)
        }
    })
    return promise;
}

// txt 文件
function loadText(filePath) { // 如果是大问价的话采用流操作去读取
    var data = "";
    var readerStream = fs.createReadStream(filePath);
    readerStream.setEncoding('utf-8');
    var promise = new Promise(function (resolve, reject) {
        readerStream.on('data', function (chunk) {
            data += chunk;
        });
        readerStream.on('end', function () {
            resolve(data);
        });
        readerStream.on('error', function (err) {
            console.log(err.stack);
            reject(err)
        });
        console.log("Program Ended");
    })
    return promise;
}

export { loadCsv, loadText, loadExcel, loadJson};