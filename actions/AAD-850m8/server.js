function(properties, context) {
        
var passKey = properties.Paasskey;
var shortcode = properties.Shortcode;


var times = require('time-stamp');
var btoa = require('btoa');




var timestampFormated = times("YYYYMMDDHHmmss");
var password = btoa(shortcode+passKey+timestampFormated);

    
    
return{"encoded" : password, "date_timestamp": timestampFormated};


}

