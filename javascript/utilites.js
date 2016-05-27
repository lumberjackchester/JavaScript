 
function checkCookie() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)ShowIndex\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {        
        console.log('No cookie set. Redirecting to index2.html');
        window.location = '/index2.html';
    }
}

function AddIndexCookie(min) {
    //add 8 hours
    var date = new Date();
    date.setTime(date.getTime() + (min * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = 'ShowIndex=true; ' + expires;
};

// converting inputs of a given container to a json object
$.fn.serializeInputs = function () {

    var o = {};
    var a = this.find(':input').serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

// format strings
var formatPhone = function formatPhone(obj) {
        var numbers = obj.value.replace(/\D/g, ''),
            char = { 0: '(', 3: ')-', 6: '-' };
        obj.value = '';
        for (var i = 0; i < numbers.length; i++) {
            obj.value += (char[i] || '') + numbers[i];
        }
        //revalidate 
        $form.formValidation('revalidateField', obj.name);
    };

    var formatSocial = function formatSocial(obj) {
        if (!/^\d{3}-\d{2}-\d{4}$/g.test(obj.value)) {
            var numbers = obj.value.replace(/\D/g, ''),
               char = { 3: '-', 5: '-' };
            var value = '';
            for (var i = 0; i < numbers.length; i++) {
                value += (char[i] || '') + numbers[i];
            }
            $(obj).val(value);
            //revalidate 
            $form.formValidation('revalidateField', obj.name);
        }
    };
