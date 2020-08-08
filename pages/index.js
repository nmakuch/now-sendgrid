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
            textSide="left"
            description="A service that allows people to reschedule their citizenship test
            online, moving away from paper-based processes and providing a
            simpler, easier and faster user experience."
            image="/img/ircc-rescheduler.png"
            link="#"
            color="lightGreen"
            device="phone"
            category="Interaction design | Front-end development"
          />
          <PortfolioItem
            title="Helping canadians with low income file their taxes"
            textSide="right"
            description="Exploring an online service to help Canadians living in low income
            situations receive the benefits and refunds they’re entitled to by
            making it easier to file their taxes."
            image="/img/claim-tax-benefits.png"
            link="#"
            color="blue"
            category="Interaction design | Front-end development"
          />
          <PortfolioItem
            title="A Leading Sport Nation promotional advertisement"
            textSide="left"
            description="A short tv commercial I worked on. I generally was a Production Assistant but also did some minor video editing as well. The ad aired during the World Juniors."
            image="/img/leading-sport-nation.png"
            link="#"
            color="lightPurple"
            category="Video editing | Production Assistant"
          />
          <PortfolioItem
            title="Security Goals UI"
            textSide="right"
            description="This was an interface I designed and integrated with an API created to run automated compliance checks on kubernetes based applications."
            image="/img/security-goals.png"
            link="#"
            color="lightYellow"
            category="Interaction design | Front-end development"
          />
          <PortfolioItem
            title="Rosie and Company Dog Walking website"
            textSide="left"
            description="This website was made for a Toronto based dog walking service. The site was made using Hugo, a static website generator. It displays general info and has a contact form."
            image="/img/rosie-and-company.png"
            linke="#"
            color="lightGreen"
            category="Front-end development | Web design"
          />
          <PortfolioItem
            title="Rosie and Company: Maid Service website"
            textSide="right"
            description="This website was made for a Toronto based maid cleaning service. The site is made with Next.js and hooked into the Sendgrid API to book appointments by email."
            image="/img/rosies-ms.png"
            link="#"
            color="blue"
            category="Front-end development | Web design"
          />
          <PortfolioItem
            title="Roberto and Rob 3D Animation"
            textSide="left"
            description="A short 3D animation made for a final university project in fourth year. Over a semester I modeled, motion captured and rendered all of the scenes in this video."
            image="/img/roberto-and-rob.png"
            link="#"
            color="lightPurple"
            category="3D modelling | 3d animation"
          />
        </div>
      </main>
    </Layout>
  );
};
