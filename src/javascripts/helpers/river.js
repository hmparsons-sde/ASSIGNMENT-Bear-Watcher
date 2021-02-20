const printToDOM = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildABear = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    domString += `<div class='card text-center' style='width: 18rem;' id=${i}>
                    <div class='card-body'>
                      <img src='${arr[i].imageURL}' style='height:200px;width:210px;' class='rounded-circle pb-3'>
                      <h5 class='card-text vertical-center' id='name'>${arr[i].name}</h5>
                      <div class='card-footer' id='event-buttons'>                                                                           
                      <button type='button' class='btn-attempt' id='attempt-${i}'>Attempt</button>
                      <button type='button' class='btn-catch' id='catch-${i}'>Catch</button>
                      </div>
                    </div>
                  </div>`;
  }

  printToDOM('bear-cards', domString);
};

export default buildABear;
