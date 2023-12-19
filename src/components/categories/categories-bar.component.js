import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";
import { CompactCategoryInfo } from "./compact-category-info.component";

const CategoriesBarWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  border-radius: 15px;
  margin-bottom: 15px;
`;
export const CategoriesBar = ({ categories, onNavigate }) => {
  if (!categories.length) {
    return null;
  }
  return (
    <CategoriesBarWrapper elevation={3}>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => {
          const key = category.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  console.log("Pressed")
                  // onNavigate("ProductDetail", {
                  //   restaurant,
                  // })
                }
              >
                {/* <CompactRestaurantInfo restaurant={restaurant} /> */}
                <CompactCategoryInfo category={category} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </CategoriesBarWrapper>
  );
};
