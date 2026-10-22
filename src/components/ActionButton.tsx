import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = { title: string; onPress: () => void; disabled?: boolean };
export function ActionButton({ title, onPress, disabled = false }: Props) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ disabled }}
      disabled={disabled} onPress={onPress}
      style={({ pressed }) => [styles.button, (pressed || disabled) && styles.dimmed]}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: { padding: 12, minHeight: 44, justifyContent: 'center', borderRadius: 8, backgroundColor: '#1766c0' },
  label: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: '600' },
  dimmed: { opacity: 0.5 },
});
