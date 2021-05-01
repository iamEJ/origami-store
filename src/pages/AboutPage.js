import styled from "styled-components";
import PageHero from "../components/PageHero";
import aboutImg from "./../images/about.png";

function AboutPage() {
  return (
    <main className="page">
      <PageHero title="About" />
      <Wrapper>
        <img src={aboutImg} alt="About Us" />
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
            voluptate similique aperiam reprehenderit consequatur, magnam
            ratione magni amet quia architecto rerum veniam fuga nisi, earum
            neque. Ab eius, ex iure mollitia optio deserunt! Ea qui
            necessitatibus tenetur modi cumque quidem provident hic iusto id
            cum.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  img {
    width: 200px;
    padding: 30px 0;
  }

  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #4d4d4d;

    p {
      line-height: 30px;
    }
  }

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export default AboutPage;
