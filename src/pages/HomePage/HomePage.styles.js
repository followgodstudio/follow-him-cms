import styled from "@emotion/styled/macro";

export const HorizontalLine = styled.hr`
  color: lightgray;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
`;

export const CardBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 6px;
  width: 100%;
  border-radius: 5px;
`;

// .card-bd .num-text {
//   font-size: 58px; }
// @media only screen and (max-width: 1199px) {
// .card-bd .num-text {
//     font-size: 35px; } }
// .card-bd .card-border {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 6px;
//   width: 100%;
//   border-radius: 5px; }
