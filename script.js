const cricketFacts = [
    "Cricket is believed to have originated in the 16th century in southeast England.",
    "The first official international cricket match was played between the USA and Canada in 1844.",
    "The Ashes is a Test cricket series played between England and Australia, dating back to 1882.",
    "Sachin Tendulkar, an Indian cricketer, is the only player to have scored one hundred international centuries.",
    "Cricket is played in three formats: Test, One Day International (ODI), and Twenty20 (T20).",
    "The longest cricket match in history was played between England and South Africa in 1939, lasting for 12 days.",
    "The International Cricket Council (ICC) is the global governing body for cricket.",
    "Don Bradman, an Australian cricketer, is widely regarded as the greatest batsman of all time.",
    "The Cricket World Cup is held every four years and is one of the most watched sporting events in the world.",
    "The term 'hat-trick' in cricket refers to a bowler taking three wickets with consecutive deliveries."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * cricketFacts.length);
    document.getElementById('fact').textContent = cricketFacts[randomIndex];
});
