let keyVal = 100;
function test() {
    keyVal = 200;
    console.log('tested');
}

export {keyVal, test};
let ab = 10;
export default ab;
