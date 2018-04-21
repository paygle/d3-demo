// 服务器主机端口配置
let n = require('os').networkInterfaces();
let myIp = function () {
  for(let k in n) {
    let inter = n[k];
    for(let j in inter)
      if(inter[j].family === 'IPv4' && !inter[j].internal)
        return inter[j].address;
  }
};

module.exports = {
  host: 'http://' + myIp(),
  port: 3737
}