import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Article'>;
export function ArticleScreen({ route }: Props) {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.meta}>{article.category} · {article.minutes} мин чтения</Text>
        <Text style={styles.title} accessibilityRole="header">{article.title}</Text>
        <Text style={styles.summary}>{article.summary}</Text>
        {article.body.map((paragraph, index) => <Text key={index} style={styles.body}>{paragraph}</Text>)}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, gap: 20 },
  meta: { fontSize: 13, color: '#666' },
  title: { fontSize: 32, fontWeight: '700', color: '#202124' },
  summary: { fontSize: 19, fontWeight: '500', color: '#333', lineHeight: 28 },
  body: { fontSize: 17, color: '#333', lineHeight: 27 },
});
