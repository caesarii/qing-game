var e = selector => document.querySelector(selector)
var log = console.log

/*    function(...args) {
    e('#id-text-log').value += '\n' + args.toString()
}*/



var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}



var rectIntersects = function(a, b) {
    if(b.y > a.y && b.y < a.y + a.image.height) {
        if(b.x > a.x && b.x < a.x + a.image.width) {
            return true
        }
    }
    return false
}