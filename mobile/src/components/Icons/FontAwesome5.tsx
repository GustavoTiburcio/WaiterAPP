import Icon from 'react-native-vector-icons/FontAwesome5';

interface IconProps {
  name: string;
  size: number;
  color?: string;
}

export function FontAwesome5({ name, size, color }: IconProps) {
  return (
    <Icon name={name} size={size} color={color} />
  );
}
