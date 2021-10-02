import rectangle2 from "../images/Rectangle2.png";
import rectangle6 from "../images/Rectangle6.png";
import rectangle5 from "../images/Rectangle5.png";
import rectangle7 from "../images/Rectangle7.png";
import rectangle9 from "../images/Rectangle9.png";
import rectangle8 from "../images/Rectangle8.png";

const engineering_sectors = [
  {
    img_src: rectangle2,
    img_alt: "Rectangle2",
    sector_name: "Electrical Installation Design",
  },
  {
    img_src: rectangle6,
    img_alt: "Rectangle6",
    sector_name: "Electrical Inspection & Testing",
  },
  {
    img_src: rectangle5,
    img_alt: "Rectangle5",
    sector_name: "Lighting Design",
  },
  {
    img_src: rectangle7,
    img_alt: "Rectangle7",
    sector_name: "Photovoltaic Design & Installation",
  },
  {
    img_src: rectangle9,
    img_alt: "Rectangle9",
    sector_name: "Energy Performance Certificates",
  },
  {
    img_src: rectangle8,
    img_alt: "Rectangle8",
    sector_name: "Electrical Equipment Testing (PAT)",
  },
];

function Sectors({ deviceWidth }) {
  return (
    <>
      <p id="Sectors" className="pt-5 titles">
        Engineering Sectors
      </p>
      <div className="row mt-4 ">
        {engineering_sectors.map((sector) => {
          return (
            <div className="col-sm-10 col-md-4 p-2 d-flex justify-content-center align-items-center flex-column">
              <img
                src={sector.img_src}
                alt={sector.img_alt}
                style={
                  deviceWidth > 768
                    ? { height: 366, width: 366 }
                    : { height: 293, width: 293 }
                }
              />

              <p style={{ fontWeight: 500, fontSize: 18 }} className="py-2 ">
                {sector.sector_name}
              </p>
            </div>
          );
        })}
      </div>

      <p className="end-title pb-5">{">"}Engineering Sectors</p>
    </>
  );
}

export default Sectors;
