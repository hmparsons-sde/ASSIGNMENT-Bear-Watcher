const bears = [
  {
    id: 'b1',
    name: 'Ice Queen',
    imageURL: '',
    trackedActivities: [
      {
        timestamp: '02/17/2021',
        type: 'Attempt'
      },
      {
        timestamp: '02/16/2021',
        type: 'Success'
      }
    ],
    fishCounter: 0
  },
  {
    id: 'b2',
    name: 'HBIC',
    imageURL: '',
    trackedActivities: [
      {
        timestamp: '02/16/2021',
        type: 'Attempt'
      },
      {
        timestamp: '02/11/2021',
        type: 'Success'
      }
    ],
    fishCounter: 0
  },
  {
    id: 'b3',
    name: 'Poseidon',
    imageURL: '',
    trackedActivities: [
      {
        timestamp: '02/18/2021',
        type: 'Attempt'
      },
      {
        timestamp: '02/16/2021',
        type: 'Success'
      }
    ],
    fishCounter: 0
  },
  {
    id: 'b4',
    name: 'Miss Congeniality',
    imageURL: '',
    trackedActivities: [
      {
        timestamp: '02/17/2021',
        type: 'Attempt'
      },
      {
        timestamp: '02/12/2021',
        type: 'Success'
      }
    ],
    fishCounter: 0
  },
  {
    id: 'b5',
    name: 'Sleeper Hit',
    imageURL: '',
    trackedActivities: [
      {
        timestamp: '02/17/2021',
        type: 'Attempt'
      },
      {
        timestamp: '02/16/2021',
        type: 'Success'
      }
    ],
    fishCounter: 0
  }
];

const newBear = (obj) => {
  bears.push(obj);
};

export default { bears, newBear };
