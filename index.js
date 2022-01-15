// Your Code Here

let prompt = [
    'You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it or continue on your path?',
    'You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.',
    'You live happily amongst the cats for the rest of your days.',
    'After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.',
    'You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?',
    'After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.',
    'After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.',
    'You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?',
    'The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:',
    'You and the dragon have an uplifting conversation about local politics and become lifelong friends.',
    'Quickly, you run back to the cave\'s entrance. Sheepish, you return home.',
    'After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?',
    'You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.',
    'You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.',
]

function start(){
    let answer  = window.prompt('Do you head left, or right?')
    if(answer === 'left'){
       goLeft()
    } else if(answer === 'right') {
        goRight()
    }
}

function goLeft(){
    let answer = window.prompt(prompt[0])
    if(answer === 'back'){
        start()
    } else if (answer === 'follow') {
        follow()
    } else if (answer === 'continue') {
        continuePath()
    }
}

function goRight(){
    let answer = window.prompt(prompt[7])
    if(answer === 'back'){
        start()
    } else if (answer === 'past') {
        past()
    } else if (answer === 'away') {
        away()
    }
}

function past() {
    let answer = window.prompt(prompt[8])
    if (answer === 'back') {
        goRight()
    } else if (answer === 'stay') {
        window.alert(prompt[9])
    } else if (answer === 'run') {
        window.alert(prompt[10])
    }
}

function away() {
    let answer = window.prompt(prompt[11])
    if (answer === 'back') {
        goRight()
    } else if (answer === 'draw') {
        window.alert(prompt[12])
    } else if (answer === 'pick') {
        window.alert(prompt[13])
    }
}

function follow() {
    let answer = window.prompt(prompt[1])
    if (answer === 'back') {
        goLeft()
    } else if(answer === 'stay') {
        window.alert(prompt[2])
    } else if (answer === 'spread') {
        window.alert(prompt[3])
    }
}

function continuePath() {
    let answer = window.prompt(prompt[4])
    if (answer === 'back') {
        goLeft()
    } else if (answer === 'ladder') {
        window.alert(prompt[5])
    } else if (answer === 'staircase') {
        window.alert(prompt[6])
    }
}


start()