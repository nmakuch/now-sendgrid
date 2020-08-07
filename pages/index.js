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
          button={true}
        />
        <div className="portfolio-container">
          <PortfolioItem
            title="Rescheduling a citizenship appointment online"
            description="A service that allows people to reschedule their citizenship test
            online, moving away from paper-based processes and providing a
            simpler, easier and faster user experience."
            image="/img/ircc-rescheduler.png"
            link="#"
            textSide="left"
            color="blue"
          />
          <PortfolioItem
            title="Helping canadians file their taxes to access benefits"
            description="Exploring an online service to help Canadians living in low income
            situations receive the benefits and refunds they’re entitled to by
            making it easier to file their taxes."
            image="/img/claim-tax-benefits.png"
            link="#"
            color="lightRed"
          />
        </div>
      </main>
    </Layout>
  );
};
