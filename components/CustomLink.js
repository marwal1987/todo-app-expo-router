import { Link } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function StyledLink({ children, href }) {
  return (
    <TouchableOpacity style={styles.linkContainer} onPress={() => {/* Hantera klickhändelse */}}>
      <Link href={href}>
        <Text style={styles.linkText}>{children}</Text>
      </Link>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    // Stilar för länkbehållare
  },
  linkText: {
    // Stilar för länktext
  },
});