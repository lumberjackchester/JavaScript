
var COOKNAME = 'ShowIndex';

function checkCookie() {
    //If no cookie redirect 
    if (!Cookies.get(COOKNAME)) {
        console.log('No cookie set. Redirecting to index2.html');
        window.location = '/index2.html';
    }
    else {
        // cookie exists 
        console.log(Cookies.get(COOKNAME));
    }

};
function AddIndexCookie() {
    Cookies.set(COOKNAME, true);
};

