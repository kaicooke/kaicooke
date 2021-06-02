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

sn leads

*/
window.scrollTo(0, document.body.scrollHeight);
setTimeout(function() {
    var leads = document.querySelectorAll('.result-lockup > div.result-lockup__profile-info.flex.flex-column > div > dl');
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
                let yearsExperience = lead.querySelector('dd:nth-child(4)').innerText.trim();
                let yearsInPosition = yearsExperience.split(" ");
                let yearsInCurrentPosition = 0;
                if (yearsInPosition.length > 1) {
                    yearsInCurrentPosition = yearsInPosition[0];
                }

                let location = lead.querySelector('dd:nth-child(5)').innerText.trim();
                console.log("\t" + name + "\t" + position + "\t" + company + "\t" + url + "\t" + yearsInCurrentPosition + "\t" + yearsExperience + "\t" + location)
                    //"\t" + name + "\t" + position + "\t" + company + "\t" + url + "\t" + yearsInCurrentPosition + "\t" + yearsExperience + "\t" + location
            }
        }
    }
}, 2000);




// events


var out = function() {
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(function() {
        let events = document.querySelectorAll('.entity-result');
        let next = document.querySelector('.artdeco-pagination__button--next');
        for (var i = 0; i < events.length; i++) {
            let event = events[i];
            if (event) {
                let link = event.querySelectorAll('.app-aware-link')[1].href;
                let title = event.querySelectorAll('.app-aware-link')[1].innerText;
                let date = event.querySelector('.entity-result__primary-subtitle').innerText;
                if (date.split("-").length > 1) {
                    date = date.split("-")[0];
                }
                let parsedate = date.split(" ");
                if (parsedate.length == 6) {
                    parsedate.pop();
                }
                let cleaneddate = parsedate.join();
                cleaneddate = cleaneddate.replaceAll(",AM", "").replaceAll(",PM", "").replaceAll(",,", ",")
                let time = new Date(cleaneddate).getTime();
                let nr = event.querySelector('.entity-result__simple-insight-text').innerText.trim().split(' ')[0];
                if (parseInt(nr.replaceAll(",", "")) < 50) {
                    //console.clear();
                    console.log("\t" + time + "\t" + date + "\t" + nr + "\t" + title + "\t" + link);
                }
            }
        }
        next.click();
    }, 2000);
}