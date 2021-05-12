var links = document.querySelectorAll('.result-lockup__name > a');
for (var i = 0; i < links.length; i++) {
    if (links[i]) console.log("\t" + links[i].innerText + "\t" + links[i].href)
}

//====


var links = document.querySelectorAll('.result-lockup__name > a');
for (var i = 0; i < links.length; i++) {
    if (links[i]) "\t" + links[i].innerText + "\t" + links[i].href
}

//===

var links = document.querySelectorAll('.result-lockup__name > a');
for (var i = 0; i < links.length; i++) {
    if (links[i]) console.log("\t" + links[i].innerText + "\t" + links[i].href)
}


//===
/* 

https://docs.google.com/spreadsheets/d/1DMXFj-xB0I7aeEc4a9q6TvfKp5UoVxK9K_HE_LfzVM4/edit#gid=0

*/
var leads = document.querySelectorAll('.result-lockup > div.result-lockup__profile-info.flex.flex-column > div > dl');
window.scrollTo(0, document.body.scrollHeight);
setTimeout(function() {
    for (var i = 0; i < leads.length; i++) {
        let lead = leads[i];
        if (lead) {
            let name = lead.querySelector('.result-lockup__name').innerText;
            let format = false;
            let names = name.split(" ");
            if (names.length == 2) {
                name = "\t" + names[0] + "\t" + names[1]
                format = true;
            }
            if (names.length == 3) {
                name = "\t" + names[0] + "\t" + names[2]
                format = true;
            }
            if (format) {
                let url = lead.querySelector('.result-lockup__name a').href.trim();
                let position = lead.querySelector('.result-lockup__highlight-keyword > span').innerText.trim();
                let company = lead.querySelector('.result-lockup__position-company > a > span').innerText.trim();
                let yearsInPosition = lead.querySelector('dd:nth-child(4)').innerText.trim();
                let location = lead.querySelector('dd:nth-child(5)').innerText.trim();
                console.log("\t" + name + "\t" + position + "\t" + company + "\t" + url + "\t" + yearsInPosition + "\t" + location)
            }
        }
    }
}, 2000);