import Button from '@/components/Button';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 p-4">
      <Text className="text-3xl font-bold text-white p-2">Feed</Text>
      <Button />
    </View>
  );
}
