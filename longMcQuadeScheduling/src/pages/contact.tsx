import "./contact.css";
import messageIcon from "../assets/995789_comment_communication_message_messages_icon.svg";
import phoneIcon from "../assets/9023670_phone_call_fill_icon.svg";
import locationIcon from "../assets/4200779_address_location_map_navigation_icon.svg";
import hoursIcon from "../assets/211718_clock_icon.svg";
import Header from "../components/Header";

const contact = () => {
  return (
    <div className="private-route-body">
      {/* Contact information section */}
      <div id="contact">
        <Header message="Contact Us"></Header>
        <div className="section" id="lessonCentreInfo">
          <div id="col">
            <div>
              <div>
                <div className="icon-and-heading">
                  <img
                    className="icon"
                    src={messageIcon}
                    width="30px"
                    alt="Message Icon"
                  />
                  <h3 id="infoHeading">Email</h3>
                </div>
                <p>saskatoonlessons@long-mcquade.ca</p>
              </div>
              <div>
                <div className="icon-and-heading">
                  <img
                    className="icon"
                    src={phoneIcon}
                    alt="Phone icon"
                    width="30px"
                  />
                  <h3 id="infoHeading">Phone</h3>
                </div>
                <ul>
                  <li>(306) 500-7541</li>
                  <li>(306) 664-1966 (Store)</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="col">
            <div>
              <div>
                <div className="icon-and-heading">
                  <img
                    className="icon"
                    src={locationIcon}
                    alt="Location icon"
                    width="30px"
                  />
                  <h3 id="infoHeading">Address</h3>
                </div>
                <p>721 43 St E, Saskatoon SK S7K 0V7</p>
              </div>
              <div>
                <div className="icon-and-heading">
                  <img
                    className="icon"
                    src={hoursIcon}
                    alt="Clock icon"
                    width="30px"
                  />
                  <h3 id="infoHeading">Our Hours</h3>
                </div>
                <ul>
                  <li>Monday: 3:30pm - 9:30pm</li>
                  <li>Tuesday: 3:30pm - 9:30pm</li>
                  <li>Wednesday: 3:30pm - 9:30pm</li>
                  <li>Thursday: 3:30pm - 9:30pm</li>
                  <li>Friday: 3:30pm - 6:00pm</li>
                  <li>Saturday: 9:30am - 5:30pm</li>
                  <li>Sunday: CLOSED</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
