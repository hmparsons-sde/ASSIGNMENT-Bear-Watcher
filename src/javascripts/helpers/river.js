const bears = [
  {
    id: '1',
    name: 'Ice Queen',
    imageURL: 'https://i2.wp.com/churchillwild.com/wp-content/uploads/2019/03/janet-the-polar-bear-nanuk-polar-bear-lodge-george-turner-photo.jpg',
  },
  {
    id: '2',
    name: 'HBIC',
    imageURL: 'https://i.pinimg.com/736x/31/86/32/318632830994e5fca3840f031c4d202e.jpg',
  },
  {
    id: '3',
    name: 'Poseidon',
    imageURL: 'https://i.pinimg.com/originals/c7/68/1e/c7681ea82214ea4ddbd0bd4f50ffae60.jpg',
  },
  {
    id: '4',
    name: 'Miss Congeniality',
    imageURL: 'https://i.pinimg.com/736x/d5/be/61/d5be61165d3e2940e08a9fb7a9c5912e.jpg',
  },
  {
    id: '5',
    name: 'Sleeper Hit',
    imageURL: 'https://i.pinimg.com/originals/dc/65/92/dc6592a1b3cc8fba23b682f2dc0cd908.jpg',
  }
];

const printToDOM = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildABear = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    domString += `<div class='card my-2' style='width: 18rem;' id=${i}>
                    <div class='card-body'>
                      <img src='${arr[i].imageURL}' style='height:250px;width:225px'>
                      <p class='card-text' id='name'>${arr[i].name}</p>
                      <div class='card-footer' id='event-buttons'>                                                                           
                      <button type='button' class='btn-attempt' id='attempt-${i}'>Attempt</button>
                      <button type='button' class='btn-catch' id='catch-${i}'>Catch</button>
                      </div>
                      <div id='total-events-${i}'></div>
                    </div>
                  </div>`;
  }

  printToDOM('#bear-cards', domString);
};

export default { bears, buildABear };
