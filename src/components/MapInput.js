import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { TextInput, View } from "react-native";

function MapInput(props) {
  return (
    // <GooglePlacesAutocomplete
    //   placeholder="Search"
    //   minLength={2} // minimum length of text to search
    //   autoFocus={true}
    //   returnKeyType={"search"} // Can be left out for default return key
    //   listViewDisplayed={false} // true/false/undefined
    //   fetchDetails={true}
    //   onPress={(data, details = null) => {
    //     // 'details' is provided when fetchDetails = true
    //     props.notifyChange(details.geometry.location);
    //   }}
    //   query={{
    //     key: "AIzaSyDt7BlAIgGcVpHe9xx_TxPjuF3hJ5_of4w",
    //     language: "en",
    //   }}
    //   nearbyPlacesAPI="GooglePlacesSearch"
    //   debounce={300}
    // />
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2} // minimum length of text to search
      autoFocus={true}
      returnKeyType={"search"} // Can be left out for default return key
      listViewDisplayed={false} // true/false/undefined
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        props.notifyChange(details.geometry.location);
      }}
      query={{
        key: "AIzaSyDt7BlAIgGcVpHe9xx_TxPjuF3hJ5_of4w",
        language: "en",
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={300}
    />
  );
}
export default MapInput;
