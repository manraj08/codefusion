
// Sample educational resources
const resources = [
    { title: "Open Educational Resources", description: "Access free educational materials online.", link: "https://www.oercommons.org/" },
    { title: "Digital Libraries", description: "Explore various academic and research materials.", link: "https://www.digital.library.upenn.edu/" },
    { title: "AI-Powered Learning Tools", description: "Utilize AI to enhance personalized learning.", link: "https://www.edutopia.org/article/ai-powered-learning-tools" },
    { title: "MDN Web Docs", description: "Comprehensive resources for web development.", link: "https://developer.mozilla.org" } // Added link
];

// Function to display resources
function displayResources() {
    const resourceList = document.getElementById('resource-list');
    resourceList.innerHTML = ""; // Clear previous content
    resources.forEach(resource => {
        const resourceItem = document.createElement('div');
        resourceItem.innerHTML = `<h3>${resource.title}</h3><p>${resource.description}</p><a href="${resource.link}" target="_blank">Learn More</a>`;
        resourceList.appendChild(resourceItem);
    });
}



// Discussion functionality
const discussionList = [];

function postDiscussion() {
    const discussionInput = document.getElementById('discussion-input');
    if (discussionInput.value.trim() !== "") {
        discussionList.push(discussionInput.value);
        discussionInput.value = "";
        displayDiscussion();
    }
}

function displayDiscussion() {
    const discussionListDiv = document.getElementById('discussion-list');
    discussionListDiv.innerHTML = "";
    discussionList.forEach(discussion => {
        const discussionItem = document.createElement('div');
        discussionItem.textContent = discussion;
        discussionListDiv.appendChild(discussionItem);
    });
}

// Initialize resources on page load
window.onload = displayResources;