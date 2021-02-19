const bears = [
  {
    id: '1',
    name: 'Ice Queen',
    imageURL: 'https://user-images.githubusercontent.com/67122062/108262446-90fd0c00-712a-11eb-93cb-27def7d430eb.png',
    fishCounter: 0
  },
  {
    id: '2',
    name: 'HBIC',
    imageURL: 'https://user-images.githubusercontent.com/67122062/108262456-935f6600-712a-11eb-8028-acfc05d21f02.png',
    fishCounter: 0
  },
  {
    id: '3',
    name: 'Poseidon',
    imageURL: 'https://user-images.githubusercontent.com/67122062/108262465-965a5680-712a-11eb-8706-3aa63f697f9a.png',
    fishCounter: 0
  },
  {
    id: '4',
    name: 'Miss Congeniality',
    imageURL: 'https://user-images.githubusercontent.com/67122062/108262477-99eddd80-712a-11eb-8a03-86b2a95e0866.png',
    fishCounter: 0
  },
  {
    id: '5',
    name: 'Sleeper Hit',
    imageURL: 'https://user-images.githubusercontent.com/67122062/108262492-9d816480-712a-11eb-9343-cf1bb3222385.png',
    fishCounter: 0
  }
];

const findBears = () => bears;

const newBear = (obj) => {
  bears.push(obj);
};

export default { bears, newBear, findBears };
