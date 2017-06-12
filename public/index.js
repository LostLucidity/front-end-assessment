document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function() {
        createArray(xhr);
    })

    xhr.open("GET", "http://localhost:8080/data", true);
    xhr.send("");
}, false);



function createArray(xhr) {
    if (xhr.readyState < 4) {
        return;
    }

    if (xhr.status !== 200) {
        alert("Error status " + xhr.status + " returned");
    }

    console.log(xhr, xhr.responseText);
    var parseString = JSON.parse(xhr.response);
    var dataString = parseString.data;
    var splitStringArray = dataString.split(",");
    var uniqueStringArray = filterDuplicates(splitStringArray);
    var sortStringArray = uniqueStringArray.sort(sortNumber);
    var objectArray = [];
    uniqueStringArray.forEach(function(element) {
        var object = {
            number: parseInt(element),
            toString: function () {
                if (this.number % 3 === 0) {
                    return "Wrecking";
                } else if (this.number % 5 === 0 ) {
                    return "Ball";
                } else {
                    return this.number.toString();
                }
            }
        }
        objectArray.push(object);
    }, this);
    console.log(objectArray);
    listObjectArray(objectArray);
}

function filterDuplicates(splitStringArray) {
    var seenArray = {};
    return splitStringArray.filter(function(x) {
        if (seenArray[x]) {
            return;
        }
        seenArray[x] = true;
        return x;
    })
}

function sortNumber(a, b) {
    return a - b;
}

function listObjectArray(objectArray) {
    var listData = document.getElementById("list-data");
    var selectData = document.getElementById("select-data");

    objectArray.forEach(function(object) {

        var string = object.toString();
        var stringNumber = object.number.toString();

        var newListItem = document.createElement("li");
        var newOptionItem = document.createElement("option");

        newListItem.appendChild(document.createTextNode(string));
        newOptionItem.appendChild(document.createTextNode(string));

        newListItem.className = stringNumber;
        newOptionItem.value = stringNumber;

        listData.appendChild(newListItem);
        selectData.appendChild(newOptionItem);
        
    })

    addEventListeners(listData, selectData);
    
}

function addEventListeners(listData, selectData) {
    var listText = "";

    listData.addEventListener("click", function(event) {
        if (event.target.nodeName === "LI") {
            event.target.innerHTML += " clicked!"
        } ;
    });    

    selectData.addEventListener("change", function(event) {
        if (listText.className){
            listText.className = listText.className.slice(0, -3);
        }

        listText = document.getElementsByClassName(this.value)[0];
        listText.className = this.value + " red";
    });
}