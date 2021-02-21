const printToDOM = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildABear = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    domString += `<div class='card text-center p-2 m-2' style='width: 20rem;' id=${arr[i].id}>
                    <div class='card-body'>
                      <img src='${arr[i].imageURL}' style='height:225px;width:225px;' class='rounded-circle pb-3'></img>
                      <h5 class='card-text font-weight-bold' id='name'>${arr[i].name}</h5>
                      <p id='fish-count'><span id="counter-number">${arr[i].count}</span> Fish</p>                                                                          
                      <button type='button' id='attempt-fish'>Attempt 🎣</button>
                      <button type='button' class='btn increase' id='increase-${arr[i].id}'>Catch 🐟</button>
                    </div>
                  </div>`;
  }

  printToDOM('bear-cards', domString);
};

export default buildABear;
