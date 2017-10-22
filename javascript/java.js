 var x,y;
    x=0;y=0;
    var opr="";
    function  num(n)
    {
        if( document.getElementById("res").innerHTML=="0")
           document.getElementById("res").innerHTML="";
        if(opr==="")
        {
          document.getElementById("res").innerHTML=     document.getElementById("res").innerHTML+n;
          x=Number(document.getElementById("res").innerHTML);
        }
        else
        {
         
             document.getElementById("res").innerHTML=     document.getElementById("res").innerHTML+n;
             y=Number(document.getElementById("res").innerHTML);

        }
    }
    function dec(){
       
        if( document.getElementById("res").innerHTML.indexOf('.')<0)
          document.getElementById("res").innerHTML= document.getElementById("res").innerHTML+".";
    }
    function operater(p){
        opr=p;
        document.getElementById("res").innerHTML=  "";
    }
    function equal()
    {
       if(opr=="+") 
         x=x+y;
       if(opr=="-") 
         x=x-y;
       if(opr=="*") 
         x=x*y;
       if(opr=="/") 
         x=x/y;
       document.getElementById("res").innerHTML=x;
       opr=0;
       y=0;
    }
    function c()
    {
       x=0;y=0;opr="";
       document.getElementById("res").innerHTML="0";
    }
    function backspace(){
      var s=  document.getElementById("res").innerHTML;
      document.getElementById("res").innerHTML=s.slice(0, document.getElementById("res").innerHTML.length-1);
    }