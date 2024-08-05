import "./Footer.css";
import { Location, Phone, Envelope } from "akar-icons";

function Footer() {
  const icons = [
    {
      icon: <Phone strokeWidth={1} size={36} />,
      link: `tel:+19738039377`,
      name: `9738039377`,
    },
    {
      icon: <Envelope strokeWidth={1} size={36} />,
      link: `mailto:michael.tokuda17@gmail.com`,
      name: `michael.tokuda17@gmail.com`,
    },
    {
      icon: <Location strokeWidth={1} size={36} />,
      link: `https://www.google.com/maps/place/327+W+Mt+Pleasant+Ave,+Livingston,+NJ+07039/@40.7958383,-74.3411578,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3a90d9b6268d3:0x962ee10eb25238fd!8m2!3d40.7958383!4d-74.3385882!16s%2Fg%2F11c215pw9p?entry=ttu`,
      name: `address`,
    },
  ];
  return (
    <>
      <div className="footer-container">
        <h1>Donut Basket</h1>
        <section>
          <div className="footer-icons">
            {icons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                title={item.name}
                target="_blank"
                className="footer-icon"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
