//alert("helloworld!");

var page = document.querySelector(".contentpage");

var x = 0;

var arr = [];

for(x=0; x<=2; x++)
{
    arr[x] = document.createElement('div');
    arr[x].className = 'content';
    page.appendChild(arr[x]);
}

var 
    con1 = document.createElement('div'),
    pic1 = document.createElement('div'),
    bo1 = document.createElement('div'),
    text1 = document.createElement('div'),
    h11 = document.createElement('h1');

con1.className = 'content';
pic1.className = 'pic';
bo1.className = 'bo';
text1.className = 'text';



page.appendChild(con1);
con1.appendChild(pic1);
con1.appendChild(bo1);
con1.appendChild(h11);
con1.appendChild(text1);
