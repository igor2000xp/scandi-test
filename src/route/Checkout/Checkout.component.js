import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.style';
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";

/** @namespace ScandiTest/Route/Checkout/Component */
export class CheckoutComponent extends SourceCheckout {

    renderBar() {
      const { checkoutStep } = this.props;
      const { title = '' } = this.stepMap[checkoutStep];

      return (
        <h2 block="CheckoutProgressBar" elem="Title">
          {/*{ this.stepMap.lenght }*/}
          count
        </h2>
      );
    }
    // TODO implement logic
    render() {
        return (
          <main block="Checkout">
              <ContentWrapper
                wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                label={ __('Checkout page') }
              >
                  { this.renderSummary(true) }
                  <div block="CheckoutProgressBar" id="bar">
                      { this.renderBar() }
                  </div>
                  <div block="Checkout" elem="Step" id="checkout">
                      { this.renderTitle() }
                      { this.renderGuestForm() }
                      { this.renderStep() }
                      { this.renderLoader() }
                  </div>
                  <div id="sum">
                      { this.renderSummary() }
                      { this.renderPromo() }
                      { this.renderCoupon() }
                  </div>
              </ContentWrapper>
          </main>
        );
    }
}

export default CheckoutComponent;
