function g() {
    console.info("derping herps...")
}
g.prototype.a = function() {
    a = document.querySelectorAll("div.UFICommentContent");
    for (var c = a.length - 1; 0 <= c; c--) {
        var d = a[c];
        if (!d.classList.contains("herped") && (d.className += " herped", null != d.querySelector("span span span"))) {
            for (var d = d.querySelector("span span span"), h = Math.floor(20 * Math.random()) + 1, f = [], e = 0; e < h; e++)
                f[e] = 1 == Math.floor(2 * Math.random()) ? "herp" : "derp", 1 == Math.floor(2 * Math.random()) && (f[e] = "da");
            d.innerHTML = " " + f.join(" ") + " "
        }
    }
    b = document.querySelectorAll(".fbMainStreamAttachment");
    for (c = 
    b.length - 1; 0 <= c; c--)
        b[c].remove()
};
var k = new g;
setInterval(k.a, 100);

