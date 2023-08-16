function displayTitleText() {
    console.log('\u001b[32m', `
        WELCOME TO THE
       EMPLOYEE TRACKER
    `)
};

function displayExitText() {
    console.log('\u001b[32m', `\n
        LOGGED OFF! GOODBYE!
    `);
}; 

module.exports = { displayTitleText, displayExitText };