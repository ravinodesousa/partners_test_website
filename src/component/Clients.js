import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";
import client5 from "../images/client5.png";
import client6 from "../images/client6.png";

import client7 from "../images/client7.png";
import client8 from "../images/client8.png";
import client9 from "../images/client9.png";
import client10 from "../images/client10.png";
import client11 from "../images/client11.png";
import client12 from "../images/client12.png";

const company_clients = [
  {
    img_src: client1,
    img_alt: "client1",
  },
  {
    img_src: client2,
    img_alt: "client2",
  },
  {
    img_src: client3,
    img_alt: "client3",
  },
  {
    img_src: client4,
    img_alt: "client4",
  },
  {
    img_src: client5,
    img_alt: "client5",
  },
  {
    img_src: client6,
    img_alt: "client6",
  },

  {
    img_src: client7,
    img_alt: "client7",
  },

  {
    img_src: client8,
    img_alt: "client8",
  },
  {
    img_src: client9,
    img_alt: "client9",
  },
  {
    img_src: client10,
    img_alt: "client10",
  },
  {
    img_src: client11,
    img_alt: "client11",
  },
  {
    img_src: client12,
    img_alt: "client12",
  },
];

function Clients({ deviceWidth }) {
  return (
    <>
      <p className="pt-5 pb-5 container titles">Our Clients</p>

      <div className="row mb-5">
        {company_clients.map((client) => {
          return (
            <div className="col-4 col-md-2 p-3">
              <img
                src={client.img_src}
                alt={client.img_alt}
                style={
                  deviceWidth > 768
                    ? { height: 75, width: 150 }
                    : { height: 53, width: 105 }
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

export default Clients;
