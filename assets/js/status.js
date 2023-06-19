// ブラウザの言語を取得する
var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
// ただし、どちらのプロパティにも対応していないブラウザではundefinedになる

if (lang === undefined)
    lang = "ja"; // 不明のときは日本語と見なす

if (lang.toLowerCase().indexOf("ja") !== -1) {
    statusactive = "正常稼働中";
    statusproblem = "問題発生中";
    statusupdating = "更新作業中";
    statusmaintenance = "メンテナンス中";
    statusbroken = "崩壊中";
    statusendofservice = "サービス終了";
    nowproblem = "現在発生してる問題:";
    textnone = "なし";
    design = "デザイン";
    server = "サーバー";
    downloadserver = "ダウンロードサーバー";
    repository = "リポジトリ";
    displayofdetailspages = "製品ページ等の表示";
    statusallactive = "すべてのサービスは正常に動作しています！";
    statusallmaintenance = "一部のサービスは現在メンテナンス中です";
    statusallupdate = "一部のサービスは現在更新作業中です";
    statusallproblem = "一部のサービスで問題が発生しています";
}
else {
    statusactive = "Working";
    statusproblem = "Problem";
    statusupdating = "Updating";
    statusmaintenance = "Maintenance working";
    statusbroken = "Broken";
    statusendofservice = "End of Service";
    nowproblem = "Currently Issues:";
    textnone = "None";
    design = "Design";
    server = "Server";
    downloadserver = "Download Server";
    repository = "Repository";
    displayofdetailspages = "Display of details pages, etc.";
    statusallactive = "All services are working!";
    statusallmaintenance = "Some services are currently under maintenance";
    statusallupdate = "Some services are currently being updated";
    statusallproblem = "We are experiencing problems with some of our services";
}

problemlist = {
    "active": 0,
    "update": 0,
    "maintenance": 0,
    "problem": 0
}

fetch("https://api.pescadogames.com/status")
    .then(response => response.json())
    .then(data => buttoncolorandtitletext(data));

function buttoncolorandtitletext(readjson) {

    console.log(readjson)

    let i = 1;

    for (let json of readjson) {
        if (i == 1) {
            ProblemNameDetecterJsonEdition(json.problemname);

            if (json.problemname == "none") {
                document.getElementById('WebSiteButton').classList.add('ok');
                i++;
            }
            else {
                document.getElementById('WebSiteButton').classList.add(json.problemname);
                i++;
            }
        }
        else if (i == 2) {
            ProblemNameDetecterJsonEdition(json.problemname);

            if (json.problemname == "none") {
                document.getElementById('PescadoGamesBOTButton').classList.add('ok');
                i++;
            }
            else {
                document.getElementById('PescadoGamesBOTButton').classList.add(json.problemname);
                i++;
            }
        }
        else if (i == 3) {
            ProblemNameDetecterJsonEdition(json.problemname);

            if (json.problemname == "none") {
                document.getElementById('PescadoGamesLauncherButton').classList.add('ok');
                i++;
            }
            else {
                document.getElementById('PescadoGamesLauncherButton').classList.add(json.problemname);
                i++;
            }
        }
    }

    if (problemlist.problem >= 1) {
        document.getElementById('statustext').textContent = statusallproblem;
    }
    else if (problemlist.maintenance >= 1) {
        document.getElementById('statustext').textContent = statusallmaintenance;
    }
    else if (problemlist.update >= 1) {
        document.getElementById('statustext').textContent = statusallupdate;
    }

    WebSiteClick()
}

function WebSiteClick() {
    fetch("https://api.pescadogames.com/status")
        .then(response => response.json())
        .then(data => infoshow(data, 1));
}

function PescadoGamesBOTClick() {
    fetch("https://api.pescadogames.com/status")
        .then(response => response.json())
        .then(data => infoshow(data, 2));
}

function PescadoGamesStoreClick() {
    fetch("https://api.pescadogames.com/status")
        .then(response => response.json())
        .then(data => infoshow(data, 3));
}

function infoshow(readjson, readno) {
    let i = 1;

    document.getElementById('serviceinfo').classList.remove('show');

    setTimeout(function () {
        for (let json of readjson) {

            if (i == readno) {
                if (readno == 1) {
                    document.getElementById('serviceinfotitle').textContent = "WebSite";
                    document.getElementById('serviceinfotext1').textContent = "GitHubPages(Repository)";
                    document.getElementById('serviceinfotext2').textContent = design;
                    document.getElementById('serviceinfostatus1').textContent = ClassDetecter(json.status1);
                    document.getElementById('serviceinfostatus2').textContent = ClassDetecter(json.status2);
                    document.getElementById('servicenowinfo').textContent = nowproblem + ProblemNameDetecter(json.problemname);
                    document.getElementById('serviceinfo3').style = "display: none";
                    document.getElementById('serviceinfo4').style = "display: none";
                    document.getElementById('serviceinfo').classList.add('show');
                    break;
                }
                else if (readno == 2) {
                    document.getElementById('serviceinfotitle').textContent = "PescadoGamesBOT";
                    document.getElementById('serviceinfotext1').textContent = server;
                    document.getElementById('serviceinfotext2').textContent = repository;
                    document.getElementById('serviceinfostatus1').textContent = ClassDetecter(json.status1);
                    document.getElementById('serviceinfostatus2').textContent = ClassDetecter(json.status2);
                    document.getElementById('serviceinfostatus3').textContent = ClassDetecter(json.status3);
                    document.getElementById('serviceinfostatus4').textContent = ClassDetecter(json.status4);
                    document.getElementById('servicenowinfo').textContent = nowproblem + ProblemNameDetecter(json.problemname);
                    document.getElementById('serviceinfo3').style = "";
                    document.getElementById('serviceinfo4').style = "";
                    document.getElementById('serviceinfo').classList.add('show');
                    break;
                }
                else if (readno == 3) {
                    document.getElementById('serviceinfotitle').textContent = "PescadoGamesLauncher";
                    document.getElementById('serviceinfotext1').textContent = downloadserver;
                    document.getElementById('serviceinfotext2').textContent = displayofdetailspages;
                    document.getElementById('serviceinfostatus1').textContent = ClassDetecter(json.status1);
                    document.getElementById('serviceinfostatus2').textContent = ClassDetecter(json.status2);
                    document.getElementById('servicenowinfo').textContent = nowproblem + ProblemNameDetecter(json.problemname);
                    document.getElementById('serviceinfo3').style = "display: none";
                    document.getElementById('serviceinfo4').style = "display: none";
                    document.getElementById('serviceinfo').classList.add('show');
                    break;
                }
            }
            else {
                i++;
                continue;
            }
        }
    }, 250);
}

function ClassDetecter(statustext) {
    if (statustext == "act") {
        return statusactive;
    }
    else if (statustext == "mainte") {
        return statusmaintenance;
    }
    else if (statustext == "update") {
        return statusupdating;
    }
    else if (statustext == "pro") {
        return statusproblem;
    }
}

function ProblemNameDetecter(statustext) {
    if (statustext == "none") {
        return statusactive;
    }
    else if (statustext == "maintenance") {
        return statusmaintenance;
    }
    else if (statustext == "update") {
        return statusupdating;
    }
    else if (statustext == "problem") {
        return statusproblem;
    }
}

function ProblemNameDetecterJsonEdition(statustext) {
    if (statustext == "none") {
        problemlist.active = problemlist.active + 1;
    }
    else if (statustext == "maintenance") {
        problemlist.maintenance = problemlist.maintenance + 1;
    }
    else if (statustext == "update") {
        problemlist.update = problemlist.update + 1;
    }
    else if (statustext == "problem") {
        problemlist.problem = problemlist.problem + 1;
    }
}