url = `assets/json/status.json`;
act = "act";
pro = "pro";

// ブラウザの言語を取得する
var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
// ただし、どちらのプロパティにも対応していないブラウザではundefinedになる

if (lang === undefined)
    lang = "ja"; // 不明のときは日本語と見なす

if (lang.toLowerCase().indexOf("ja") !== -1) {
    statusactive = "正常";
    statusproblem = "問題発生";
    statusupdating = "更新作業中"
    statusbroken = "崩壊中";
    statusendofservice = "サービス終了";
    statusallactive = "すべてのシステムは正常に動作しています！";
    statusallupdate = "一部のシステムは現在更新作業中です";
    statusallproblem = "一部のシステムで問題が発生しています";
}
else {
    statusactive = "Working";
    statusproblem = "Problem";
    statusupdating = "Updating"
    statusbroken = "Broken";
    statusendofservice = "End of Service";
}

$.getJSON(url, (data) => {
    if (data.githubpagesstatus == "act") {
        if (data.displaystatus == "act") {
            if (data.serverstatus == "act") {
                if (data.websiteviewstatus == "act") {
                    if (data.pgbotserverstatus == "act") {
                        if (data.pgbotrepository == "act") {
                            if (data.pgbotresponse == "act") {
                                if (data.pgbotgbc == "act") {
                                    var elem = document.getElementById('statusmark');
                                    elem.src = "https://linux.pescadogames.com/assets/image/StatusCheckMark.svg";
                                    var elm = document.getElementById('statustext');
                                    elm.textContent = statusallactive;
                                    $('.nowstatus').addClass('allok');
                                }
                                else if (data.pgbotgbc == "upd"){
                                    var elem = document.getElementById('statusmark');
                                    elem.src = "https://linux.pescadogames.com/assets/image/StatusUpdate.svg";
                                    var elm = document.getElementById('statustext');
                                    elm.textContent = statusallupdate;
                                    $('.nowstatus').removeClass('allok');
                                    $('.nowstatus').addClass('allupdate');
                                }
                                else {
                                    var elem = document.getElementById('statusmark');
                                    elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                                    var elm = document.getElementById('statustext');
                                    elm.textContent = statusallproblem;
                                    $('.nowstatus').removeClass('allok');
                                    $('.nowstatus').addClass('allproblem');
                                }
                            }
                            else if (data.pgbotresponse == "upd"){
                                var elem = document.getElementById('statusmark');
                                elem.src = "https://linux.pescadogames.com/assets/image/StatusUpdate.svg";
                                var elm = document.getElementById('statustext');
                                elm.textContent = statusallupdate;
                                $('.nowstatus').removeClass('allok');
                                $('.nowstatus').addClass('allupdate');
                            }
                            else {
                                var elem = document.getElementById('statusmark');
                                elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                                var elm = document.getElementById('statustext');
                                elm.textContent = statusallproblem;
                                $('.nowstatus').removeClass('allok');
                                $('.nowstatus').addClass('allproblem');
                            }
                        }
                        else if (data.pgbotrepository == "upd"){
                            var elem = document.getElementById('statusmark');
                            elem.src = "https://linux.pescadogames.com/assets/image/StatusUpdate.svg";
                            var elm = document.getElementById('statustext');
                            elm.textContent = statusallupdate;
                            $('.nowstatus').removeClass('allok');
                            $('.nowstatus').addClass('allupdate');
                        }
                        else {
                            var elem = document.getElementById('statusmark');
                            elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                            var elm = document.getElementById('statustext');
                            elm.textContent = statusallproblem;
                            $('.nowstatus').removeClass('allok');
                            $('.nowstatus').addClass('allproblem');
                        }
                    }
                    else if (data.pgbotserverstatus == "upd"){
                        var elem = document.getElementById('statusmark');
                        elem.src = "https://linux.pescadogames.com/assets/image/StatusUpdate.svg";
                        var elm = document.getElementById('statustext');
                        elm.textContent = statusallupdate;
                        $('.nowstatus').removeClass('allok');
                        $('.nowstatus').addClass('allupdate');
                    }
                    else {
                        var elem = document.getElementById('statusmark');
                        elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                        var elm = document.getElementById('statustext');
                        elm.textContent = statusallproblem;
                        $('.nowstatus').removeClass('allok');
                        $('.nowstatus').addClass('allproblem');
                    }
                }
                else if (data.websiteviewstatus == "upd"){
                    var elem = document.getElementById('statusmark');
                    elem.src = "https://linux.pescadogames.com/assets/image/StatusUpdate.svg";
                    var elm = document.getElementById('statustext');
                    elm.textContent = statusallupdate;
                    $('.nowstatus').removeClass('allok');
                    $('.nowstatus').addClass('allupdate');
                }
                else {
                    var elem = document.getElementById('statusmark');
                    elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                    var elm = document.getElementById('statustext');
                    elm.textContent = statusallproblem;
                    $('.nowstatus').removeClass('allok');
                    $('.nowstatus').addClass('allproblem');
                }
            }
            else if (data.serverstatus == "upd"){
                var elem = document.getElementById('statusmark');
                elem.src = "https://linux.pescadogames.com/assets/image/StatusUpdate.svg";
                var elm = document.getElementById('statustext');
                elm.textContent = statusallupdate;
                $('.nowstatus').removeClass('allok');
                $('.nowstatus').addClass('allupdate');
            }
            else {
                var elem = document.getElementById('statusmark');
                elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                var elm = document.getElementById('statustext');
                elm.textContent = statusallproblem;
                $('.nowstatus').removeClass('allok');
                $('.nowstatus').addClass('allproblem');
            }
        }
        else if (data.displaystatus == "upd"){
            var elem = document.getElementById('statusmark');
            elem.src = "https://linux.pescadogames.com/assets/image/StatusUpdate.svg";
            var elm = document.getElementById('statustext');
            elm.textContent = statusallupdate;
            $('.nowstatus').removeClass('allok');
            $('.nowstatus').addClass('allupdate');
        }
        else {
            var elem = document.getElementById('statusmark');
            elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
            var elm = document.getElementById('statustext');
            elm.textContent = statusallproblem;
            $('.nowstatus').removeClass('allok');
            $('.nowstatus').addClass('allproblem');
        }
    }
    else if (data.githubpagesstatus == "upd"){
        var elem = document.getElementById('statusmark');
        elem.src = "https://linux.pescadogames.com/assets/image/StatusUpdate.svg";
        var elm = document.getElementById('statustext');
        elm.textContent = statusallupdate;
        $('.nowstatus').removeClass('allok');
        $('.nowstatus').addClass('allupdate');
    }
    else {
        var elem = document.getElementById('statusmark');
        elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
        var elm = document.getElementById('statustext');
        elm.textContent = statusallproblem;
        $('.nowstatus').removeClass('allok');
        $('.nowstatus').addClass('allproblem');
    }
});
