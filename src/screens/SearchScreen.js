import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchView from "../components/SearchView";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san jose",
          term,
        },
      });
      setResult(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };
  return (
    <View>
      <SearchView term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} buisnesses</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
