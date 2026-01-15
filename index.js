/* getting all the DOM (document) elements like the btn the button,adviceText the paragraph where the advice text will displace and the adviceId which is the span where the advice id number will display.
 */
const btn = document.getElementById("btn");
const adviceText = document.getElementById("adviceText");
const adviceId = document.getElementById("adviceId");

/*
declaring an async/await function. 
*/
async function getAdvice() {
  try {
    //sends a request to the advice API and wait for response.
    const response = await fetch("https://api.adviceslip.com/advice");

    //converts the response from json text(string) to a json object(object).
    const data = await response.json();

    //updates the advice text using the api response which is stored in the data, here we are accessing the advice, i.e why we ${have data.slip.advice}.
    adviceText.textContent = `"${data.slip.advice}"`;

    //updates the advice id as well.
    adviceId.textContent = data.slip.id;
  } catch (error) {
    //handles the error if there's any the program will not just crash,but the error is caught up immediately and shown on the advice text too.
    adviceText.textContent = "Failed to fetch advice";
  }
}

//when the button is clicked then the getAdvice functions runs that is why we have an eventListener of a click type attached to the btn.
btn.addEventListener("click", getAdvice);
