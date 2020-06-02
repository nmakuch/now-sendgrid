import Layout from "../components/Layout";
import PortfolioItemLeft from "../components/PortfolioItemLeft";
import PortfolioItemRight from "../components/PortfolioItemRight";

import React from "react";
import Fonts from "../public/Fonts";

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <Layout>
        <main>
          <div className="banner">
            <h1>
              Hi, I'm Nick Makuch. I'm an interaction designer based out of
              Ottawa, Ontario. You can view some of my past work below.
            </h1>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-container">
              <PortfolioItemLeft
                title="Claim Tax Benefits"
                category="Interaction Design"
                image="/img/claim-tax-benefits.png"
              />
              <PortfolioItemRight
                title="IRCC Rescheduler"
                category="Interaction Design"
                image="/img/ircc-rescheduler.png"
              />
            </div>

            <div className="portfolio-container">
              <PortfolioItemLeft
                title="Rosie and Company"
                category="Web development"
                image="/img/rosie-and-company.png"
              />
              <PortfolioItemRight
                title="Rosie's Maid Service"
                category="Web Development"
                image="/img/rosies-ms.png"
              />
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Index;
