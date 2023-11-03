function createP(msg) {
    let para = document.createElement('p')
    para.innerHTML = msg
    document.body.append(para)
}

function createElement(tag, content) {
    let item = document.createElement(tag)
    if (content !== undefined) {
        item.innerHTML = content
    }
    document.body.append(item)
    return item
}

function setHTML(item, msg) {
    item.innerHTML = msg
}

createElement('h2', "Filter by Practice Location")


stateNames = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]

statesDiv = document.createElement("div");
statesDiv.id = "statesDiv"; // Set the ID for the container


for (let i = 0; i < stateNames.length; ++i) {
    // Create the div
    let div =  document.createElement("div");

    // Create the label element
    var label = document.createElement('label');
    var button = document.createElement("button");
    button.textContent = stateNames[i]

    button.className = "off";  // Set initial state to "off"

    // Use an IIFE to ensure each button has its own event listener
    (function(currentButton) {
        currentButton.addEventListener('click', function() {
            if (currentButton.classList.contains('off')) {
                currentButton.classList.remove('off');
                currentButton.classList.add('on');
            } else {
                currentButton.classList.remove('on');
                currentButton.classList.add('off');
            }
        });
    })(button);

    div.appendChild(button)
    statesDiv.appendChild(div);
    document.body.appendChild(statesDiv);
}


function adjustStateLayout() {
    const itemCount = statesDiv.children.length;

    let maxWidth = 0
    for (let i = 0; i < stateNames.length; ++i) {
        // Calculate width of a single item
        const singleItem = statesDiv.children[i];
        const style = window.getComputedStyle(singleItem);
        const itemWidth = parseFloat(style.width);
        maxWidth = Math.max(maxWidth, itemWidth);
    }
    const containerWidth = statesDiv.clientWidth;
    const maxColumns = Math.floor(containerWidth / maxWidth);
    const numRows = Math.ceil(itemCount / maxColumns);
    statesDiv.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
}

document.addEventListener("DOMContentLoaded", adjustStateLayout)

window.addEventListener("resize", adjustStateLayout)


// for (let i = 0; i < stateNames.length; ++i) {
//     // Create the div
//     let div =  document.createElement("div");

//     // Create the label element
//     var label = document.createElement('label');

//     // Create the checkbox input element
//     var checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.id = 'checkbox_' + stateNames[i]; // Each checkbox should have a unique ID

//     // Add the checkbox to the label
//     label.appendChild(checkbox);

//     // Create a text node and append it to the label
//     var description = document.createTextNode(stateNames[i]);
//     label.appendChild(description);

//     div.appendChild(label)

//     // Append the label element to the statesDiv container
//     statesDiv.appendChild(div);
//     document.body.appendChild(statesDiv);
// }


