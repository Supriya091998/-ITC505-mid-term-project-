// Updated adventurous story object
const story = {
    start: {
        text: "You wake up stranded on a mysterious island after your plane crashes. The jungle is dense, and the air is humid. What will you do first?",
        choices: ["Explore the Jungle", "Search for the Plane Wreckage"],
        consequence: ["exploreJungle", "searchWreckage"],
        image: "image1.png",
    },
    exploreJungle: {
        text: "As you venture deeper into the jungle, you hear strange sounds. Do you follow the sound or continue walking?",
        choices: ["Follow the Sound", "Continue Walking"],
        consequence: ["followSound", "continueWalking"],
        image: "image2.png",
    },
    searchWreckage: {
        text: "You find the plane's wreckage, but it's scattered. Do you search for supplies or call for help?",
        choices: ["Search for Supplies", "Call for Help"],
        consequence: ["searchSupplies", "callForHelp"],
        image: "image3.png",
    },
    followSound: {
        text: "You find a hidden temple guarded by strange creatures. Do you enter the temple or run away?",
        choices: ["Enter the Temple", "Run Away"],
        consequence: ["enterTemple", "runAway"],
        image: "image4.png",
    },
    continueWalking: {
        text: "You find a river leading to a waterfall. Do you follow the river upstream or downstream?",
        choices: ["Follow Upstream", "Follow Downstream"],
        consequence: ["followUpstream", "followDownstream"],
        image: "image5.png",
    },
    searchSupplies: {
        text: "You find a bag full of water and food, but also some strange maps. Do you study the maps or continue searching?",
        choices: ["Study the Maps", "Continue Searching"],
        consequence: ["studyMaps", "continueSearching"],
        image: "image6.png",
    },
    callForHelp: {
        text: "You shout for help, but no one responds. You see a figure in the distance. Do you approach the figure or stay hidden?",
        choices: ["Approach the Figure", "Stay Hidden"],
        consequence: ["approachFigure", "stayHidden"],
        image: "image7.png",
    },
    enterTemple: {
        text: "Inside the temple, you find an ancient artifact. Do you take it or leave it?",
        choices: ["Take the Artifact", "Leave the Artifact"],
        consequence: ["takeArtifact", "leaveArtifact"],
        image: "image8.png",
    },
    runAway: {
        text: "The creatures catch up with you, and you narrowly escape, but you get injured. The end.",
        choices: [],
        consequence: [],
        image: "image9.png",
    },
    followUpstream: {
        text: "You discover a hidden cave with strange markings. Do you enter the cave or keep walking?",
        choices: ["Enter the Cave", "Keep Walking"],
        consequence: ["enterCave", "keepWalking"],
        image: "image10.png",
    },
    followDownstream: {
        text: "You find an abandoned village. Do you investigate or leave the area?",
        choices: ["Investigate the Village", "Leave the Village"],
        consequence: ["investigateVillage", "leaveVillage"],
        image: "image11.png",
    },
    studyMaps: {
        text: "The maps show a path leading to a treasure. Do you follow the path or explore another area?",
        choices: ["Follow the Path", "Explore Another Area"],
        consequence: ["followPath", "exploreArea"],
        image: "image12.png",
    },
    continueSearching: {
        text: "You find a hidden cave but it’s filled with dangerous wildlife. Do you enter or leave?",
        choices: ["Enter the Cave", "Leave the Cave"],
        consequence: ["enterDangerousCave", "leaveDangerousCave"],
        image: "image13.png",
    },
    approachFigure: {
        text: "The figure turns out to be another survivor who helps you. Together, you escape the island. The end.",
        choices: [],
        consequence: [],
        image: "image14.png",
    },
    stayHidden: {
        text: "The figure turns out to be a hostile person. You’re caught and taken captive. The end.",
        choices: [],
        consequence: [],
        image: "image15.png",
    },
    takeArtifact: {
        text: "Taking the artifact unleashes a curse. You’re trapped on the island forever. The end.",
        choices: [],
        consequence: [],
        image: "image16.png",
    },
    leaveArtifact: {
        text: "You leave the artifact, but the temple collapses, and you narrowly escape. The end.",
        choices: [],
        consequence: [],
        image: "image17.png",
    },
    enterCave: {
        text: "Inside the cave, you find an underground city. Do you explore it or leave?",
        choices: ["Explore the City", "Leave the City"],
        consequence: ["exploreCity", "leaveCity"],
        image: "image18.png",
    },
    keepWalking: {
        text: "You find a rescue team that was sent to find you. The end.",
        choices: [],
        consequence: [],
        image: "image19.png",
    },
    investigateVillage: {
        text: "The village is abandoned, but you find clues that reveal the island’s dark past. The end.",
        choices: [],
        consequence: [],
        image: "image20.png",
    },
    leaveVillage: {
        text: "You leave the village and wander until you find a way off the island. The end.",
        choices: [],
        consequence: [],
        image: "image21.png",
    },
    followPath: {
        text: "You follow the path and find hidden treasure, but you’re trapped by a rival treasure hunter. The end.",
        choices: [],
        consequence: [],
        image: "image22.png",
    },
    exploreArea: {
        text: "You explore the jungle more and find an ancient ruin with mysterious inscriptions. The end.",
        choices: [],
        consequence: [],
        image: "image23.webp",
    },
    enterDangerousCave: {
        text: "You venture deeper into the cave, only to be overwhelmed by dangerous creatures. The end.",
        choices: [],
        consequence: [],
        image: "image25.jpg",
    },
    leaveDangerousCave: {
        text: "You wisely decide to leave the cave, but you’re lost in the jungle. The end.",
        choices: [],
        consequence: [],
        image: "image1.png",
    },
};


let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    const storyText = document.getElementById("story-text");
    const choicesDiv = document.getElementById("choices");
    const storyImage = document.getElementById("story-image");

    storyText.textContent = stage.text;
    storyImage.src = stage.image;
    choicesDiv.innerHTML = "";

    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => {
            currentStage = stage.consequence[index];
            updatePage();
        };
        choicesDiv.appendChild(button);
    });

    if (stage.choices.length === 0) {
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart";
        restartButton.onclick = startGame;
        choicesDiv.appendChild(restartButton);
    }
}

startGame();