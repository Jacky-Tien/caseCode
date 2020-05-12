// 参数一表示模板的ID，参数二表示模板需要的数据
function myTemplate(id, data) {
  // 获取模板的内容，就是一个字符串，从script标签中读取
  // 下一步需要把模板字符串中的所有的{{}}全部替换为数据
  var str = document.getElementById(id).innerHTML
  // 通过如下的正则表达式去匹配插值符号
  var pattern = /{{\s*([a-zA-Z]+)\s*}}/
  var pattResult = null
  // 循环匹配字符串中所有的插值符号
  while (pattResult = pattern.exec(str)) {
    // 如果匹配到结果，就把对应的数据进行替换，然后进行下一轮替换，直到全部替换完成
    str = str.replace(pattResult[0], data[pattResult[1]])
  }
  return str
}