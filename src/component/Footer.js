import fb_img from "../images/fb.png";
import insta_img from "../images/insta.png";

function Footer() {
  return (
    <div
      id="Footer"
      className="d-flex flex-md-row flex-lg-row flex-column flex-sm-column justify-content-between pt-5 pb-5"
    >
      <div className="d-flex flex-column flex-start">
        <span style={{ fontWeight: 700, fontSize: 25 }} className="mb-2">
          C.A.S Consulting Ltd
        </span>
        <div className="d-flex flex-row ">
          <img className="social-icons" src={fb_img} />
          <img className="social-icons ms-2" src={insta_img} />
        </div>
        <span className="paragraph my-4">info@electricaldesignscy.com</span>
        <div className="d-flex flex-row ">
          <div className="d-flex flex-column">
            <span className="footer-text">
              6E Thoukididou Street, <br />
              1060 Nicosia, Cyprus
            </span>
          </div>
          <div className="ms-5 d-flex flex-column">
            <span className="footer-text">
              +357 22 374171
              <br />
              +357 99456081
            </span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column flex-end mt-5 mt-md-0 mt-lg-0 justify-content-end">
        <span className="footer-text">2021 C.A.S Consulting Ltd</span>
        <span className="footer-text">All Rights Reserved.</span>
        <p className="mt-3 footer-text">
          Site by <span className="font-weight-500">Mojo Digital</span>
        </p>
      </div>
    </div>
  );
}
export default Footer;
