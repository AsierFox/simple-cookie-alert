(function(){checkCookie()})();
function checkCookie () {
    if (getCookieValue('cookielaw')) {
        cookieLawAccepted();
    } else {
        document.getElementById('cookie-alert').style.display = 'block';
    }
}

function getCookieValue (cookie_name) {
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        if (cookies[i].split('=')[0].includes('cookielaw')) {
            if (cookies[i].split('=')[1] === '1') {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

function setCookie (cookie_name, value) {
    var expire_days = 365, /*Expires in 365 days*/
        expire_date = new Date();
        expire_date.setDate(expire_date.getDate() + expire_days);
    document.cookie = cookie_name + "=" + escape(value) + ((expire_days == null) ? "" : "; expires=" + expire_date.toUTCString());
}

function setLawCookie () {
    setCookie('cookielaw', '1');
    document.getElementById('cookie-alert').style.display = 'none';
    checkCookie();
}

function cookieLawAccepted () {
    // Cookies are accepted -> Action (analytics, ...)
}
