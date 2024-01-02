import styled from "styled-components";

const ImageHeader = ({ title, subTitle, bgImage, height }) => {
  return (
    <Container bgimage={bgImage} height={height}>
      <div className={`flex flex-col items-center justify-center h-full`}>
        {height ? (
          <></>
        ) : (
          <>
            <h4 className="md:text-6xl font-black textStyled text-primary">
              {title}
            </h4>
            <p className=" text-xl text-accent">{subTitle}</p>
          </>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(239 246 255)),
    url(${(props) => props.bgimage});
  padding: 20px 0;
  height: ${(props) => (props.height ? props.height : "60vh")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default ImageHeader;
