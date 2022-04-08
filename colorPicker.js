/**
 * Color can be displayed in 7 ways: 
 * english, https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color_keywords
 * #rgb, 
 * #rrggbb,
 * rgb(a,b,c), 
 * rgba(a,b,c,d), 
 * hsl(a,b,c),
 * hsla(a,b,c,d)
 * hwb
 * lch
 * lab coordinate system
 * this will control a website to change the background color
 * allow for user input
 * change the display style
 */



//HTML COLORS
//aqua and cyan, fushcia and magenta are both duplicates
const HTML_COLORS = ['aqua', 'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta ', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen', 'rebeccapurple'];
const HEXADECIMAL = 16;
const HEX_SHORT = 3;
const HEX_LONG = 6;
const MAX_RGB = 256
const MAX_ALPHA = 101
const MAX_COLOR_WHEEL = 360



/**
 * steps for completion
 * require the list of colors in english
 * require to generate random numbers in ranges
 * change display type
 * user interaction
 */

/**
 * 
 * @param {*} len requested length of a valid CSS hex color
 * @returns returns either a 3 or 6 
 */
function randomHexColor(len) {

    if (len !== HEX_SHORT && len !== HEX_LONG) {
        len = HEX_SHORT
    }

    //change to string
    let colorPreview = ''

    // make 6 random numbers in hex
    for (let i = 0; i < len; i++) {
        colorPreview += Math.floor(Math.random() * HEXADECIMAL).toString(HEXADECIMAL)
    }

    // change background color
    // console.log(colorPreview);
    return '#' + colorPreview;
}

function randomColorFromList(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function randomRGB() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * MAX_RGB))
    }
    [a, b, c] = rgb
    return `rgb(${a}, ${b}, ${c})`
}

function randomRGBA() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * MAX_RGB))
    }
    [a, b, c] = rgb
    d = Math.random().toFixed(3)
    return `rgba(${a}, ${b}, ${c}, ${d})`
}

function randomHSL(){
    let h = Math.floor(Math.random() * MAX_COLOR_WHEEL)
    let s =  Math.floor(Math.random() * MAX_ALPHA)
    let l =  Math.floor(Math.random() * MAX_ALPHA)
    return `hsl(${h}, ${s}%, ${l}%)`
}
function randomHSLA(){
    let h = Math.floor(Math.random() * MAX_COLOR_WHEEL)
    let s =  Math.floor(Math.random() * MAX_ALPHA)
    let l =  Math.floor(Math.random() * MAX_ALPHA)
    let a =  Math.random().toFixed(3)
    return `hsla(${h}, ${s}%, ${l}%, ${a})`
}

function randomHWB(){
    let h = Math.floor(Math.random() * MAX_COLOR_WHEEL)
    let w =  Math.floor(Math.random() * MAX_ALPHA)
    let b =  Math.floor(Math.random() * MAX_ALPHA)
    let a =  Math.random().toFixed(3)
    return `hwb(${h} ${w} ${b} / ${a})`
}

function randomLCH(){
    let a = (Math.random()*MAX_COLOR_WHEEL).toFixed(4)
    let b = (Math.random()*MAX_ALPHA).toFixed(4)
    let c = (Math.random()*MAX_ALPHA).toFixed(4)
    let d = (Math.random()*MAX_ALPHA).toFixed(2)
    return `lch(${a}% ${b} ${c} / ${d})`
}

function randomLAB(){
    let a = (Math.random()*MAX_ALPHA).toFixed(4)
    let b = (Math.random()*MAX_ALPHA).toFixed(4)
    let c = (Math.random()*MAX_ALPHA).toFixed(4)
    let d = (Math.random()*MAX_ALPHA).toFixed(2)
    return `lab(${a}% ${b} ${c} / ${d})`
}

function changeColor(colorObj) {
    console.log(colorObj)
    let colorPreview = colorObj.f(colorObj.p);
    console.log(colorPreview)
    document.querySelector('#colorValue').textContent = colorPreview;
    document.body.style.backgroundColor = colorPreview;
}

let colorF = { f: randomHexColor, p: HEX_LONG }

document.querySelector('#colorChange').addEventListener('click',
    function () {
        console.log('clicked')
        changeColor(colorF)
    }
    // 
)


document.querySelector('#longHex').addEventListener('click', () => colorF = { f: randomHexColor, p: HEX_LONG })
document.querySelector('#shortHex').addEventListener('click', () => colorF = { f: randomHexColor, p: HEX_SHORT })
document.querySelector('#english').addEventListener('click', () => colorF = { f: randomColorFromList, p: HTML_COLORS })
document.querySelector('#rgb').addEventListener('click', () => colorF = { f: randomRGB, p: null })
document.querySelector('#rgba').addEventListener('click', () => colorF = { f: randomRGBA, p: null })
document.querySelector('#hsl').addEventListener('click', () => colorF = { f: randomHSL, p: null })
document.querySelector('#hsla').addEventListener('click', () => colorF = { f: randomHSLA, p: null })
document.querySelector('#hwb').addEventListener('click', () => colorF = { f: randomHWB, p: null })
document.querySelector('#lch').addEventListener('click', () => colorF = { f: randomLCH, p: null })
document.querySelector('#lab').addEventListener('click', () => colorF = { f: randomLAB, p: null })


