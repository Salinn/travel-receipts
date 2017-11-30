import faker from 'faker';

export const fetchAllRecipts = () => {
    let receipts = [];
    let randomPicture;
    for(let i = 0; i < 1000; i++){
        randomPicture = Math.floor(Math.random() * 6) + 1 ;
        receipts.push({
            id: i,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            amountSpent: faker.commerce.price(),
            chargeTo: faker.company.companyName(),
            date: moment(faker.date.past()).format('MMMM Do YYYY, h:mm a'),
            reason: faker.lorem.sentence(),
            photo: `https://s3.amazonaws.com/react-collapsing-table-photos/${randomPicture}.jpeg`,
        })
    }

    return { data: receipts };
}

export const fetchLastMonthsReceipts = () => {
  let receipts = []
  let randomPicture;
  const totalReceipts = faker.random.number({ max: 20 })
  for(let i = 0; i < totalReceipts; i++){
      randomPicture = Math.floor(Math.random() * 6) + 1 ;
      receipts.push({
          id: i,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          amountSpent: faker.commerce.price(),
          chargeTo: faker.company.companyName(),
          date: moment(faker.date.past()).format('MMMM Do YYYY, h:mm a'),
          reason: faker.lorem.sentence(),
          photo: `https://s3.amazonaws.com/react-collapsing-table-photos/${randomPicture}.jpeg`,
      })
  }

  return { data: receipts };
}
