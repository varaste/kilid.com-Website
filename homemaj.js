/*jshint esversion: 6 */

function update_blog() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://hallows.ir/mags', true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var counter = 0;
            data.items.forEach(item => {
                if (counter < 3) {
                    var el_text = document.getElementsByClassName("majcard")[counter].getElementsByClassName("cardtitle")[0];
                    var el_img = document.getElementsByClassName("majcard")[counter].getElementsByClassName("majcardfigimg")[0];
                    el_text.innerHTML = item.title;
                    el_img.src = item.image;
                }
                counter += 1;
            });
        } else {
            console.log('ERROR !');
        }
    };
    request.send();
}
update_blog();