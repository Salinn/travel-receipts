import faker from 'faker';
import moment from 'moment';

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
            date: moment(faker.date.past()).format('MMMM Do YYYY'),
            reason: faker.lorem.sentence(),
            photo: `https://s3.amazonaws.com/react-collapsing-table-photos/${randomPicture}.jpeg`,
        })
    }

    return { data: receipts.sort(dynamicSort({ column: 'email'})) };
};

export const fetchLastMonthsReceipts = () => {
  let receipts = [];
  let randomPicture;
  const totalReceipts = faker.random.number({ min: 3, max: 20 });
  for(let i = 0; i < totalReceipts; i++){
      randomPicture = Math.floor(Math.random() * 6) + 1 ;
      receipts.push({
          id: i,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          amountSpent: faker.commerce.price(),
          chargeTo: faker.company.companyName(),
          date: moment(faker.date.past()).format('MMMM Do YYYY'),
          reason: faker.lorem.sentence(),
          photo: `https://s3.amazonaws.com/react-collapsing-table-photos/${randomPicture}.jpeg`,
      })
  }

  return { data: receipts.sort(dynamicSort({ column: 'email'})) };
};

const dynamicSort = ({ column }) => {
    return (a, b) => ((a[column] < b[column]) ? -1 : (a[column] > b[column]) ? 1 : 0);
};