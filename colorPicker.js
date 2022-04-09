//HTML COLORS
const MAX_RGB = 256
const MAX_ALPHA = 101
const MAX_COLOR_WHEEL = 360


/**
 * returns a 
 * @param {number} len the returned length of the hex color code 
 * @returns {string} hex digits prefixed with # 
 */
function hexGen(len) {
    const HEXADECIMAL = 16;
    let colorPreview = ''

    // make 6 random numbers in hex
    for (let i = 0; i < len; i++) {
        colorPreview += Math.floor(Math.random() * HEXADECIMAL).toString(HEXADECIMAL)
    }

    // change background color
    // console.log(colorPreview);
    //change to string

    return '#' + colorPreview;
}

/**
 * catches the short hexidecimal event
 * @returns {string} 3 hex digits prefixed with #
 */
function hex3() {
    const HEX_SHORT = 3;
    return hexGen(HEX_SHORT);
}

/**
 * catches the long hexidcimal option
 * @returns {string} 6 hex digits prefixed with #
 */
function hex6() {
    const HEX_LONG = 6;
    return hexGen(HEX_LONG);
}

/**
 * catches the english color option
 * @returns {string} random selection from the list of colors taken 2022 apr 3
 */
function english() {
    //aqua and cyan, fushcia and magenta are both duplicates respectively
    const HTML_COLORS_OBJ = { "aliceblue": "F0F8FF", "antiquewhite": "FAEBD7", "aqua": "00FFFF", "aquamarine": "7FFFD4", "azure": "F0FFFF", "beige": "F5F5DC", "bisque": "FFE4C4", "black": "000000", "blanchedalmond": "FFEBCD", "blue": "0000FF", "blueviolet": "8A2BE2", "brown": "A52A2A", "burlywood": "DEB887", "cadetblue": "5F9EA0", "chartreuse": "7FFF00", "chocolate": "D2691E", "coral": "FF7F50", "cornflowerblue": "6495ED", "cornsilk": "FFF8DC", "crimson": "DC143C", "cyan": "00FFFF", "darkblue": "00008B", "darkcyan": "008B8B", "darkgoldenrod": "B8860B", "darkgray": "A9A9A9", "darkgreen": "006400", "darkgrey": "A9A9A9", "darkkhaki": "BDB76B", "darkmagenta": "8B008B", "darkolivegreen": "556B2F", "darkorange": "FF8C00", "darkorchid": "9932CC", "darkred": "8B0000", "darksalmon": "E9967A", "darkseagreen": "8FBC8F", "darkslateblue": "483D8B", "darkslategray": "2F4F4F", "darkslategrey": "2F4F4F", "darkturquoise": "00CED1", "darkviolet": "9400D3", "deeppink": "FF1493", "deepskyblue": "00BFFF", "dimgray": "696969", "dimgrey": "696969", "dodgerblue": "1E90FF", "firebrick": "B22222", "floralwhite": "FFFAF0", "forestgreen": "228B22", "fuchsia": "FF00FF", "gainsboro": "DCDCDC", "ghostwhite": "F8F8FF", "gold": "FFD700", "goldenrod": "DAA520", "gray": "808080", "green": "008000", "greenyellow": "ADFF2F", "grey": "808080", "honeydew": "F0FFF0", "hotpink": "FF69B4", "indianred": "CD5C5C", "indigo": "4B0082", "ivory": "FFFFF0", "khaki": "F0E68C", "lavender": "E6E6FA", "lavenderblush": "FFF0F5", "lawngreen": "7CFC00", "lemonchiffon": "FFFACD", "lightblue": "ADD8E6", "lightcoral": "F08080", "lightcyan": "E0FFFF", "lightgoldenrodyellow": "FAFAD2", "lightgray": "D3D3D3", "lightgreen": "90EE90", "lightgrey": "D3D3D3", "lightpink": "FFB6C1", "lightsalmon": "FFA07A", "lightseagreen": "20B2AA", "lightskyblue": "87CEFA", "lightslategray": "778899", "lightslategrey": "778899", "lightsteelblue": "B0C4DE", "lightyellow": "FFFFE0", "lime": "00FF00", "limegreen": "32CD32", "linen": "FAF0E6", "magenta": "FF00FF", "maroon": "800000", "mediumaquamarine": "66CDAA", "mediumblue": "0000CD", "mediumorchid": "BA55D3", "mediumpurple": "9370DB", "mediumseagreen": "3CB371", "mediumslateblue": "7B68EE", "mediumspringgreen": "00FA9A", "mediumturquoise": "48D1CC", "mediumvioletred": "C71585", "midnightblue": "191970", "mintcream": "F5FFFA", "mistyrose": "FFE4E1", "moccasin": "FFE4B5", "navajowhite": "FFDEAD", "navy": "000080", "oldlace": "FDF5E6", "olive": "808000", "olivedrab": "6B8E23", "orange": "FFA500", "orangered": "FF4500", "orchid": "DA70D6", "palegoldenrod": "EEE8AA", "palegreen": "98FB98", "paleturquoise": "AFEEEE", "palevioletred": "DB7093", "papayawhip": "FFEFD5", "peachpuff": "FFDAB9", "peru": "CD853F", "pink": "FFC0CB", "plum": "DDA0DD", "powderblue": "B0E0E6", "purple": "800080", "rebeccapurple": "663399", "red": "FF0000", "rosybrown": "BC8F8F", "royalblue": "4169E1", "saddlebrown": "8B4513", "salmon": "FA8072", "sandybrown": "F4A460", "seagreen": "2E8B57", "seashell": "FFF5EE", "sienna": "A0522D", "silver": "C0C0C0", "skyblue": "87CEEB", "slateblue": "6A5ACD", "slategray": "708090", "slategrey": "708090", "snow": "FFFAFA", "springgreen": "00FF7F", "steelblue": "4682B4", "tan": "D2B48C", "teal": "008080", "thistle": "D8BFD8", "tomato": "FF6347", "turquoise": "40E0D0", "violet": "EE82EE", "wheat": "F5DEB3", "white": "FFFFFF", "whitesmoke": "F5F5F5", "yellow": "FFFF00", "yellowgreen": "9ACD32" }
    const keys = Object.keys(HTML_COLORS_OBJ)
    let c  =keys.length * Math.random() << 0
    return `${keys[c]} /* #${HTML_COLORS_OBJ[keys[c]]} */`
}





/**
 * builds the string from the requested function
 * @param {function} f the function calling this function
 * @param {array} a the array of arguments
 * @returns {string} the color being returned
 */
function colorCodeGen(f, a) {
    return `${f}(${a[0]}, ${a[1]}, ${a[2]}${a[3] !== undefined ? ', ' + a[3] : ''})`
}

/**
 * catches the color function option
 * @returns {string} a color from the color function
 */
function colorFunction() {
    return `color(sRGB 0.7 0.9 0.6)`
}

/**
 * catches the rgb option
 * @returns 
 */
function rgb() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * MAX_RGB))
    }
    return colorCodeGen('rgb', rgb)
}

/**
 * catches the rgba option
 * @returns 
 */
function rgba() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * MAX_RGB))
    }
    d = Math.random().toFixed(3)
    rgb.push(d)
    return colorCodeGen('rgba', rgb)
}

/**
 * catches the hsl option
 * @returns 
 */
function hsl() {
    let h = Math.floor(Math.random() * MAX_COLOR_WHEEL)
    let s = Math.floor(Math.random() * MAX_ALPHA) + '%'
    let l = Math.floor(Math.random() * MAX_ALPHA) + '%'
    return colorCodeGen('hsl', [h, s, l])
}

/**
 * catches the hsla option
 * @returns 
 */
function hsla() {
    let h = Math.floor(Math.random() * MAX_COLOR_WHEEL)
    let s = Math.floor(Math.random() * MAX_ALPHA) + '%'
    let l = Math.floor(Math.random() * MAX_ALPHA) + '%'
    let a = Math.random().toFixed(3)
    return colorCodeGen('hsla', [h, s, l, a])
}

/**
 * catches the hwb option
 * @returns 
 */
function hwb() {
    let h = Math.floor(Math.random() * MAX_COLOR_WHEEL)
    let w = Math.floor(Math.random() * MAX_ALPHA)
    let b = Math.floor(Math.random() * MAX_ALPHA)
    let a = Math.random().toFixed(3)
    return `hwb(${h} ${w} ${b} / ${a})`
}

/**
 * catches the lcb option
 * @returns 
 */
function lch() {
    let a = (Math.random() * MAX_COLOR_WHEEL).toFixed(4)
    let b = (Math.random() * MAX_ALPHA).toFixed(4)
    let c = (Math.random() * MAX_ALPHA).toFixed(4)
    let d = (Math.random() * MAX_ALPHA).toFixed(2)
    return `lch(${a}% ${b} ${c} / ${d})`
}

/**
 * catches the lab option
 * @returns 
 */
function lab() {
    let a = (Math.random() * MAX_ALPHA).toFixed(4)
    let b = (Math.random() * MAX_ALPHA).toFixed(4)
    let c = (Math.random() * MAX_ALPHA).toFixed(4)
    let d = (Math.random() * MAX_ALPHA).toFixed(2)
    return `lab(${a}% ${b} ${c} / ${d})`
}

/**
 * catches the oklcb option
 * @returns 
 */
function oklch() {
    let a = (Math.random() * MAX_COLOR_WHEEL).toFixed(4)
    let b = (Math.random() * MAX_ALPHA).toFixed(4)
    let c = (Math.random() * MAX_ALPHA).toFixed(4)
    let d = (Math.random() * MAX_ALPHA).toFixed(2)
    return `oklch(${a}% ${b} ${c} / ${d})`
}

/**
 * catches the oklab option
 * @returns 
 */
function oklab() {
    let a = (Math.random() * MAX_ALPHA).toFixed(4)
    let b = (Math.random() * MAX_ALPHA).toFixed(4)
    let c = (Math.random() * MAX_ALPHA).toFixed(4)
    let d = (Math.random() * MAX_ALPHA).toFixed(2)
    return `oklab(${a}% ${b} ${c} / ${d})`
}


let colorF = hex6;

document.querySelector('#colorChange').addEventListener('click', function () {
    // console.log('button clicked')
    changeColor(colorF)
}
)

window.addEventListener('keydown', function (e) {
    // console.log(e)
    if (e.code === 'Space' && !e.repeat) {
        changeColor(colorF)
    }
})



function changeColor(colorFunc) {
    // console.log(colorFunc)
    let colorPreview = colorFunc();
    console.log(colorPreview)
    document.querySelector('#colorValue').textContent = colorPreview;
    document.body.style.backgroundColor = colorPreview;
}


// dynamically get all the radio buttons with a query selector
const radioInputs = document.querySelectorAll('[name="colorSpace"]');
// console.log(radioInputs)
for (let input of radioInputs) {
    // console.log(input.id, input)
    // console.log(input.id)
    input.addEventListener('click', function () {
        // console.log(`clicked ${input.id}`)
        colorF = window[input.id]
    })
}