const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const weekdays = {
    "monday" : "proably coding",
    "tuesday" : "still coding",
    "wednesday" : "coding I guess",
    "thrusday" : "writing code",
    "friday" : "coding then 🍺",
    "saturday" : "🍺🍺🍺",
    "sunday" : "😴"
}

readline.question('what day do you want to know about? (not case sensitive) \n' , inputDay => {
    var day = inputDay.toLowerCase()
    console.log(weekdays[day] ? weekdays[day] : 'pick a real day next time')
})
