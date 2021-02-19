import printToDOM from './printToDOM';

const buildABear = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    domString += `<div class='card my-2' style='width: 18rem;' id=${i}>
                    <div class='img-container' style='background-image: url('${arr.imageUrl}' id='imageUrl');'></div>
                    <div class='card-body'>
                      <p class='card-text' id='name'>${arr.name}</p>
                      <p class='card-text' id='fishCounter'>${arr.fishCounter}</p>
                      <div class='card-footer' id='event-buttons'>                                                                           
                      <button type='button' class='btn-attempt' id='attempt-${i}'>Attempts:</button>
                      <button type='button' class='btn-catch' id='catch-${i}'>Catches:</button>
                      </div>
                      <div id='total-events-${i}'></div>
                    </div>
                  </div>`;
  }

  printToDOM('#bear-cards', domString);
};

export default buildABear;
