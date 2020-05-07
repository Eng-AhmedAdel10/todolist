var input=document.querySelector("input[type='text']");
var btn=document.querySelector("input[type='button']");
var content=document.querySelector(".content");

///////////////////array of object////////////////
var data=[{name:"ahmed",id:1},
          {name:"adel",id:2},
          {name:"hassan",id:3},
          {name:"shaaban",id:4},
         ]
//////////////////

///////////////////insert static data ////////////
function insert_data(item)
{
    content.innerHTML="";
    item.forEach(function(item){
        content.innerHTML+=`<div class='item'>the name is <strong>${item.name}</strong> the id is <strong>${item.id}</strong><span onclick=deleteee(${item.id})>&times</span><div>`;
    })
}
window.onload=function()
{
insert_data(data);
}
//////////////////////

//////////////////////add item//////////////////
btn.addEventListener("click",add);
function add()
{
    if(input.value=="")
        {
            alert("this input is empty")
        }
    else
        {
            if(data.length>0)
                {
                    var lastId=data[data.length-1].id;
                  data.push({name:input.value,id:lastId+1});
                    var lastItem=data[data.length-1];
                    content.innerHTML+=`<div class='item'>the name is <strong>${lastItem.name}</strong> the id is <strong>${lastItem.id}</strong><span onclick=deleteee(${lastItem.id})>&times</span><div>`;
                    input.value="";
                }
            else
                {
                    var lastId=data.id=1;
                    data.push({name:input.value,id:lastId});
                    var lastItem=data[data.length-1];
                    content.innerHTML+=`<div class='item'>the name is <strong>${lastItem.name}</strong> the id is <strong>${lastItem.id}</strong><span onclick=deleteee(${lastItem.id})>&times</span><div>`;
                    input.value="";
                }
        }
    scroll(content);
}
//////////////////////////

//////////////////////////delete data//////////////////
function deleteee(id)
{
    var index=data.map(function(item){
        return item.id;
    }).indexOf(id);
    if(index !==-1)
        {
            data.splice(index,1);
            insert_data(data);
        }
}
////////////////////////////////

/////////////////////////scroll content//////////////
function scroll(content)
{
    if(content.style.height >="400px");
    {  
        content.scrollTop=content.lastElementChild.offsetTop;
    }
}
////////////////////////////////