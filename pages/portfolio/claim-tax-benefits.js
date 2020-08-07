import Layout from "../../components/Layout";
import PortfolioItem from "../../components/PortfolioItem";
import Banner from "../../components/Banner";

export default () => {
  return (
    <Layout>
      <div className="bg-lightRed flex justify-center w-full px-24 py-20 mt-8">
        <div
          style={{ width: 100 + "%" }}
          className="flex items-center justify-center"
        >
          <div className="w-1/2">
            <span className="text-sm">IX Design / Front-end Development</span>
            <h1 className="text-left text-3xl mt-2">Claim Tax Benefits</h1>
            <p className="pr-10 mb-8">
              Exploring an online service to help Canadians living in low income
              situations receive the benefits and refunds they’re entitled to by
              making it easier to file their taxes.
            </p>
            <button className="w-auto px-12">View Github repository</button>
          </div>
          <img className="w-1/2" src="/img/claim-tax-benefits.png" />
        </div>
      </div>
      <main>
        <h2>Project background</h2>
      </main>
    </Layout>
  );
};
