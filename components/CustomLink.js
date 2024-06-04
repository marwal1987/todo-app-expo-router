import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function CustomLink(props) {
  const { href, children, textColor, bgColor, rounded, py, px, width } = props;
  const styles = StyleSheet.create({
    link: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: px || 12,
      paddingHorizontal: py || 24,
      borderRadius: rounded,
      elevation: 3,
      backgroundColor: bgColor,
      minWidth: width,
      textAlign: "center",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: textColor,
    },
  });
  
  return (
    <Link style={styles.link} href={href}>
      <Text style={styles.text}>{children}</Text>
    </Link>
  );
}

