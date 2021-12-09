document.querySelector('header > h1').textContent = 'Nonsense Story'
document.querySelector('header > h2').textContent = 'String Manipulation'

function tellStory() {
    nounsArray = document.querySelector('#nouns').value.toLowerCase().split(/\s+/)
        
    adjectivesArray = document.querySelector('#adjectives').value.toLowerCase().split(/\s+/)
        
    verbsArray = document.querySelector('#verbs').value.toLowerCase().split(/\s+/)

    const myStory = `There once was a  <span>${adjectivesArray[0]}</span> girl who used to take walks
    <span>${verbsArray[0]}</span> all day long. One day she went into the forest and ran into the
    <span>${nounsArray[0]}</span> who lived within the forest. They talked and the girl promised to come back 
    <span>${adjectivesArray[1]}</span>  to their meeting place. The next day she came back and there found a 
    <span>${adjectivesArray[2]}</span> creature lurking around. 
    In a desperate measure to run away the girl but being the clumsy person she is <span>${nounsArray[1]}</span>, <span>${nounsArray[2]}</span>, 
    and  <span>${nounsArray[3]}</span>. She got away eventually and <span>${verbsArray[1]}</span> all the way home and 
    <span>${verbsArray[2]}</span> to never go into the forest again.`

    let storyResults = document.querySelector('#story')
    storyResults.innerHTML = myStory
}