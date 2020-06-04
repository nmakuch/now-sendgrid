import Layout from "../components/Layout";
import PortfolioItem from "../components/PortfolioItem";

export default () => {
  return (
    <Layout>
      <main>
        <div className="banner">
          <div className="status">
            <span className="employment-status">
              Currently available for freelance projects
            </span>
          </div>
          <h1>
            Hi, I’m Nick Makuch. I’m an Interaction Designer based in Ottawa,
            Ontario. I also practice front-end development.
          </h1>
          <p>
            You can view some of the recent and past projects I've worked on
            below. If you have any questions and would like to get in touch,
            please visit my contact page to send me a message.
          </p>
        </div>
        <div class="portfolio-container grid grid-cols-3 gap-4 mb-32">
          <PortfolioItem
            date="2019"
            category="Canadian Digital Service"
            description="Exploring a service to help Canadians with low income receive the
            benefits and refunds they’re entitled to by making it easier to
            file their taxes."
            image="/img/claim-tax-benefits.png"
            title="Claim Tax Benefits"
            bottom="Interaction design / Front-end development"
          />
          <PortfolioItem
            date="2019"
            category="Canadian Digital Service"
            description="A service that allows people to reschedule their citizenship test online, moving away from paper-based processes and providing a simpler user experience."
            image="/img/ircc-rescheduler.png"
            title="IRCC Rescheduler"
            bottom="Interaction design / Front-end development"
          />
          <PortfolioItem
            date="2019"
            category="Freelance"
            description="A website for a Toronto based maid cleaning service. The site allows users to calculate the cost of cleaning packages and book appointments through email."
            image="/img/rosies-ms.png"
            title="Rosie & Company (Maid)"
            bottom="Web design / Web development"
          />
          <PortfolioItem
            date="2019"
            category="Freelance"
            description="A website for a Toronto based dog walking service. This is a simple 3-page static website made using Hugo."
            image="/img/rosie-and-company.png"
            title="Rosie & Company (Dog)"
            bottom="Web design / Web development"
          />

          <PortfolioItem
            date="2019"
            category="Heritage Canada"
            description="This was a commercial I helped create for Sports Canada. I helped edit small portions of the commercial and on set as a PA."
            image="/img/leading-sport-nation.png"
            title="A Leading Sport Nation"
            bottom="Web design / Web development"
          />

          <PortfolioItem
            date="2018"
            category="Freelance"
            description="This is a logo I designed for an Ottawa based drywall and mudding company."
            image="/img/manions-mud.png"
            title="Manion's Mud n' Drywall"
            bottom="Web design / Web development"
          />
        </div>
      </main>
    </Layout>
  );
};
