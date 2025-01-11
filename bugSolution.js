async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Process the data
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error gracefully, e.g., display an error message to the user
    // Set error state for UI update
    Alert.alert('Error', 'Failed to fetch data. Please try again later.');
    return null; // or throw error if needed to stop the process
  }
}

fetchData();