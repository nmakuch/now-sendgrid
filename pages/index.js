import Layout from "../components/Layout";
import PortfolioItemLeft from "../components/PortfolioItemLeft";
import PortfolioItemRight from "../components/PortfolioItemRight";

export default () => {
  return (
    <Layout>
      <main>
        <div className="portfolio-container">
          <PortfolioItemLeft />
          <PortfolioItemRight />
        </div>
      </main>
    </Layout>
  );
};
