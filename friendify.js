/*
* Accept all friend requests and make friend requests by clicking on buttons
* in the "Find Friends" page: https://www.facebook.com/?sk=ff
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function friendify() {
    var confirmBtn = "Confirm";
    var addFriendBtn = "friend-add";
    var expandBtn = "See More Requests";
    //100 pages should cover all friend accept/requests
    //TODO: improve this logic
    for(var a=0;a<100;a++){
        var buttons = document.querySelectorAll('button');
        var links = document.querySelectorAll('a');
        var delay = 1000+Math.floor(Math.random() * 3000) + 1;
        //click on all accept friend request and add friend buttons
        for (var i=0, l=buttons.length; i<l; i++) {
            if (buttons[i].firstChild != null && buttons[i].firstChild.outerHTML != null &&(buttons[i].firstChild.nodeValue == confirmBtn || buttons[i].firstChild.outerHTML.contains(addFriendBtn))) {
                await sleep (delay);
                buttons[i].click();
                console.log("Friend added: " + buttons[i]);
            }
        }
        //click on link that expands the list of friends to accept and request
        for (var i=0, l=links.length; i<l; i++) {
            if (links[i].firstChild != null && links[i].firstChild.nodeValue == expandBtn) {
                await sleep (delay);
                links[i].click();
            }
        }
    }
}
friendify();
