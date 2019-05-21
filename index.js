var process = [];
var setTimeoutGenerator = function (time, type, result) {
    setTimeout(function () {
        console.log('결과다.!!!' + result +':' +time);
        return type(true)
    }, time);
};
var w1 = new Promise(function (resolve, reject) {
  return setTimeoutGenerator(6000, resolve, '결과 값 w1 넌 성공..');
});
process.push(w1);

var w2 = new Promise(function (resolve, reject) {
    // axois.get('localhost').then(function (result) {
    //         if (result) {
    //             resolve(result);
    //         }  else {
    //             reject(result);
    //         }
    // });
    setTimeoutGenerator(5000, resolve, '결과 값 w2 넌 성공..');
});
process.push(w2);

var w3 = new Promise(function (resolve, reject) {
    // axois.get('localhost').then(function (result) {
    //         if (result) {
    //             resolve(result);
    //         }  else {
    //             reject(result);
    //         }
    // });
	return setTimeoutGenerator(10000, reject, '결과 값 w3 너에겐 실패...');
});
process.push(w3);

var w4 = new Promise(function (resolve, reject) {
    // axois.get('localhost').then(function (result) {
    //         if (result) {
    //             resolve(result);
    //         }  else {
    //             reject(result);
    //         }
    // });
    return setTimeoutGenerator(9000, reject, '결과 값 w4 너에겐 실패...');
});
process.push(w4);

var w5 = new Promise(function (resolve, reject) {
    // axois.get('localhost').then(function (result) {
    //         if (result) {
    //             resolve(result);
    //         }  else {
    //             reject(result);
    //         }
    // });
    return setTimeoutGenerator(3000, reject, '결과 값 w5 너에겐 실패...');
});
process.push(w5);

var w6 = new Promise(function (resolve, reject) {
    // axois.get('localhost').then(function (result) {
    //         if (result) {
    //             resolve(result);
    //         }  else {
    //             reject(result);
    //         }
    // });
    setTimeoutGenerator(6000, reject, '결과 값 w6 너에겐 실패...');
});

process.push(w6);

var w7 = new Promise(function (resolve, reject) {
    // axois.get('localhost').then(function (result) {
    //         if (result) {
    //             resolve(result);
    //         }  else {
    //             reject(result);
    //         }
    // });
    return setTimeoutGenerator(7000, reject, '결과 값 w7 너에겐 실패...');
});

process.push(w7);

var allPromiseExecute = function (works) {

    var checkNumber = works.length;
    var resultArray = [];

    var done = function (result) {
        resultArray.push({
            data: result,
            status: true
        });
    };

    var fails = function (result) {
        resultArray.push({
            data: result,
            status: false
        });
    };

    for (var i = 0; i < checkNumber; i++) {
        works[i].then(done).catch(fails);
    }

    return resultArray;
};

var re = allPromiseExecute(process);


var checker = setInterval(function () {
    // console.log(resultArray);
    if (re.length === process.length) {
				console.log('모든 요청 완료', re)
        var success = re.filter(v => v.status).length
        var fails = re.filter(v => !v.status).length
        alert(`성공한 요청 : ${success} 실패한 요청: ${fails}`)
        clearInterval(checker);
    } else {
    	console.log('아직 완료 안됨 기달리는중.')
    }
}, 1000);
