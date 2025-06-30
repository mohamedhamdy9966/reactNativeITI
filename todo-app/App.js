import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { FlatList } from 'react-native';
export default function App() {
  const DATA = [
  { id: '1', title: 'Learn life', status: 'active' },
  { id: '2', title: 'Build a life', status: 'done' },
];
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 24, marginBottom: 10 }}>To Do List</Text>

      <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Description" placeholderTextColor="#888" />

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.Text}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeFilterBtn}>
          <Text style={styles.filterText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeFilterBtn}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>
      <FlatList
  data={DATA}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={{ width: '90%', marginVertical: 10, padding: 10, backgroundColor: '#2c2c2c', borderRadius: 5 }}>
      <Text style={{whiteSpace: 'nowrap' ,width: '100%' , color: 'white', fontSize: 18 }}>{item.title}</Text>
      <Text style={{ color: '#888', fontSize: 14 }}>{item.status}</Text>
    </View>
  )}
  style={{ marginTop: 20, width: '100%' }}
  contentContainerStyle={{ alignItems: 'center' }}
/>
    </View>
  );
}
