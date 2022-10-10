var str = "";
var solve = "";
$("button").click(function(){

    //calculator logic
    if($(this).html() == "x"){
        str += $(this).html();
        solve += "*";
    }
    else if($(this).html() == "÷"){
        str += $(this).html();
        solve += "/";
    }
    else if($(this).html() == "C"){
        str = "";
        solve = "";
    }
    else if($(this).html() == "D"){
        str = str.slice(0,str.length - 1);
        solve = str;
    }
    else if($(this).html() == "="){
        try{
            str = eval(solve).toString();
            solve = str;
        }
        catch(x){
            str = "error";
            solve = str;
        }
    }
    else{
        str += $(this).html();
        solve += $(this).html();
    }

    if(str.length > 7){
        $("#input").addClass("small");
    }else{
        $("#input").removeClass("small");
    }
    $("#input").html(str);
})