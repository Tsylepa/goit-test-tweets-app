import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: end;
  object-fit: cover;
  height: 460px;
  color: var(--primary-color);
  font-size: 20px;
  line-height: 24px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-transform: uppercase;
`;

export const Header = styled.div`
  height: 214px;
  background: url("src/images/logo.png") top 20px left 20px,
    url("src/images/card-header.png") center;
  background-repeat: no-repeat;
`;

export const Border = styled.hr`
  height: 8px;
  width: 100%;
  margin: 0;
  border: none;
  background: var(--primary-color);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Body = styled.div`
  position: relative;
  height: 238px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarFrame = styled.div`
  position: absolute;
  top: -4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  transform: translateY(-50%);
  background-color: #fbf8ff;
  box-sizing: border-box;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 62px;
  border-radius: 50%;
  outline: 8px solid white;
`;

export const Stats = styled.p`
  margin: 16px 0 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  min-width: 196px;
  min-height: 54px;
  margin-top: 26px;
  border-radius: 10px;
  background: ${({ followed }) =>
    followed ? "var(--active-color)" : "var(--primary-color)"};
`;
