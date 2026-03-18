import { Text, TouchableOpacity } from "react-native";

type BtnBackProps = {
  onPress?: () => void;
};

export function BtnBack({ onPress }: BtnBackProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: "#007AFF",
        borderRadius: 5,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Voltar</Text>
    </TouchableOpacity>
  );
}
