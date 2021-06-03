import styled from "styled-components";
import { services } from "./../utils/constans";

function Services() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
        <div className="services">
          {services.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <article key={id}>
                <span>{icon}</span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #3d4550;
    width: 70%;
    justify-content: center;
  }
  .services {
    display: flex;
    text-align: center;
  }

  article {
    margin: 10px;
    padding: 20px;
    background-color: #f7f9fa;
  }

  h1 {
    font-size: 32px;
  }

  h1,
  h2 {
    margin-bottom: 10px;
    font-family: "EB Garamond", serif;
  }

  p {
    padding-bottom: 20px;
    color: #748194;
  }

  span {
    width: 50px;
    height: 50px;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 16px;
    border-radius: 50%;
    background: #72abf2;
    color: #fff;
    svg {
      font-size: 2rem;
    }
  }
`;

export default Services;
