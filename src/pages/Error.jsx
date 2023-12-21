import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <section className="h-screen flex items-center justify-center">
        <div>
          <h5>404</h5>
          <p>Sorry page not found</p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div``;
