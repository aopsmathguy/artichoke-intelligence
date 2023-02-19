function mobileControls() {
    var moved = false;
    document.body.addEventListener("touchstart", function(e) {
        e.preventDefault();

        moved = false;
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        document.body.dispatchEvent(mouseEvent);
        mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        document.body.dispatchEvent(mouseEvent);
    }, false);
    document.body.addEventListener("touchend", function(e) {
        e.preventDefault();
        var mouseEvent = new MouseEvent("mouseup", {});
        document.body.dispatchEvent(mouseEvent);
        if (!moved) {
            var clickEvent = new MouseEvent("click", {});
            document.body.dispatchEvent(clickEvent);

        }

    }, false);
    document.body.addEventListener("touchmove", function(e) {
        e.preventDefault();
        moved = true;
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        document.body.dispatchEvent(mouseEvent);
    }, false);

    window.addEventListener("scroll", preventMotion, false);
    window.addEventListener("touchmove", preventMotion, false);

    function preventMotion(event) {
        window.scrollTo(0, 0);
        event.preventDefault();
        event.stopPropagation();
    }
}
function setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    var ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    // ctx.scale(dpr, dpr);
    return ctx;
}
mobileControls()
var canvas = document.createElement("canvas");
document.body.appendChild(canvas)
var ctx = setupCanvas(canvas)
var world;
var scl = 2.4;
var scale;
var width = 220
var height = width * 9 / 16
"You are so special to me...";
"Happy Valentine's Day!!";
var hearts;
const redScale = function(a) {
    // if (a < 0.5) {
    //     return "rgb(" + Math.floor(a / 0.5 * 255) + ",0,0)"
    // } else {
    //     return "rgb(255," + Math.floor((a - 0.5) / 0.5 * 255) + "," + Math.floor((a - 0.5) / 0.5 * 255) + ")"
    // }
    return "hsl(-10, 100%, " + 100 * a + "%)"
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
const pSBC = (p, c0, c1, l) => {
    let r, g, b, P, f, t, h, i = parseInt, m = Math.round, a = typeof (c1) == "string";
    if (typeof (p) != "number" || p < -1 || p > 1 || typeof (c0) != "string" || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a)) return null;
    if (!this.pSBCr) this.pSBCr = (d) => {
        let n = d.length, x = {};
        if (n > 9) {
            [r, g, b, a] = d = d.split(","), n = d.length;
            if (n < 3 || n > 4) return null;
            x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1
        } else {
            if (n == 8 || n == 6 || n < 4) return null;
            if (n < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
            d = i(d.slice(1), 16);
            if (n == 9 || n == 5) x.r = d >> 24 & 255, x.g = d >> 16 & 255, x.b = d >> 8 & 255, x.a = m((d & 255) / 0.255) / 1000;
            else x.r = d >> 16, x.g = d >> 8 & 255, x.b = d & 255, x.a = -1
        } return x
    };
    h = c0.length > 9, h = a ? c1.length > 9 ? true : c1 == "c" ? !h : false : h, f = this.pSBCr(c0), P = p < 0, t = c1 && c1 != "c" ? this.pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }, p = P ? p * -1 : p, P = 1 - p;
    if (!f || !t) return null;
    if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b);
    else r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5), g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5), b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
    a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0;
    if (h) return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
    else return "#" + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
}
function createDotMap() {
    var chrs = '!\n#\n$\n%\n&\n(\n)\n*\n,\n-\n.\n/\n0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n:\n;\n<\n>\n?\n@\nA\nB\nC\nD\nE\nF\nG\nH\nI\nJ\nK\nL\nM\nN\nO\nP\nQ\nR\nS\nT\nU\nV\nW\nX\nY\nZ\n[\n]\n^\n_\na\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk\nl\nm\nn\no\np\nq\nr\ns\nt\nu\nv\nw\nx\ny\nz';
    var chrsList = chrs.split("\n");
    var a = '\n██         \n██         \n██         \n           \n██         \n           \n           \n ██  ██    \n████████   \n ██  ██    \n████████   \n ██  ██    \n           \n           \n▄▄███▄▄·   \n██         \n███████    \n     ██    \n███████    \n  ▀▀▀      \n           \n██  ██     \n   ██      \n  ██       \n ██        \n██  ██     \n           \n           \n   ██      \n   ██      \n████████   \n██  ██     \n██████     \n           \n           \n ██        \n██         \n██         \n██         \n ██        \n           \n           \n██         \n ██        \n ██        \n ██        \n██         \n           \n           \n           \n▄ ██ ▄     \n ████      \n▀ ██ ▀     \n           \n           \n           \n           \n           \n           \n           \n▄█         \n           \n           \n           \n           \n█████      \n           \n           \n           \n           \n           \n           \n           \n           \n██         \n           \n           \n    ██     \n   ██      \n  ██       \n ██        \n██         \n           \n           \n ██████    \n██  ████   \n██ ██ ██   \n████  ██   \n ██████    \n           \n           \n ██        \n███        \n ██        \n ██        \n ██        \n           \n           \n██████     \n     ██    \n █████     \n██         \n███████    \n           \n           \n██████     \n     ██    \n █████     \n     ██    \n██████     \n           \n           \n██   ██    \n██   ██    \n███████    \n     ██    \n     ██    \n           \n           \n███████    \n██         \n███████    \n     ██    \n███████    \n           \n           \n ██████    \n██         \n███████    \n██    ██   \n ██████    \n           \n           \n███████    \n     ██    \n    ██     \n   ██      \n   ██      \n           \n           \n █████     \n██   ██    \n █████     \n██   ██    \n █████     \n           \n           \n █████     \n██   ██    \n ██████    \n     ██    \n █████     \n           \n           \n           \n██         \n           \n██         \n           \n           \n           \n           \n██         \n           \n▄█         \n▀          \n           \n           \n  ██       \n ██        \n██         \n ██        \n  ██       \n           \n           \n██         \n ██        \n  ██       \n ██        \n██         \n           \n           \n██████     \n     ██    \n  ▄███     \n  ▀▀       \n  ██       \n           \n           \n ██████    \n██    ██   \n██ ██ ██   \n██ ██ ██   \n █ ████    \n           \n           \n █████     \n██   ██    \n███████    \n██   ██    \n██   ██    \n           \n           \n██████     \n██   ██    \n██████     \n██   ██    \n██████     \n           \n           \n ██████    \n██         \n██         \n██         \n ██████    \n           \n           \n██████     \n██   ██    \n██   ██    \n██   ██    \n██████     \n           \n           \n███████    \n██         \n█████      \n██         \n███████    \n           \n           \n███████    \n██         \n█████      \n██         \n██         \n           \n           \n ██████    \n██         \n██   ███   \n██    ██   \n ██████    \n           \n           \n██   ██    \n██   ██    \n███████    \n██   ██    \n██   ██    \n           \n           \n██         \n██         \n██         \n██         \n██         \n           \n           \n     ██    \n     ██    \n     ██    \n██   ██    \n █████     \n           \n           \n██   ██    \n██  ██     \n█████      \n██  ██     \n██   ██    \n           \n           \n██         \n██         \n██         \n██         \n███████    \n           \n           \n███    ███ \n████  ████ \n██ ████ ██ \n██  ██  ██ \n██      ██ \n           \n           \n███    ██  \n████   ██  \n██ ██  ██  \n██  ██ ██  \n██   ████  \n           \n           \n ██████    \n██    ██   \n██    ██   \n██    ██   \n ██████    \n           \n           \n██████     \n██   ██    \n██████     \n██         \n██         \n           \n           \n ██████    \n██    ██   \n██    ██   \n██ ▄▄ ██   \n ██████    \n    ▀▀     \n           \n██████     \n██   ██    \n██████     \n██   ██    \n██   ██    \n           \n           \n███████    \n██         \n███████    \n     ██    \n███████    \n           \n           \n████████   \n   ██      \n   ██      \n   ██      \n   ██      \n           \n           \n██    ██   \n██    ██   \n██    ██   \n██    ██   \n ██████    \n           \n           \n██    ██   \n██    ██   \n██    ██   \n ██  ██    \n  ████     \n           \n           \n██     ██  \n██     ██  \n██  █  ██  \n██ ███ ██  \n ███ ███   \n           \n           \n██   ██    \n ██ ██     \n  ███      \n ██ ██     \n██   ██    \n           \n           \n██    ██   \n ██  ██    \n  ████     \n   ██      \n   ██      \n           \n           \n███████    \n   ███     \n  ███      \n ███       \n███████    \n           \n           \n███        \n██         \n██         \n██         \n███        \n           \n           \n███        \n ██        \n ██        \n ██        \n███        \n           \n           \n ███       \n██ ██      \n           \n           \n           \n           \n           \n           \n           \n           \n           \n███████    \n           \n           \n █████     \n██   ██    \n███████    \n██   ██    \n██   ██    \n           \n           \n██████     \n██   ██    \n██████     \n██   ██    \n██████     \n           \n           \n ██████    \n██         \n██         \n██         \n ██████    \n           \n           \n██████     \n██   ██    \n██   ██    \n██   ██    \n██████     \n           \n           \n███████    \n██         \n█████      \n██         \n███████    \n           \n           \n███████    \n██         \n█████      \n██         \n██         \n           \n           \n ██████    \n██         \n██   ███   \n██    ██   \n ██████    \n           \n           \n██   ██    \n██   ██    \n███████    \n██   ██    \n██   ██    \n           \n           \n██         \n██         \n██         \n██         \n██         \n           \n           \n     ██    \n     ██    \n     ██    \n██   ██    \n █████     \n           \n           \n██   ██    \n██  ██     \n█████      \n██  ██     \n██   ██    \n           \n           \n██         \n██         \n██         \n██         \n███████    \n           \n           \n███    ███ \n████  ████ \n██ ████ ██ \n██  ██  ██ \n██      ██ \n           \n           \n███    ██  \n████   ██  \n██ ██  ██  \n██  ██ ██  \n██   ████  \n           \n           \n ██████    \n██    ██   \n██    ██   \n██    ██   \n ██████    \n           \n           \n██████     \n██   ██    \n██████     \n██         \n██         \n           \n           \n ██████    \n██    ██   \n██    ██   \n██ ▄▄ ██   \n ██████    \n    ▀▀     \n           \n██████     \n██   ██    \n██████     \n██   ██    \n██   ██    \n           \n           \n███████    \n██         \n███████    \n     ██    \n███████    \n           \n           \n████████   \n   ██      \n   ██      \n   ██      \n   ██      \n           \n           \n██    ██   \n██    ██   \n██    ██   \n██    ██   \n ██████    \n           \n           \n██    ██   \n██    ██   \n██    ██   \n ██  ██    \n  ████     \n           \n           \n██     ██  \n██     ██  \n██  █  ██  \n██ ███ ██  \n ███ ███   \n           \n           \n██   ██    \n ██ ██     \n  ███      \n ██ ██     \n██   ██    \n           \n           \n██    ██   \n ██  ██    \n  ████     \n   ██      \n   ██      \n           \n           \n███████    \n   ███     \n  ███      \n ███       \n███████    \n           \n           \n';
    var b = a.split("\n")
    var c = []
    for (var i = 0; i < chrsList.length; i++) {
        c[i] = []
        for (var j = 0; j < 5; j++) {
            var row = 7 * i + j + 1;
            c[i][j] = b[row];
        }
    }
    var lengths = {}
    for (var i = 0; i < chrsList.length; i++) {
        var chr = chrsList[i];
        lengths[chr] = 0;
        for (var j = 0; j < 5; j++) {
            for (var k = c[i][j].length - 1; k >= 0; k--) {
                var chrtr = c[i][j].charAt(k);
                if (chrtr != " ") {
                    lengths[chr] = Math.max(lengths[chr], k + 1)
                    break;
                }
            }
        }
    }
    var points = {}
    for (var i = 0; i < chrsList.length; i++) {
        var chr = chrsList[i];
        points[chr] = [];
        for (var j = 0; j < 5; j++) {
            for (var k = 0; k < lengths[chr]; k++) {
                var plc = c[i][j].charAt(k);
                if (plc == "█") {
                    points[chr].push([k, 2 * j])
                    points[chr].push([k, 2 * j + 1])
                } else if (plc == "▄") {
                    points[chr].push([k, 2 * j + 1])
                } else if (plc == "▀") {
                    points[chr].push([k, 2 * j])
                }
            }
        }
    }
    return [points, lengths];
}
function doText(txt) {
    var out = []
    var [points, lengths] = createDotMap();
    var position = 0;
    for (var i = 0; i < txt.length; i++) {
        var chr = txt.charAt(i)
        if (chr == " ") {
            position += 3
        } else {
            var pointsAdd = points[chr];
            for (var j = 0; j < pointsAdd.length; j++) {
                out.push([pointsAdd[j][0] + position, pointsAdd[j][1]])
            }
            position += lengths[chr] + 1
        }
    }
    return { pts: out, length: position };
}
function makeHeart(r) {
    var displacementY = 0.31
    // var out = new f2.Body({
    //     mass: 1,
    //     inertia: 0.52,
    //     shapes: [
    //         new f2.Circle(new f2.Vec2(-0.5, -0.5 + displacementY), 0.7071067812),
    //         new f2.Circle(new f2.Vec2(0.5, -0.5 + displacementY), 0.7071067812),
    //         new f2.Polygon([
    //             new f2.Vec2(1, displacementY),
    //             new f2.Vec2(0, -1 + displacementY),
    //             new f2.Vec2(-1, displacementY),
    //             new f2.Vec2(0, 1 + displacementY)
    //         ])
    //     ]
    // })
    var out = new f2.CircleBody({
        mass: 1,
        radius: 1.1
    })
    out.setCustomDisplayPlacement(function(ctx, placement) {
        ctx.save();
        ctx.translate(placement.position.x, placement.position.y);
        ctx.rotate(placement.angle);

        var grd = ctx.createLinearGradient(0, 1 + displacementY, 0, -0.5 + displacementY - 0.7071067812);
        grd.addColorStop(0, redScale(r + 0.2 * (1 - r)));
        grd.addColorStop(1, redScale(r + 0.5 * (1 - r)));

        // Fill with gradient
        ctx.fillStyle = grd;

        ctx.strokeStyle = redScale(r)
        ctx.lineWidth = 0.3
        // Fill with gradient


        ctx.beginPath();
        ctx.moveTo(-1, displacementY),
            ctx.lineTo(0, 1 + displacementY);
        ctx.lineTo(1, displacementY);
        ctx.arc(0.5, -0.5 + displacementY, 0.7071067812, Math.PI / 4, -3 * Math.PI / 4, true);
        ctx.arc(-0.5, -0.5 + displacementY, 0.7071067812, -Math.PI / 4, -5 * Math.PI / 4, true);
        ctx.fill();
        ctx.stroke();

//         ctx.beginPath();
//         ctx.fillStyle = redScale(r);
//         ctx.font = "1px Arial";
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.fillText(label, 0, 0.15)

        ctx.restore();
    })
    return out;
}
function createWall() {
    var dw = 50;
    var walls = [];
    wall = new f2.PolyBody({
        mass: Infinity,
        points: [
            new f2.Vec2(-dw, 0),
            new f2.Vec2(width + dw, 0),
            new f2.Vec2(width + dw, -dw),
            new f2.Vec2(-dw, -dw),
        ],
        position: new f2.Vec2(-width / 2, -height / 2)
    });
    wall.setCustomDisplayPlacement(function(ctx, placement) {
    })
    walls.push(wall);

    wall = new f2.PolyBody({
        mass: Infinity,
        points: [
            new f2.Vec2(-dw, height + dw),
            new f2.Vec2(width + dw, height + dw),
            new f2.Vec2(width + dw, height),
            new f2.Vec2(-dw, height)
        ],
        position: new f2.Vec2(-width / 2, -height / 2)
    });
    wall.setCustomDisplayPlacement(function(ctx, placement) {
    })
    walls.push(wall);

    wall = new f2.PolyBody({
        mass: Infinity,
        points: [
            new f2.Vec2(-dw, -dw),
            new f2.Vec2(-dw, height + dw),
            new f2.Vec2(0, height + dw),
            new f2.Vec2(0, -dw)
        ],
        position: new f2.Vec2(-width / 2, -height / 2)
    });
    wall.setCustomDisplayPlacement(function(ctx, placement) {
    })
    walls.push(wall);

    wall = new f2.PolyBody({
        mass: Infinity,
        points: [
            new f2.Vec2(width, -dw),
            new f2.Vec2(width, height + dw),
            new f2.Vec2(width + dw, height + dw),
            new f2.Vec2(width + dw, -dw)
        ],
        position: new f2.Vec2(-width / 2, -height / 2)
    });
    wall.setCustomDisplayPlacement(function(ctx, placement) {
    })
    walls.push(wall);
    return walls;
}
function createWorld() {
    world = new f2.World({
        time: Date.now() / 1000,
        gravity: 20,
        gridSize: 2.2
    });
    createWall().forEach(a => world.addBody(a))
}
function getPointsFromText(txt) {
    var out = [];
    var info = doText(txt)
    var pts = info.pts;
    var length = info.length;
    for (var i = 0; i < pts.length; i++) {
        out.push(new f2.Vec2(scl * (pts[i][0] - length / 2), scl * (pts[i][1] - 5)));
    }
    return out
}
function doEndSymbol() {
    var txt = '     ▄▄▄▄▄               ▄▄▄▄     \n   ████████▄▄         ▄███████▄▄  \n  █████████████▄  ▄▄█████████████ \n █████████████████████████████████\n██████████████████████████████████\n██████████████████████████████████\n▀████████████████████████████████ \n ███████████████████████████████  \n  ▀███████████████████████████▀   \n    ▀████████████████████████     \n       ▀███████████████████▀      \n         ▀███████████████▀        \n           ████████████▀          \n             ████████▀            \n               ████▀              \n                 ▀                ';
    var split = txt.split("\n");
    var width = split[0].length;
    var height = 2 * split.length;
    var points = [];
    for (var j = 0; j < split.length; j++) {
        for (var k = 0; k < width; k++) {
            var plc = split[j].charAt(k);
            if (plc == "█") {
                points.push([k, 2 * j])
                points.push([k, 2 * j + 1])
            } else if (plc == "▄") {
                points.push([k, 2 * j + 1])
            } else if (plc == "▀") {
                points.push([k, 2 * j])
            }
        }
    }
    return { pts: points, width: width, height: height };
}
function getPointsFromEndSymbol() {
    var out = [];
    var info = doEndSymbol()
    var pts = info.pts;
    var width = info.width;
    var height = info.height;
    for (var i = 0; i < pts.length; i++) {
        out.push(new f2.Vec2(scl * (pts[i][0] - width / 2), scl * (pts[i][1] - height / 2)));
    }
    return out
}
function createHeartsAndConstraints(msg) {
    var words = msg;
    var points = [];
    for (var i = 0; i < words.length; i++) {
        points.push(getPointsFromText(words[i]));
    }
    points.push(getPointsFromEndSymbol());
    points.forEach(a => a.sort((a, b) => {
        var diff = a.x - b.x;
        if (diff != 0) {
            return diff
        } return a.y - b.y
    }))
    var heartCnt = 0
    for (var i = 0; i < points.length; i++) {
        var pts = points[i];
        heartCnt = Math.max(pts.length, heartCnt);
    }
    var hearts = []
    for (var i = 0; i < heartCnt; i++) {
        var heart = makeHeart(Math.random() * 0.4 + 0.3);
        heart.position.x = width * (i / heartCnt - 0.5);
        heart.position.y = height * (0.8 * (Math.random() - 0.5))
        hearts.push(heart)
    }
    var stationary = new f2.Body({
        mass: Infinity,
        inertia: Infinity,
        shapes: []
    })
    var out = [];
    for (var i = 0; i < points.length; i++) {
        var pts = points[i];
        out[i] = []
        var offset = Math.floor((heartCnt - pts.length) / 2)
        for (var j = 0; j < pts.length; j++) {
            var pt = pts[j];
            var displacements = [new f2.Vec2(200, 0), new f2.Vec2(-200, 0), new f2.Vec2(0, 200), new f2.Vec2(0, -200)]
            var smallDisp =  [new f2.Vec2(1, 0), new f2.Vec2(-1, 0), new f2.Vec2(0, 1), new f2.Vec2(0, -1)];
            [...displacements.keys()].forEach(a => out[i].push(new f2.Constraint({
                body1: hearts[j + offset],
                r1: smallDisp[a],
                body2: stationary,
                r2: pt.add(displacements[a]),
                restLength: 199,
                kconstant: 20,
                cdamp : 2
            })))
        }
    }
    return [hearts, stationary, out]
}
function loop(dt) {
    var now = Date.now() / 1000;
    world.time = Math.max(now - 0.1, world.time)
    while (world.time < now) {
        world.step(dt);
    }
    var timeDiff = (now - world.time);

    setupCanvas(canvas)
    //48x27
    scale = Math.min(canvas.width / width, canvas.height / height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.scale(scale, scale);
    world.display(ctx, timeDiff);
    ctx.restore();
    requestAnimationFrame(loop.bind(this, dt));
}
function start() {
    createWorld()
    loop(0.016)
    var stationary, constraints;
    var lst = [
        "", "hello", "maggie", "baby >:D", "lemme", "sing", "you a", "lullaby", ">:D jkjk", "hmmm", "this", "might", "sound", "papaya-ey", "but i", "think", "you are", "really", "sweet!",
        "happy", "late", "valentines", "day!", "<3", "also...", "your gifs", "are more", "cute >:D"
    ];
    [hearts, stationary, constraints] = createHeartsAndConstraints(lst);
    world.addBody(stationary)
    for (var i = 0; i < hearts.length; i++) {
        world.addBody(hearts[i])
    }
    var cycles = constraints.length;
    var starting = true;
    var i = -1
    function nextWord() {
        var nextI = (i + 1) % cycles;
        if (!starting) {
            for (var j = 0; j < constraints[i].length; j++) {
                world.removeConstraint(constraints[i][j]);
            }
        }
        starting = false;
        for (var j = 0; j < constraints[nextI].length; j++) {
            world.addConstraint(constraints[nextI][j]);
        }
        i = nextI;
        // setTimeout(nextWord, 4000)
    }
    var mouseThing = new f2.CircleBody({
        radius: 1.1,
        mass: 1,
        inertia: Infinity
    })
    mouseThing.setCustomDisplayPlacement(function(ctx, placement) {
        var r = 0.5
        var label = "m"
        var displacementY = 0.31
        ctx.save();
        ctx.translate(placement.position.x, placement.position.y);
        ctx.rotate(placement.angle);

        var grd = ctx.createLinearGradient(0, 1 + displacementY, 0, -0.5 + displacementY - 0.7071067812);
        grd.addColorStop(0, redScale(r + 0.2 * (1 - r)));
        grd.addColorStop(1, redScale(r + 0.5 * (1 - r)));

        // Fill with gradient
        ctx.fillStyle = grd;

        ctx.strokeStyle = redScale(r)
        ctx.lineWidth = 0.3
        // Fill with gradient


        ctx.beginPath();
        ctx.moveTo(-1, displacementY);
        ctx.lineTo(0, 1 + displacementY);
        ctx.lineTo(1, displacementY);
        ctx.arc(0.5, -0.5 + displacementY, 0.7071067812, Math.PI / 4, -3 * Math.PI / 4, true);
        ctx.arc(-0.5, -0.5 + displacementY, 0.7071067812, -Math.PI / 4, -5 * Math.PI / 4, true);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = redScale(r);
        ctx.font = "1px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, 0, 0.15)

        ctx.restore();
    })
    var displacements = [new f2.Vec2(200, 0), new f2.Vec2(-200, 0), new f2.Vec2(0, 200), new f2.Vec2(0, -200)]
    var mouseConstraints = [];
    displacements.forEach(a => mouseConstraints.push(new f2.Constraint({
        body1: mouseThing,
        r1: new f2.Vec2(0, 0),
        body2: stationary,
        r2: a,
        kconstant: 500
    })))
    world.addBody(mouseThing)
    for (var j = 0; j < mouseConstraints.length; j++) {
        world.addConstraint(mouseConstraints[j])
    }
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect(), // abs. size of element
            scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
            scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

        return {
            x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
            y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
        }
    }
    function moveMouseThing(e) {
        e = getMousePos(canvas, e);
        var transformedPosition = new f2.Vec2((e.x - canvas.width / 2) / scale, (e.y - canvas.height / 2) / scale);
        for (var j = 0; j < mouseConstraints.length; j++) {
            mouseConstraints[j].r2 = transformedPosition.add(displacements[j])
        }
    }
    document.body.addEventListener("click", nextWord);
    document.body.addEventListener("mousemove", moveMouseThing);
    nextWord();

}
start();
