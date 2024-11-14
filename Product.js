// Constructor function for iPhone3
function iPhone3(ASIN, color, display, camera, bluetooth) {
    // Initializing properties
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
}

// Adding methods to the iPhone3 prototype
iPhone3.prototype.dial = function() {
    return "tring.. tring...";
};

iPhone3.prototype.sendMessage = function() {
    return "Sending message...";
};

iPhone3.prototype.cameraClick = function() {
    return "Camera clicked";
};

iPhone3.prototype.connectBluetooth = function() {
    return "Bluetooth connected successfully...";
};

// Creating an empty object and applying iPhone3 to it with .call()
let i3 = {};
iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");

// Adding the methods to i3 using Object.setPrototypeOf()
Object.setPrototypeOf(i3, iPhone3.prototype);

// Accessing properties
console.log(i3.ASIN);           // Output: "B09X67JBQV"
console.log(i3.color);          // Output: "Gray"
console.log(i3.display);        // Output: 7.8
console.log(i3.camera);         // Output: "2.0 MP"
console.log(i3.bluetooth);      // Output: "Bluetooth 5.1"

// Calling methods
console.log(i3.dial());                // Output: "tring.. tring..."
console.log(i3.sendMessage());         // Output: "Sending message..."
console.log(i3.cameraClick());         // Output: "Camera clicked"
console.log(i3.connectBluetooth());    // Output: "Bluetooth connected successfully..."