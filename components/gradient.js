import styled from "styled-components";

export default function Gradient() {
  return <GradientBox className="gradient" data-scroll-section></GradientBox>;
}

const GradientBox = styled.div`
  --violet: hsl(252 85.1% 93%);
  --cyan: hsl(187 58.3% 85.4%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 0;
  background: radial-gradient(
      circle at top left,
      var(--violet),
      rgba(255, 255, 255, 0) 35%
    ),
    radial-gradient(
      circle at top right,
      var(--cyan),
      rgba(255, 255, 255, 0) 35%
    );
`;
