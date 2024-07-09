import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchView from "../components/SearchView";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchView
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("Term was submitted")}
      />
      <Text>SearchScreen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
