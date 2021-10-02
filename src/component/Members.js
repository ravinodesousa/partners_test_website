import member1 from "../images/member1.png";
import member2 from "../images/member2.png";
import member3 from "../images/member3.png";
import member4 from "../images/member4.png";
import member5 from "../images/member5.png";
import member6 from "../images/member6.png";

const members_arr = [
  {
    img_src: member1,
    img_alt: "member1",
    width: 117,
    height: 81,
    mob_width: 69,
    mob_height: 48,
  },
  {
    img_src: member2,
    img_alt: "member2",
    width: 117,
    height: 84,
    mob_width: 69,
    mob_height: 50,
  },
  {
    img_src: member3,
    img_alt: "member3",
    width: 197,
    height: 64,
    mob_width: 116,
    mob_height: 27,
  },
  {
    img_src: member4,
    img_alt: "member4",
    width: 97,
    height: 98,
    mob_width: 51,
    mob_height: 51,
  },
  {
    img_src: member5,
    img_alt: "member5",
    width: 105,
    height: 105,
    mob_width: 55,
    mob_height: 55,
  },
  {
    img_src: member6,
    img_alt: "member6",
    width: 219,
    height: 99,
    mob_width: 116,
    mob_height: 52,
  },
];

function Members({ deviceWidth }) {
  return (
    <>
      <p className="pt-5 pb-5 titles container">We are Members of</p>
      <div className="row pb-5">
        {members_arr.map((member) => {
          return (
            <div className="col-4 col-md-2 p-1 d-flex justify-content-center align-items-center">
              <img
                src={member.img_src}
                alt={member.img_alt}
                style={
                  deviceWidth > 768
                    ? { height: member.height, width: member.width }
                    : { height: member.mob_height, width: member.mob_width }
                }
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Members;
