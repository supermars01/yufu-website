var totalpage,pagesize,cpage,count,curcount,outstr; 
//初始化 
cpage = 1; //当前页（设置为全局变量）
totalpage = $(".newsList li.newsItems").length; //总页数
pagesize = 10;  //每页显示的数据数量
outstr = "";  //显示分页效果

function gotopage(target) 
{   
    cpage = target;        //把页面计数定位到第几页 
    
    //这里写页面跳转时要调用的方法
    // var state = $("#state").find("option:selected").val();
    //getData(cpage ); 
    $(".newsList li.newsItems").eq(target-1).addClass("active").siblings().removeClass("active");
    setpage(); 
    //reloadpage(target); //调用显示页面函数显示第几页,这个功能是用在页面内容用ajax载入的情况
}
 
function setpage() 
{ 
    if(totalpage<=10){        //总页数小于十页 
        for (count=1;count<=totalpage;count++) 
        {    if(count!=cpage) 
            { 
                outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
            }else{ 
                outstr = outstr + "<span class='current' >"+count+"</span>"; 
            } 
        } 
    } 
    if(totalpage>10){        //总页数大于十页 
        if(parseInt((cpage-1)/10) == 0) 
        {             
            for (count=1;count<=10;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'> 下一组 </a>"; 
        } 
        else if(parseInt((cpage-1)/10) == parseInt(totalpage/10)) 
        {     
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+(parseInt((cpage-1)/10)*10)+")'>上一组</a>"; 
            for (count=parseInt(totalpage/10)*10+1;count<=totalpage;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
        } 
        else 
        {     
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+(parseInt((cpage-1)/10)*10)+")'>上一组</a>"; 
            for (count=parseInt((cpage-1)/10)*10+1;count<=parseInt((cpage-1)/10)*10+10;count++) 
            {         
                if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'> 下一组 </a>"; 
        } 
    }     
    document.getElementById("setpage").innerHTML = "<div id='setpage'><span id='info'>共&nbsp;"+totalpage+"&nbsp;条&nbsp;|&nbsp;第&nbsp;"+cpage+"&nbsp;条</span>" + outstr + "</div>"; 
    outstr = ""; 
}