import "./App.css";
import Head from "./Components/Head";
import Text from "./Components/Text";
import {
  dots,
  counting,
  UIDesign,
  Maintenance,
  DevelopmentIllustration,
  Expert,
  Work,
  Onboarding,
  Neon,
} from "./Assets";

function App() {
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "200px",
            height: "250px",
            float: "left",
            display: "inline-block",
          }}
        />
        <img className="dots" src={dots} alt="dots" />
      </div>
      <div className="head-component">
        <Head
          heading="We provide The Best To Protect Your Users And Their Investments"
          para="Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. "
        />
        <img src={counting} alt="counting" />
      </div>
      <div className="properties" style={{paddingTop:"200px"}}>
        <img src={UIDesign} alt="UI Design" />
        <Text
          color="#FF6392"
          subheading="DEFI"
          heading="Scale the world of DeFi"
          para="Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi."
        />
      </div>
      <img src={Neon} alt="neon sign" className="neon"/>
      <div className="properties">
        <Text
          color="#FFBF5F"
          subheading="DAAPS"
          heading="Technology made easier"
          para="Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps."
        />
        <img src={Maintenance} alt="Maintenance Ilustration" />
      </div>
      <div className="properties" style={{paddingTop:"200px"}}>
        <img src={DevelopmentIllustration} alt="Development Illustration" />
        <Text
          color="#4EFFBF"
          subheading="AUDIT"
          heading="Stay secure and safe"
          para="Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract."
        />
      </div>
      <img src={Neon} alt="neon sign" className="reverse-neon"/>
      <div className="properties">
        <Text
          color="#618DFF"
          subheading="EXPERT"
          heading="Expert Review"
          para="Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success"
        />
        <img src={Expert} alt="Expert Review Ilustration" />
      </div>
      <div className="properties" style={{paddingTop:"200px"}}>
        <img src={Work} alt="How we work Illustration" />
        <Text
          color="#FFBF5F"
          subheading="SMART CONTRACT"
          heading="Experience the Revolution"
          para="Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you."
        />
      </div>
      <img src={Neon} alt="neon sign" className="neon"/>
      <div className="properties">
        <Text
          color="#4EFFBF"
          subheading="LAUNCHPAD"
          heading="Stabilize and Promote"
          para="Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO."
        />
        <img src={Onboarding} alt="Onboarding Ilustration" />
      </div>
    </div>
  );
}

export default App;
