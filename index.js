const data = { a: 1, b: 2, c: 3 };

const removeProp = 'b';

const { [removeProp]: remove, ...rest } = data;

console.log(remove); // 2
console.log(rest); // { a: 1, c: 3 }

document.getElementById("app").innerHTML += '<pre>' +JSON.stringify(rest)+'</pre></br>'//

var rand = (x) => `https://p-o.surge.sh/${(x||"i")}/${String(~~(Math.random() * 809) + 1).padStart(3, '0')}.png`