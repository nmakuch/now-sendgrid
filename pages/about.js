import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default () => {
  return (
    <Layout>
      <main>
        <Banner
          bannerSubheader="Additional background information"
          bannerHeader="Learn more about my education background, as well as some of the places I've worked"
          banner={false}
        />
      </main>
    </Layout>
  );
};
