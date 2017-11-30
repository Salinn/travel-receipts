//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReceiptActions from '../actions/ReceiptActions';
//Components
import App from '../components/App';

export class ReceiptsScreen extends Component {
    fetchAllReceipts = () => {
        this.props.actions.fetchAllReceipts();
    }

    fetchLastMonthsReceipts = () => {
        this.props.actions.fetchLastMonthsReceipts();
    }

    clickedImage = ({ imageURL }) => {
        this.props.actions.clickedImage({ imageURL });
    }

    render() {
        const { receipts, columns, imageModal } = this.props;
        const tableCallbacks = { photo: this.clickedImage }
        return (
            <App receipts={ receipts }
                 columns={ columns }
                 imageModal={ imageModal }
                 toggleModal={ this.clickedImage }
                 tableCallbacks={ tableCallbacks }
                 fetchAllReceipts={ this.fetchAllReceipts }
                 fetchLastMonthsReceipts={ this.fetchLastMonthsReceipts }/>
        );
    }
}

ReceiptsScreen.propTypes = {};

function mapStateToProps(state) {
    return {
        receipts: state.receipts,
        columns: state.table.columns,
        imageModal: state.imageModal,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ReceiptActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsScreen)
