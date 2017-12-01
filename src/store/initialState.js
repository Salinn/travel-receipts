import Image from '../components/Image';
import ExchangeLink from '../components/ExchangeLink';
import EmailIcon from '../components/EmailIcon';

export default {
  receipts: [],
  table: {
      columns: [
          { accessor: 'firstName', label: 'First Name', priorityLevel: 1, position: 1, minWidth: 150, },
          { accessor: 'lastName', label: 'Last Name', priorityLevel: 2, position: 2, minWidth: 150, },
          { accessor: 'email', label: 'Email', priorityLevel: 6, position: 3, minWidth: 150, CustomComponent: EmailIcon },
          { accessor: 'amountSpent', label: 'Total Spent', priorityLevel: 4, position: 4, minWidth: 150, CustomComponent: ExchangeLink },
          { accessor: 'chargeTo', label: 'Charged To', priorityLevel: 7, position: 5, minWidth: 150, },
          { accessor: 'date', label: 'Date', priorityLevel: 3, position: 6, minWidth: 150, },
          { accessor: 'reason', label: 'Reason for Purchase', priorityLevel: 8, position: 7, minWidth: 300, },
          { accessor: 'photo', label: 'Photo', priorityLevel: 5, position: 8, minWidth: 200, CustomComponent: Image },
      ],
      rows: [],
      defaultSortColumn: 'date',
  },
  imageModal: {
    isOpen: false,
    imageURL: '',
  }
}
