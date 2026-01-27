function greetComedianSafety(name: unknown) {
    console.log('Hello World!');
    if (typeof name === "string") {
        console.log(`Announcing ${name.toUpperCase()}!`); // Ok
    } else {
        console.log("Well, I'm off.");
    }
}
greetComedianSafety("Ry White");
greetComedianSafety({});