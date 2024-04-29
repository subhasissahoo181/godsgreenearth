import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import CtaForm from "../form/CtaForm";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  inner?: boolean;
};
const CtaSection = ({ inner }: Props) => {
  return (
    <section
      className={`rv-14-cta ${inner ? "rv-inner-cta" : ""} rv-section-spacing`}
    >
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="rv-14-cta__txt">
              <CustomGsapHeaderAnimate>
                <h6 className="rv-1-section__sub-title rv-text-anime">
                  Our Newsletter
                </h6>
              </CustomGsapHeaderAnimate>
              <CustomGsapHeaderAnimate>
                <h2 className="rv-1-section__title rv-text-anime mb-0">
                  Become a Member For Unique Updates!
                </h2>
              </CustomGsapHeaderAnimate>
            </div>
          </div>
          <DivAnimateYAxis className="col-lg-6">
            <CtaForm />
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
