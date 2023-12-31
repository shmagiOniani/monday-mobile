import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors, Text } from "react-native-paper";

import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
// import { Text } from "../../../components/typography/text.component";
// import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

// import { LocationContext } from "../../../services/location/location.context";
// import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
// import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { ProductCard } from "../components/product-card.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Search } from "../../map/components/search.component";
import { ProductCategoryCard } from "../components/product-category-card.component";
import {
  CategoryWrapper,
  RestaurantList,
} from "../components/restaurant-list.styles";
import { CategoriesBar } from "../../../components/categories/categories-bar.component";
// import { Search } from "../components/search.component";
// import { RestaurantList } from "../components/restaurant-list.styles";
// import { Status } from "../../../components/status/status.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const HomeScreen = ({ navigation }) => {
  // const { error: locationError } = useContext(LocationContext);
  // const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  // const { favourites } = useContext(FavouritesContext);

  const restaurants = [
    {
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
      placeId: "SDsdsfghdd",
    },
    {
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
      placeId: "dfsgdhfdss",
    },
    {
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
      placeId: "dfghfd",
    },
    {
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
      placeId: "wertgfdfew",
    },
  ];

  const categoriesList = [
    {
      name: "Gloria dei",
      image: "gloria-dei.png",
    },
    {
      name: "Rose",
      image: "rose.png",
    },
    {
      name: "Lily",
      image: "lily.png",
    },
    {
      name: "Tulip",
      image: "tulip.png",
    },
    {
      name: "Orchid",
      image: "orchid.png",
    },
    {
      name: "Sunflower",
      image: "sunflower.png",
    },
  ];
  const [isToggled, setIsToggled] = useState(false);
  // const hasError = !!error || !!locationError;

  const product = {
    name: "Some Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
    placeId: "SDsdd",
  };
  return (
    <SafeArea>
      {false && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={colors.brand.primary} />
        </LoadingContainer>
      )}
      {/* <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      /> */}
      {/* <Status/> */}

      {/* <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product: product,
          })
        }
      >
        <Spacer position="bottom" size="large">
          <FadeInView>
            <ProductCard />
            <RestaurantInfoCard restaurant={item} />
          </FadeInView>
        </Spacer>
      </TouchableOpacity> */}

      {/* {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )} */}
      <RestaurantList
        // contentContainerStyle={{
        //   paddingBottom: '1200px',
        // }}
        ListHeaderComponent={
          <>
            <CategoryWrapper>
              <View style={{ width: "46%", marginLeft: "1%" }}>
                <TouchableOpacity>
                  <ProductCategoryCard></ProductCategoryCard>
                </TouchableOpacity>
              </View>
              <View style={{ width: "46%", marginRight: "1%" }}>
                <TouchableOpacity>
                  <ProductCategoryCard></ProductCategoryCard>
                </TouchableOpacity>
              </View>
              <View style={{ width: "95%" }}>
                <TouchableOpacity>
                  <ProductCategoryCard></ProductCategoryCard>
                </TouchableOpacity>
              </View>
            </CategoryWrapper>
            <CategoriesBar categories={categoriesList} />
          </>
        }

        data={restaurants}
        numColumns={2}
        key={(item) => item.placeId}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ flex: 1}}
              onPress={() =>
                navigation.navigate("ProductDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <ProductCard />

{/* sdssd sdank mksmas */}

                  {/* <RestaurantInfoCard restaurant={item} /> */}


                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.placeId}
      />
    </SafeArea>
  );
};
