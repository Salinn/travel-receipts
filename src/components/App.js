import React from 'react';
import ReactCollapsingTable from 'react-collapsing-table';
import PopUpAlert from './PopUpAlert';
import ImageModal from './ImageModal';
import { Row, Col } from 'reactstrap';

export const App = ({ receipts, columns, imageModal, toggleModal, tableCallbacks, fetchAllReceipts, fetchLastMonthsReceipts }) => {
    return (
      <Row>
        <Col sm={{ size: 10, offset: 1 }}>
          { receipts.length > 0 && <PopUpAlert totalResults={ receipts.length } />}
          <h1>Table of Receipts</h1>
          <button onClick={ fetchAllReceipts }>All Receipts</button>
          <button onClick={ fetchLastMonthsReceipts }>Last Months Receipts</button>
          <ReactCollapsingTable columns={ columns }
                                rows={ receipts }
                                rowSize={ 5 }
                                column='email'
                                callbacks={ tableCallbacks }
                                showSearch={ true }
                                showPagination={ true } />
          <ImageModal isOpen={ imageModal.isOpen }
                      toggle={ toggleModal }
                      imageURL={ imageModal.imageURL } />
        </Col>
      </Row>
    );
}

export default App;
