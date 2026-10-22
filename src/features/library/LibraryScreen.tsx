import React from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';
import { ActionButton } from '../../components/ActionButton';
import { useLibrary } from './useLibrary';

type Props = NativeStackScreenProps<RootStackParamList, 'Library'>;
export function LibraryScreen({ navigation }: Props) {
  const { articles, isLoading, error, refresh } = useLibrary();
  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <View style={styles.toolbar}>
        <ActionButton title="Обновить" onPress={() => void refresh()} disabled={isLoading} />
      </View>
      {isLoading && articles.length === 0 ? (
        <View style={styles.center} accessible accessibilityLabel="Загружаем материалы">
          <ActivityIndicator size="large" /><Text style={styles.hint}>Загружаем материалы…</Text>
        </View>
      ) : error ? (
        <View style={styles.center}>
          <Text style={styles.heading} accessibilityRole="header">Не удалось загрузить</Text>
          <Text style={styles.hint} accessibilityRole="alert">{error}</Text>
          <ActionButton title="Повторить" onPress={() => void refresh()} />
        </View>
      ) : (
        <FlatList data={articles} keyExtractor={article => article.id}
          refreshing={isLoading} onRefresh={() => void refresh()}
          ListEmptyComponent={<View style={styles.center}><Text style={styles.heading}>Пока нет материалов</Text></View>}
          renderItem={({ item }) => (
            <Pressable accessibilityRole="button" accessibilityLabel={`Открыть: ${item.title}`}
              onPress={() => navigation.navigate('Article', { article: item })}
              style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.summary}>{item.summary}</Text>
              <Text style={styles.meta}>{item.category} · {item.minutes} мин</Text>
            </Pressable>
          )} />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  toolbar: { alignItems: 'flex-end', padding: 16, borderBottomColor: '#ddd', borderBottomWidth: StyleSheet.hairlineWidth },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, gap: 16 },
  heading: { fontSize: 22, fontWeight: '600', color: '#202124', textAlign: 'center' },
  hint: { fontSize: 16, color: '#555', textAlign: 'center', lineHeight: 24 },
  row: { padding: 20, gap: 8, minHeight: 44, borderBottomColor: '#ddd', borderBottomWidth: StyleSheet.hairlineWidth },
  pressed: { backgroundColor: '#eee' },
  title: { fontSize: 19, fontWeight: '600', color: '#202124' },
  summary: { fontSize: 16, color: '#555', lineHeight: 23 },
  meta: { fontSize: 12, color: '#666' },
});
