import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 95%;
  align-self: center;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;


export const CategoryCard = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: #edebfd;
  width: 100%;
  height: 100px;
  margin-bottom: ${(props) => props.theme.space[2]};
  border-radius: 10px;
  overflow: hidden;
`;

export const CategoryCardCover = styled.Image`
  border-radius: 10px;
  // width: auto;
  // height: 100%;
  width: 80px;
  height: 50px;
  margin-left: auto;
`;