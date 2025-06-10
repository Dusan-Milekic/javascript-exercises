const repeatString = function(message,num) {
    if (num == 0){return ''}
    else if (num < 0){return 'ERROR'}
    else{
        r_message = '';
        for (let i = 0; i < num; i++)
            r_message += message
    
    }

    return r_message;
};

// Do not edit below this line
module.exports = repeatString;
