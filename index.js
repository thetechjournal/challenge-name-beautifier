const textOutput = document.getElementById('output-text');
const textInput = document.getElementById('input-text');
const textSurprisePanel = document.getElementById('surprise-text');
const btnSurprise = document.getElementById('surpriseBtn')

const inputTextFont = document.getElementById('input-text-font');
const inputTextStyle = document.getElementById('input-text-style');
const inputTextSize = document.getElementById('input-text-size');

const pickerTextColor = document.getElementById("choose-text-color");
const pickerBackgroundColor = document.getElementById("choose-background-color");

pickerTextColor.addEventListener("change", (e) => {
    textOutput.style.color = pickerTextColor.value; 
})

pickerBackgroundColor.addEventListener("change", (e) => {
    textOutput.style.backgroundColor = pickerBackgroundColor.value; 
})

inputTextFont.addEventListener("change", (e) => {
    textOutput.style.fontFamily = inputTextFont.value;
})

inputTextStyle.addEventListener("change", (e) => {
    if(inputTextStyle.value === 'Bold'){
        textOutput.style.fontWeight = 'bold';
    }
    if(inputTextStyle.value === 'Normal'){
        textOutput.style.fontWeight = 'normal';
        textOutput.style.textDecoration = 'none';
    }
    if(inputTextStyle.value === 'Underline'){
        textOutput.style.textDecoration = 'underline';
    }
    if(inputTextStyle.value === 'Overline'){
        textOutput.style.textDecoration = 'overline';
    }
    textOutput.style.fontStyle = inputTextStyle.value;
})

inputTextSize.addEventListener("change", (e) => {
     if(inputTextSize.value === 'Medium'){
        textOutput.style.fontSize = '50px';
    }
    if(inputTextSize.value === 'Large'){
        textOutput.style.fontSize = '60px';
    }
    if(inputTextSize.value === 'Huge'){
        textOutput.style.fontSize = '70px';
    }
})

const fontsArr = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif",
        "Wide, Helvetica"
]

const fontStyle = [
        "Style",
        "Bold", 
        "Italic",
        "Underline",
        "Overline",
        "Normal"
]

const fontSize = [
    "Size",
    "Huge",
    "Large",
    "Medium"
]
 
let htmlFont = "";
let htmlFontStyle = ""
let htmlFontSize = ""
let htmlSurprise = ""

fontsArr.forEach((font => {
    htmlFont = htmlFont + `
            <option value="${font}">${font}</option>
            `
}))

function htmlSurpriseText() {
    const colors = ['#F7DDDD','#f3d6d6','#B9E6BE','#f7d0f5','#f5e7b9','#d8f0c5','#F4E6E6','#f5dbdb','#ede2ca','#f5dbbf','#d0f7dd','#b9f5ed','#d1cdf8','#f7ced4'];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    const color3 = colors[Math.floor(Math.random() * colors.length)];
    const color4 = colors[Math.floor(Math.random() * colors.length)];
    const emojis = ["❁","🌺","❀","💮","🏵","🌸","☯","😍","♡","🍩","🍬","💙","🌞","💍","🍪","❤","💗","🍑","💞", "🐯","🐎","🐖","🐷","🐏","🐑","🐐","🐫","🐘","🐭","🐁","🐀","🐹","🐰","🐇","🐿","🐻","🐨","🐼","🐾","🐔","🐓","🐣","🐤","🐥","🐦","🐧","🕊","🐸","🐢","🐳","🐋","🐬","🐟","🐠","🐡","🐙","🐚","🐌","🐞","🌌","🌠","🎉","🎊","🎈","💌","🎎","🎁","🎀","🕯","🔮","🛀","🎖","🏆","🏅","👑","💍","👶","👼","👸","👯","👒","👻"]
    const emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
    const emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
    const emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
    const emoji4 = emojis[Math.floor(Math.random() * emojis.length)];
    const emoji5 = emojis[Math.floor(Math.random() * emojis.length)];
    const emoji6 = emojis[Math.floor(Math.random() * emojis.length)];
    const flourish = ["•?((¯°·._.• ","ıllıllı ","¸,ø¤º°`°º¤ø,¸¸,ø¤º° ","°°°·.°·..·°¯°·._.· ","•´¯`•. ","×º°”˜`”°º× ","•]••´º´•» ","]|I{•------» ","§.•´¨'°÷•..× ","•°¯`•• ","(¯`·.¸¸.·´¯`·.¸¸.-> ","*´¯`*.¸¸.*´¯`* ","(¯`·.¸¸.-> °º ","°·.¸.·°¯°·.¸.·°¯°·.¸.-> ","•._.••´¯``•.¸¸.•` ","¸„.-•~¹°”ˆ˜¨ ","(¯´•._.• ","••¤(`×","•´¯`•» ","`•.,¸¸,.•´¯ ","¸,ø¤º°`°º¤ø,¸ ",".o0×X×0o. ",",-*'^'~*-.,_,.-*~ ","`•.¸¸.•´´¯`••._.• ","—(••÷","¤¸¸.•´¯`•¸¸.•..>> ","••.•´¯`•.•• ",".•°¤*(¯`★´¯)*¤° ","๑۞๑,¸¸,ø¤º°`°๑۩ ","-漫~*'¨¯¨'*·舞~ ","★·.·´¯`·.·★ ","▁ ▂ ▄ ▅ ▆ ▇ █ ","▀▄▀▄▀▄ ","▌│█║▌║▌║ "];
    const flourish1 = flourish[Math.floor(Math.random() * flourish.length)];
    const flourish2 = flourish[Math.floor(Math.random() * flourish.length)];
    htmlSurprise = `<p style='color:${color1};font-weight:bold;font-style:italic;font-size: 30px; font-family:Fantasy;'>${emoji1} ⋆ ${emoji2}  ${emoji3} ${textInput.value} ${emoji3} ⋆ ${emoji2}  ${emoji1}</p>
                    <p style='color:${color2};font-weight:bold;font-style:italic;font-size: 28px; font-family:Helvetica;'>${emoji4}${emoji5} ${textInput.value} ${emoji5}${emoji4}</p>
                    <p style='color:${color3};font-weight:bold;font-style:italic;font-size: 25px; font-family:Arial;'>${flourish1}   🎀  ${textInput.value}  🎀   ${flourish1}</p>
                    <p style='color:${color4};font-weight:bold;font-style:italic;font-size: 20px; font-family:Arial;'>${flourish2}   ${emoji6}  ${textInput.value}  ${emoji6}   ${flourish2}</p>`
    textSurprisePanel.innerHTML= htmlSurprise;
}

fontStyle.forEach(style => {
    htmlFontStyle = htmlFontStyle + `
    <option value="${style}">${style}</option>
    `
})

fontSize.forEach(size => {
    htmlFontSize = htmlFontSize + `
    <option value="${size}">${size}</option>
    `
})

inputTextFont.innerHTML = htmlFont;
inputTextStyle.innerHTML = htmlFontStyle;
inputTextSize.innerHTML = htmlFontSize;

btnSurprise.addEventListener ('click', () => {
    if(!textInput.value){
        textInput.value = 'Pumpkin'
    }
    htmlSurpriseText();
    textSurprisePanel.textContent= htmlSurprise;
    textSurprisePanel.innerHTML = htmlSurprise;
    btnSurprise.textContent = 'Surprise Me Again 🤪'
})

textInput.addEventListener('keyup', () => {
    textOutput.innerText = textInput.value;
})

textInput.addEventListener('change', () => {
    htmlSurpriseText();
})

htmlSurpriseText();
