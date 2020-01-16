const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

function success (req, res, message, status){

    let statusCode = status;
    let statusMessage = message;

    if(!status){
        statusCode = 200;
    }

    if(!message){
        statusMessage = statusMessages[statusCode];
    }

    res.status(statusCode).send({
        error: '',
        body: statusMessage
    });

}

function error (req, res, message, status, details){

    let statusCode = status;
    let statusMessage = message;

    if(!status) {
       statusCode = 500; 
    }

    if(!message){
        statusMessage = statusMessages[statusCode];
    }

    res.status(statusCode).send({
        error: statusMessage,
        body: '' 
     });

     console.error("[responseError] " + details);

}

module.exports = {
    success,
    error
}