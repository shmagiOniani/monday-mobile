import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";
import { View } from "react-native-web";

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
    border: 1px solid orange;
    border-radius:10px;
    width: 90%
    margin:0 auto
`;

const isAndroid = Platform.OS === "android";

export const Status = () => {
  //   const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      {/* <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text> */}
      <Text>dd</Text>
      {/* <View>
        
      </View> */}
    </Item>
  );
};
