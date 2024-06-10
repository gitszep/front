import styled from "styled-components";

const Section = styled.section`
  padding: 80px 20px;
  max-width: 640px;
  text-align: center;
  margin: 0 auto;
  h3{
    font-size: .875em;
    font-weight: 700;
    letter-spacing: .08em;
    line-height: 1.5;
    color: #343534;
    text-transform: uppercase;
  }
  .stars{
    margin-bottom: 20px;
    color: #eeaf2e;
    font-size: 1.5em;
    letter-spacing: 2px;
  }
`;

export default function TestimonialsSection() {
  return (
    <Section>
      <h3>testimonials</h3>
      <div className="stars">
        ★★★★★
      </div>
      <h2>Great shop! Love the clothes! You&apos;re guaranteed great service too.</h2>
    </Section>
  );
}