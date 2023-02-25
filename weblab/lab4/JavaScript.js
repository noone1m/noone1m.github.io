const beethovenMusic = [
    ["Symphony No. 5 in C minor", "Ludwig van Beethoven", "31:30", "Classical"],
    ["Moonlight Sonata", "Ludwig van Beethoven", "15:00", "Classical"],
    ["Fidelio", "Ludwig van Beethoven", "2:30:00", "Opera"],
    ["Piano Concerto No. 5 in E-flat major", "Ludwig van Beethoven", "38:00", "Classical"],
    ["Violin Concerto in D major", "Ludwig van Beethoven", "43:00", "Classical"],
    ["Symphony No. 9 in D minor", "Ludwig van Beethoven", "1:05:00", "Classical"]
];


let totalDuration = 0;
let classicalCount = 0;
let operaCount = 0;
for (let i = 0; i < beethovenMusic.length; i++) {
    totalDuration += convertToSeconds(beethovenMusic[i][2]);
    if (beethovenMusic[i][3] === "Classical") {
        classicalCount++;
    } else if (beethovenMusic[i][3] === "Opera") {
        operaCount++;
    }
}
let averageDuration = convertToTime(totalDuration / beethovenMusic.length);
let classicalPercentage = (classicalCount / beethovenMusic.length) * 100;
let operaPercentage = (operaCount / beethovenMusic.length) * 100;


const beethoven = {
    firstName: "Ludwig",
    lastName: "van Beethoven",
    dateOfBirth: "17 December 1770",
    died: "26 March 1827 (aged 56)"
};

function convertToSeconds(duration) {
    let parts = duration.split(":");
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function convertToTime(seconds) {
    let minutes = Math.floor(seconds / 100);
    let secondsRemainder = seconds % 60;
    return `${minutes}:${secondsRemainder.toString().padStart(2, "0")}`;
}

document.write(`<h1>${beethoven.firstName} ${beethoven.lastName}</h1>`);
document.write(`<p>Date of birth: ${beethoven.dateOfBirth}</p>`);
document.write(`<p>Died: ${beethoven.died}</p>`);
document.write(`<h2>Beethoven's music:</h2>`);
document.write(`<ul>`);
for (let i = 0; i < beethovenMusic.length; i++) {
    document.write(`<li>${beethovenMusic[i][0]} (${beethovenMusic[i][2]})</li>`);
}
document.write(`</ul>`);
document.write(`<p>Average duration: ${averageDuration}</p>`);
document.write(`<p>Classical music percentage: ${classicalPercentage.toFixed(2)}%</p>`);
document.write(`<p>Opera percentage: ${operaPercentage.toFixed(2)}%</p>`);