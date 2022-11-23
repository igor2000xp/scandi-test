import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';
import './Checkout.style';
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";
// import {SHIPPING_STEP} from "@scandipwa/scandipwa/src/route/Checkout/Checkout.config";
import CheckoutProgressBarComponent from "Component/CheckoutProgressBar/CheckoutProgressBar.component";

/** @namespace ScandiTest/Route/Checkout/Component */
export class CheckoutComponent extends SourceCheckout {

    renderBar() {
      const { checkoutStep } = this.props;
      const activeStepValue = checkoutStep;
      const steps = Object.keys(this.stepMap);
      const quantitySteps = steps.length;
      const stepNames = steps.map((item) => {
        return this.stepMap[item].title;
      });
      const activeStepIndex = steps.indexOf(activeStepValue);

      return (
        <CheckoutProgressBarComponent
          stepNames={stepNames}
          quantitySteps={quantitySteps}
          activeStepIndex={activeStepIndex}
        />
      );
    }
    // TODO implement logic
    render() {
        return (
          <div>
            <main block="Checkout">
              <div block="CheckoutProgressBar" id="bar">
                { this.renderBar() }
              </div>
              <ContentWrapper
                wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                label={ __('Checkout page') }
              >
                { this.renderSummary(true) }
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

          </div>
        );
    }
}

export default CheckoutComponent;
