 var x,y;
    x=0;y=0;
    var opr="";
    function  num(n)
    {
        if( document.getElementById("res").innerHTML=="0")
           document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=     document.getElementById("res").innerHTML+n;

    }
    function dec(){
       
        if( document.getElementById("res").innerHTML.indexOf('.')<0)
          document.getElementById("res").innerHTML= document.getElementById("res").innerHTML+".";
    }
    function operater(p){
        if( document.getElementById("res").innerHTML=="")
            {
              document.getElementById("eq").innerHTML=document.getElementById("eq").innerHTML.slice(0, document.getElementById("eq").innerHTML.length-1)+p;
              
            }
        else
            {
              document.getElementById("eq").innerHTML=document.getElementById("eq").innerHTML+document.getElementById("res").innerHTML + p ;
              document.getElementById("res").innerHTML="";
            }

    }
    function equal()
    {
      document.getElementById("eq").innerHTML=document.getElementById("eq").innerHTML+document.getElementById("res").innerHTML  ;
       document.getElementById("res").innerHTML=eval(document.getElementById("eq").innerHTML);
       document.getElementById("eq").innerHTML="";
    
    }
    function c()
    {
       document.getElementById("eq").innerHTML="";
       document.getElementById("res").innerHTML="0";
    }
    function backspace(){
      var s=  document.getElementById("res").innerHTML;
      document.getElementById("res").innerHTML=s.slice(0, document.getElementById("res").innerHTML.length-1);
    }