const hourNumWords = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"]
const minNumWords = ["o'clock", "oh one", "oh two", "oh three", "oh four", "oh five", "oh six", "oh seven", "oh eight", "oh nine",
                     "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", 
                     "twenty", "thirty", "forty", "fifty"]

function timeWord(time) {
    let word = ""
    const t = time.split(":")
    const hour = parseInt(t[0])
    const min = parseInt(t[1])

    if (!Number.isInteger(hour) || !Number.isInteger(min)) {
        return "Please enter a valid time."
    }

    if (hour === 0) {
        if (min === 0) {
            return "midnight"
        }
    }
    if (hour === 12) {
        if (min === 0) {
            return "noon"
        }
    }
    word = word.concat(hourNumWords[hour % 12])
    if (min >= 0 && min <= 20) {
        word = word.concat(" ", minNumWords[min])
    }
    else if (min >= 21 && min <= 59) {
        if (min >= 21 && min <= 29) word = word.concat(" ", minNumWords[20], " ", hourNumWords[min % 20])
        else if (min >= 31 && min <= 39) word = word.concat(" ", minNumWords[21], " ", hourNumWords[min % 30])
        else if (min >= 41 && min <= 49) word = word.concat(" ", minNumWords[22], " ", hourNumWords[min % 40])
        else if (min >= 51 && min <= 59) word = word.concat(" ", minNumWords[23], " ", hourNumWords[min % 50])
        else if (min === 30) word = word.concat(" ", minNumWords[21])
        else if (min === 40) word = word.concat(" ", minNumWords[22])
        else if (min === 50) word = word.concat(" ", minNumWords[23])
    }

    if (hour >= 0 && hour < 12) {
        word = word.concat(" am")
    }
    else if (hour >= 12 && hour <= 23) {
        word = word.concat(" pm")
    }

    return word
}

module.exports = timeWord
