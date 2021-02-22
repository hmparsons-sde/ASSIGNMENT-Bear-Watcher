const printToDOM = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildABear = (bears) => {
  let domString = '';
  bears.forEach((bear, i) => {
    const fishes = [];
    bear.catches.forEach((fish) => fishes.push(fish));
    domString += `<div class='card p-2 m-2' style='width: 20rem;' id='${i}'>
                  <div class='card-body'>
                    <img src='${bear.image}' style='height:225px;width:225px;' class='rounded-circle pb-3'></img>
                    <h5 class='card-text text-center font-weight-bold mt-3' id='name'>${bear.name}</h5>
                    <div class='btn-group mt-3'>
                      <button type='button' class='btn btn-outline-secondary text-center caught m-1' id='${i}'>
                        Catch 🐟
                      </button>
                      <button type='button' class='btn btn-outline-secondary text-center missed m-1' id='${i}'>
                        Attempt 🎣
                      </button>
                    </div>
                  </div>
                  <p class='card-text'>
                  <div class='timestamps mb-5'>
                      Catches: <br>${bear.catches.join('<br>')} <br>
                      Attempts: <br>${bear.misses.join('<br>')} <br>
                      Fish Count: ${fishes.length - 1}
                  </div>
                </p>
              </div>
            </div>`;
  });
  printToDOM('bear-cards', domString);
};

export default buildABear;
