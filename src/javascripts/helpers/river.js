const printToDOM = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildABear = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    domString += `<div class='card text-center p-2 m-2' style='width: 20rem;' id=${i}>
                    <div class='card-body'>
                      <img src='${arr[i].imageURL}' style='height:225px;width:225px;' class='rounded-circle pb-3'>
                      <h5 class='card-text font-weight-bold' id='name'>${arr[i].name}</h5>
                      <p><span id="displayCount">0</span> Fish</p>                                                                          
                      <button type='button' id='attempt-button'>Attempt 🎣</button>
                      <button type='submit' id='catch-button'>Catch 🐟</button>
                      </div>
                    </div>
                  </div>`;
  }

  printToDOM('bear-cards', domString);
};

export default buildABear;
