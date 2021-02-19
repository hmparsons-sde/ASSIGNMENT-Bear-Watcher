const printToDOM = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

function onClick() {
  let clicks = 0;
  clicks += 1;
  document.getElementById('clicks').innerHTML = clicks;
}

const buildABear = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    domString += `<div class='card my-2' style='width: 18rem;' id=${i}>
                    <div class='card-body'>
                      <img src='${arr[i].imageURL}' style='height:250px;width:225px'>
                      <p class='card-text' id='name'>${arr[i].name}</p>
                      <div class='card-footer' id='event-buttons'>                                                                           
                      <button type='button' class='btn-attempt' id='attempt-${i}'>Attempt</button>
                      <button type='button' onClick=${onClick} id='catch-${i}'>Catch</button>
                      </div>
                      <p><a id='clicks'>0</a> Fish</p>
                    </div>
                  </div>`;
  }

  printToDOM('bear-cards', domString);
};

export default buildABear;
