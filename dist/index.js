"use strict";
function greetComedianSafety(name) {
    console.log('Hello World!');
    if (typeof name === "string") {
        console.log(`Announcing ${name.toUpperCase()}!`); // Ok
    }
    else {
        console.log("Well, I'm off.");
    }
}
greetComedianSafety("Ray White");
greetComedianSafety({});
