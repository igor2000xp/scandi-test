// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import CheckoutProgressBar from './CheckoutProgressBar.component';

/** @namespace ScandiTest/Component/CheckoutProgressBar/Container */
export class CheckoutProgressBarContainer extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    containerFunctions = {
        // getData: this.getData.bind(this)
    };

    containerProps() {
        // isDisabled: this._getIsDisabled()
    }

    render() {
        return (
            <CheckoutProgressBar
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default CheckoutProgressBarContainer;
