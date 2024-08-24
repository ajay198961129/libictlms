import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <h1>About Us</h1>
        <div className="color-underline"></div>
        <p>Serving local social impact organizations everywhere</p>
      </div>
      <div className="section-2">
        <div className="section-2-left">
          <h3>
            Every day, social impact organizations serve their communities with
            leadership, nuanced expertise and compassion.
          </h3>
          <p>Their work restores people’s hope in the future.</p>
          <p>
            These moments have much more significance than just being heroic
            examples of local impact; these ==outcomes are key in our shared
            progress to meet the Sustainable Development Goals. Locally-led
            organizations are our most critical drivers of sustainable change.
          </p>
          <p>
            Yet many of these organizations have limited access to resources
            whether it be learning opportunities, peer support or funding.
          </p>
          <p>
            What if we applied the reach and efficiency of technology to deliver
            these critical resources to organizations where it matters most?
          </p>
          <p>
            Philanthropy University is a free platform for social change that
            puts practical courses and knowledge-sharing communities just a
            click away.
          </p>
        </div>
        <div>
          <img
            alt="about"
            src="https://static.wixstatic.com/media/f588b0_4650ab8feea649028c7aff75c8c7ccd1~mv2.jpg/v1/fill/w_675,h_661,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f588b0_4650ab8feea649028c7aff75c8c7ccd1~mv2.jpg"
          />
        </div>
      </div>
      <div className="section-3">
        <div className="section-3-left">
          <h3>HOW WE GOT HERE</h3>
          <p>
            Serving local social impact organizations everywhere. Named from the
            word Philanthropos, meaning love of humanity, PhilanthropyU was
            founded by the Al-Dabbagh Group in 2015. Our premier
            capacity-building platform will join the suite of services offered
            by OneValley, a global entrepreneurship and innovation platform for
            individuals, startups, and corporations seeking innovation and
            accelerated growth.
          </p>
          <p>
            The merger combines the vision of both OneValley and Philanthropy U
            a world in which entrepreneurs and civil society organizations have
            the resources needed to innovate and solve the world's most pressing
            problems.
          </p>
          <p>
            OneValley's global innovation platform, which currently supports
            individuals, startups, and corporations, will provide a thriving
            innovation ecosystem that includes technology partners, content,
            resources, programming, and a network of funding, mentoring, and
            startup communities. This will consist of a completely re-imagined
            capacity-building platform and a new platform to connect social
            impact organizations with funders.
          </p>
        </div>
        <div>
          <img
            alt="about"
            src="https://static.wixstatic.com/media/f588b0_25c23aacd4c141f083545c2b806ebf53~mv2.png/v1/fill/w_512,h_452,al_c,lg_1,q_85,enc_auto/Asset%204.png"
          />
        </div>
      </div>
    </>
  );
};

export default About;
