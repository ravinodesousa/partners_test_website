import carousal_img from "../images/carousal.png";
import group_img from "../images/Group.png";
import group1_img from "../images/Group1.png";

function Carousal({ carousal_ref }) {
  return (
    <div
      id="Home"
      ref={carousal_ref}
      className="position-relative d-flex justify-content-center align-items-center"
    >
      <img
        src={carousal_img}
        className="img-fluid vw-100 vh-100"
        alt="carousal-image"
      />
      <img
        src={group_img}
        className="img-fluid carousal-overlay d-none d-sm-none d-md-block d-lg-block w-75 h-50 mx-auto my-auto position-absolute"
        alt="carousal-image"
      />
      <img
        src={group1_img}
        className="img-fluid carousal-overlay d-block d-sm-block d-md-none d-lg-none w-75 h-50 mx-auto my-auto position-absolute"
        alt="carousal-image"
      />
    </div>
  );
}
export default Carousal;
