var errorMessage = "";
var fieldMissing = "";

function isEmail(email) 
{  
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function notValid(element, str)
{
    var id = "#" + element;
    
    errorMessage += 
        "<p>\" " + $(id).val() + " \"  is not a " + str + " " +$(id).attr("name")+"</p> ";
}

function isEpty(element)
{
    var id = "#" + element;
    if( $(id).val() == "" )
        {
            fieldMissing += $(id).attr("name") + "<br> ";
            return true;
        }
    
    return false;
        
}

$("#submit").click( function(){
    
    errorMessage = "";
    fieldMissing = "";
    
    
    if(! isEpty("email"))
    if(! isEmail($("#email").val()))
        notValid("email", "valid");
    
    if(! isEpty("telephone"))
    if(! $.isNumeric( $("#telephone").val() ))
        notValid("telephone", "numeric");
    
    if(!isEpty("password") & !isEpty("passwordC"))
    if($("#password").val() != $("#passwordC").val())
        notValid("password", 
                 "matched (" + $("#passwordC").val() + ")");
    
    console.log(errorMessage)
    console.log(fieldMissing)
    
    if(fieldMissing != "")
        $("#missing").html( fieldMissing = 
        "<br><ins>Please Fill the Following Fields</ins><br>" + fieldMissing
            )
        .css("color", "red")
        .show();
    else $("#missing").hide();
            
    if(errorMessage != "")
        $("#error").html(errorMessage)
            .css("color", "red")
            .show();
    else $("#error").hide();
    
    if(fieldMissing == "" & errorMessage == "")
        $("#msg").html("SUCCESS..!!")
            .css("color", "green")
            .show();
    
    
    
    //$("#msg").html(errorMessage fieldMissing);
});

