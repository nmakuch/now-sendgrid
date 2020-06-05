import Layout from "../components/Layout";
import PortfolioItem from "../components/PortfolioItem";
import Banner from "../components/Banner";

export default () => {
  return (
    <Layout>
      <main>
        <Banner
          bannerSubheader="I'm currently available for freelance projects"
          bannerHeader="Hi, I’m Nick Makuch. I’m an Interaction Designer and Front End Developper based in Ottawa, Ontario."
        />
        <div className="portfolio-container">
          <PortfolioItem
            date="2019"
            category="Canadian Digital Service"
            description="Exploring a service to help Canadians with low income receive the
            benefits and refunds they’re entitled to by making it easier to
            file their taxes."
            image="/img/claim-tax-benefits2.png"
            background="teal"
            title="Claim Tax Benefits"
            bottom="Interaction design"
          />
          <PortfolioItem
            date="2019"
            category="Canadian Digital Service"
            description="A service that allows people to reschedule their citizenship test online, moving away from paper-based processes and providing a simpler user experience."
            image="/img/ircc-rescheduler2.png"
            title="IRCC Rescheduler"
            bottom="Interaction design"
            background="blue"
          />
          <PortfolioItem
            date="2019"
            category="Freelance"
            description="A website for a Toronto based maid cleaning service. The site allows users to calculate the cost of cleaning packages and book appointments through email."
            image="/img/rosies-ms2.png"
            title="Rosie & Company (Maid)"
            bottom="Web development"
            background="lightPurple"
          />
          <PortfolioItem
            date="2019"
            category="Freelance"
            description="A website for a Toronto based dog walking service. This is a simple 3-page static website made using Hugo."
            image="/img/rosie-and-company2.png"
            title="Rosie & Company (Dog)"
            bottom="Web development"
            background="lightYellow"
          />

          <PortfolioItem
            date="2019"
            category="Heritage Canada"
            description="This was a commercial I helped create for Sports Canada. I helped edit small portions of the commercial and on set as a PA."
            image="/img/leading-sport-nation2.png"
            title="A Leading Sport Nation"
            bottom="Video production"
            background="pink"
          />

          <PortfolioItem
            date="2018"
            category="Freelance"
            description="This is a logo I designed for an Ottawa based drywall and mudding company."
            image="/img/manions-mud.png"
            title="Manion's Mud n' Drywall"
            background="lightRed"
            bottom="Graphic design"
          />
        </div>
      </main>
    </Layout>
  );
};
