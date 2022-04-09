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
    //aqua and cyan, fushcia and magenta are both duplicates
    const HTML_COLORS = ['aqua', 'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta ', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen', 'rebeccapurple'];
    return HTML_COLORS[Math.floor(Math.random() * HTML_COLORS.length)]
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
function color(){
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
    let s = Math.floor(Math.random() * MAX_ALPHA)+'%'
    let l = Math.floor(Math.random() * MAX_ALPHA)+'%'
    return colorCodeGen('hsl', [h,s,l])
}

/**
 * catches the hsla option
 * @returns 
 */
function hsla() {
    let h = Math.floor(Math.random() * MAX_COLOR_WHEEL)
    let s = Math.floor(Math.random() * MAX_ALPHA)+'%'
    let l = Math.floor(Math.random() * MAX_ALPHA)+'%'
    let a = Math.random().toFixed(3)
    return colorCodeGen('hsla', [h,s,l,a])
}

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

window.addEventListener('keydown',function(e){
    // console.log(e)
    if (e.code === 'Space' && !e.repeat){
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