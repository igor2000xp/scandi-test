// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './CheckoutProgressBar.style';

/** @namespace ScandiTest/Component/CheckoutProgressBar/Component */
export class CheckoutProgressBarComponent extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        const activeLastBlock = this.props.stepNames.length === this.props.activeStepIndex + 1
          ? 'active'
          : '';
        return (
            <div block="CheckoutProgressBar">
                { /* TODO: Implement render method */ }
                {this.props.stepNames.map((item, index) => {
                    const active = index <= this.props.activeStepIndex ? 'active' : '';
                    const activeText = index <= this.props.activeStepIndex ? 'active-text' : '';
                    return index < this.props.quantitySteps - 1 ?
                      <div block="CheckoutProgressBar-itemLeft">
                          <div block="leftLine" className={active}/>
                          <div block="itemBlock">
                              <div block="itemNumber" className={active}>{index + 1}</div>
                              <div key={item} block="item-text" className={activeText}>{item.split(' ')[0]}</div>
                          </div>
                      </div>
                      : <div block="CheckoutProgressBar-emptyLine" className={activeLastBlock}/>;
                })}
            </div>
        );
    }
}

export default CheckoutProgressBarComponent;
