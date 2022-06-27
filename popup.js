
const ele = document.getElementById("btn")
ele.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "1" }, function (response) {
        console.log(response);
    });
});