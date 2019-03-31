//alert("helloworld!");


var num = ["1","2","3","4","5","6","7","8","9","10"];

var page = document.querySelector(".contentpage");

for(var i=0; i<=9; i++)
{
    var newcon = document.createElement('div');
    newcon.className = 'content';
    page.appendChild(newcon);
    var newpic = document.createElement('div');
    newpic.className = 'pic';
    newcon.appendChild(newpic);
    var newbo = document.createElement('div');
    newbo.className = 'bo';
    newbo.innerText = "PLAY";
    newcon.appendChild(newbo);
    var newh1 = document.createElement('h1');
    newh1.className = 'h1 h1' + num[i];
    newcon.appendChild(newh1);
    var newtext = document.createElement('div');
    newtext.className = 'text text' + num[i];
    newcon.appendChild(newtext);
}




// 取得dom元素

var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");

var mask = document.getElementById("mask");

var confirm = document.getElementById("confirm");

var cancel = document.getElementById("cancel");

var modal = document.getElementById("wrapper");

 btn.onclick = function () {
     modal.classList.add("show");
     mask.style.display = "block";

 }
 btn1.onclick = function () {
    modal.classList.add("show");
    mask.style.display = "block";

}

 confirm.onclick = function () {
     modal.classList.remove("show");
     mask.style.display = "none";
 }

cancel.onclick = function () {
    modal.classList.remove("show");
    mask.style.display = "none";
}
/*

var url = "https://rabbitchat.herokuapp.com/play.json";

var request = new XMLHttpRequest();  
request.open('GET',url);  //指定从网络获取资源的方式及地址
request.responseType = 'json';  //指定响应的类型
request.send();
var data = request.response;
console.log(request.response);




function getJSON(url){
    return new Promise( function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('get',url,true);
        xhr.responseType ='json';
        xhr.onload =  function(){
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
};

console.log("ok1");

var info = "123";  

function startHttpQuery(){
    getJSON(url).then( function(data){
        info="";
        for(var i=0; i<data.length; i++){
            info = info + data[i].bankId + "     " + data[i].bankName + "<br>";
            console.log(data[i]);
                }
        document.querySelector(".bo").innerText = info;
    },
    function(status) {
        alert('Something went wrong.');
    });
}

startHttpQuery();

console.log("ok2");

console.log(info);


for(var i=0; i<=9; i++)
{
    var h1 = "h1" + nu[i];
    var text = "text" + nu[i];
    document.querySelector(h1).innerText = data[];
    document.querySelector(text).innerText = data[];
}


*/
/*
//演示
for(var i=0; i<=9; i++)
{
    var h1 = ".h1" + num[i];
    var text = ".text" + num[i];
    document.querySelector(h1).innerText = num[i];
    document.querySelector(text).innerText = "This is the " + num[i] +"th.";
    console.log("666");
}
*/