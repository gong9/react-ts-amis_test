let str = '[微笑]你哈<div>你好</div><div>你好</div><div>你好</div><div>你好</div>'

// 匹配图片（g表示匹配所有结果i表示区分大小写）
let imgReg = /<div>(.+)<\/div>/g
// 匹配src属性

// let arr = str.match(imgReg)
let newStr = str.replace("<div>", "/n")
newstr = newStr.replace("</div>", "")
console.log(newstr);
// console.log('所有已成功匹配图片的数组：' + arr)
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    let names = arr[i].match(nameReg)
    // 获取图片地址
    if (names && names[1]) {
        // console.log('已匹配的图片地址' + (i + 1) + '：' + names[1])
        str = str.replace(arr[i], names[1])
    }
}
console.log(str)

let str = '111112snjnqn'
let str1 = 'sn'
console.log(str.indexOf(11));



var str1 = `111
1111`
var result = str1.indexOf('\n')
console.log(result);