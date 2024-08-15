import Life from "./LifeComponent";
import lifeCashImage from "../assets/ic_life_cash.png";
import lifeCreditsImage from "../assets/ic_life_credits.png";
import footComponentImage from "../assets/img_how_green.jpg";
import treeComponentImage from "../assets/img_life_portrait.jpg";
import badgeImage from "../assets/ic_e-certificate.png";
import planetPledgesImage from "../assets/ic_planet_pledges.png";
import planetVolunteersImage from "../assets/ic_planet_volunteers.png";
import profileImage from "../assets/profile_img.jpg";
import villageImage1 from "../assets/img_offset_01.jpg";
import villageImage2 from "../assets/img_offset_02.jpg";
import SideComponent from "./sideComponent";
import MidComponent from "./MidComponent";
import OffsetsComponents from "./OffsetsComponent";
import User from "./User";
import WalletStatement from "./WalletStatement";
import LeadersComponent from "./LeadersComponent";
import OffsetStatement from "./OffsetStatementComponent";

// const userDetails = async (authToken) => {
//   const response = await axios.get(import.meta.env.BACKEND_URL+"/user/", {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   });
//   return response.data;
// };

const Home = () => {
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const data = await userDetails("sample-token");
  //       setUserData(data);
  //     } catch (error) {
  //       console.error("Failed to fetch user details:", error);
  //     }
  //   };
  //   fetchUserDetails();
  // }, []);

  return (
    <>
      <div className="flex flex-row">
        <div className="bg-blue-400" style={{ width: "10%" }}></div>
        <div>
          <div className="flex flex-row w-full">
            <div style={{ width: "25%" }}>
              {/* <User
            imgSrc={userData.img}
            name={userData.name}
            level={userData.level}
          /> */}
              <User imgSrc={profileImage} name={"Arvind"} level={5} />
            </div>
            <div
              className="grid grid-cols-2 gap-4 mb-10"
              style={{ width: "65%" }}
            >
              <div className="col-span-2 flex justify-between items-center mr-2 ml-8">
                <Life
                  title={"LIFE Cash"}
                  imgSrc={lifeCashImage}
                  content={"513"}
                />
                <Life
                  title={"LIFE Credits"}
                  imgSrc={lifeCreditsImage}
                  content={"100"}
                />
              </div>
              <div
                className="col-span-2 flex justify-center"
                style={{ width: "100%" }}
              >
                <OffsetsComponents
                  imgSrc1={villageImage1}
                  imgSrc2={villageImage2}
                  value={24}
                />
              </div>
            </div>
            <div style={{ marginRight: "2%", width: "35%" }}>
              <SideComponent
                imgSrc={treeComponentImage}
                title={"My LIFE Portrait"}
                buttonText={"Make my Portrail greener"}
              />
            </div>
          </div>
          <div className="flex flex-row mb-16 mt-16" style={{ height: "30%" }}>
            <div className="mr-16" style={{ width: "70%" }}>
              <WalletStatement />
            </div>
            <div style={{ height: "85%", width: "30%", marginRight: "2%" }}>
              <SideComponent
                imgSrc={footComponentImage}
                title={"How green are you?"}
                subtitle={
                  "Everyone's carbon footprint is different. What is yours?"
                }
                buttonText={"Find my carbon impact"}
              />
            </div>
          </div>

          <div className="flex justify-around mb-20" style={{ height: "5%" }}>
            <MidComponent
              imgSrc={badgeImage}
              text={11}
              componentText={"CarbonShunya e-Certificate downloads"}
              buttonText={"View"}
            />
            <MidComponent
              imgSrc={planetPledgesImage}
              text={6}
              componentText={"Planet Pledges taken"}
              buttonText={"Take Planet Pledge"}
            />
            <MidComponent
              imgSrc={planetVolunteersImage}
              text={8}
              componentText={"Total Planet Volunteers"}
              buttonText={"Volunteer"}
            />
          </div>
          {/* <div className="min-h-screen">Graphs</div> */}
          <div className="flex flex-row">
            <div style={{ width: "50%", marginLeft: "2%", paddingLeft: "2%" }}>
              <LeadersComponent />
            </div>
            <div
              style={{
                width: "60%",
                marginRight: "4%",
                paddingLeft: "2%",
                marginLeft: "2%",
              }}
            >
              <OffsetStatement />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
