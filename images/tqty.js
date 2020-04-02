document.writeln("<script src=\"http://www.517sf.com/tc.js\"></script>");
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