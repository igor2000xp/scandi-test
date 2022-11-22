// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './CheckoutProgressBar.style';

/** @namespace ScandiTest/Component/CheckoutProgressBar/Component */
export class CheckoutProgressBarComponent extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        const count = this.props.quantitySteps;
        return (
            <div block="CheckoutProgressBar">
                { /* TODO: Implement render method */ }
                {this.props.stepNames.map((item, index) => {
                    return index < this.props.quantitySteps - 1 ?
                      <div block="CheckoutProgressBar-itemLeft">
                          <div block="leftLine" />
                          <div block="itemBlock">
                              <div block="itemNumber">{index + 1}</div>
                              <div key={item}>{item.split(' ')[0]}</div>
                          </div>
                      </div>
                      : <div block="CheckoutProgressBar-emptyLine" />;
                })}
            </div>
        );
    }
}

export default CheckoutProgressBarComponent;
