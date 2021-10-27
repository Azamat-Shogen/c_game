export const selectRowUtils = (arr, num) => {

    if(num === 1){
            arr.map( (el, i) => {
            el.selected = i < 12;
            return el
        })
    }
    else if(num === 2){
        arr.map( (el, i) => {
            el.selected = i >= 12 && i < 24;
            return el
        })
    }
    else {
        arr.map( (el, i) => {
            el.selected = i >= 24 && i < 36;
            return el
        })
    }
    return arr
}

function getSelectedValue(arr){
    return arr.every(el => el.selected === true)
}

export const mixCardsUtils = (arr) => {
    const first = arr.slice(0, 12)
    const second = arr.slice(12, 24)
    const third = arr.slice(24)

    let temp = []

    if(getSelectedValue(first)) {
        second.forEach(el => temp.push(el))
        first.forEach(el => temp.push(el))
        third.forEach(el => temp.push(el))
    }
    else if(getSelectedValue(second)){
        first.forEach(el => temp.push(el))
        second.forEach(el => temp.push(el))
        third.forEach(el => temp.push(el))
    }
    else{
        first.forEach(el => temp.push(el))
        third.forEach(el => temp.push(el))
        second.forEach(el => temp.push(el))
    }

    let results = []

    for(let i = 0; i < 34; i+=3){
        results.push(temp[i])
    }
    for(let i = 1; i < 35; i+=3){
        results.push(temp[i])
    }
    for(let i = 2; i < 36; i+=3){
        results.push(temp[i])
    }

    return results.map(el => {
        return {...el, selected: false}
    })
}

export const instructions = [
    "Hello adventurer! Lets play a game. " +
    "Please select a card and click on the " +
    "corresponding row number your card is in ...",
    "Row 1 selected. Click on Shuffle Cards ...",
    "Row 2 selected. Click on Shuffle Cards ...",
    "Row 3 selected. Click on Shuffle Cards ...",
    "Select the row number again please ...",
    "I found your card! Click on Reveal Card to see it ...",
    "Is this your card ?",
    "Here is your card! Thanks for playing adventurer! " +
    "Click Start if you want to play again",
    "Thanks for playing adventurer! Click Start if you want to play again"
]














