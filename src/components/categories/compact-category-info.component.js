import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactCategoryInfo = ({ category }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: `../../../assets/category-img/${category.image}` }} />
      <Text center variant="caption" numberOfLines={3}>
        {category.name}
      </Text>
    </Item>
  );
};
