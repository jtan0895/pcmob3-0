import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, FlatList } from 'react-native';
import { names } from "./names";



export default function App() {
  //return (
    //<ScrollView contentContainerStyle={styles.container}>
    // {names.map((name) => (
    //    <Text>{name}</Text>
    //  ))}
      
    //</ScrollView>

    const namesAsObjects = names.map((item) =>
    {
      return { name: item};
    }
    );
  //);
  const renderName = ({ item }) => {
    return <Text>{item.name}</Text>;
  };
  return <FlatList 
    contentContainerStyle={styles.containerText}
    data={namesAsObjects} 
    renderItem = {renderName}
    keyExtractor={(item) => item.name}
    
    />;
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    margin: 50,
    marginTop: 50,
    
    backgroundColor: 'blue',

  },

});
