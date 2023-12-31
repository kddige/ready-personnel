import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <TextInput
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={content}
        onChangeText={setContent}
        placeholder="Content"
      />
      <TouchableOpacity>
        <Text>Publish post</Text>
      </TouchableOpacity>
    </View>
  );
}

const Index = () => {
  return (
    <SafeAreaView>
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View>
        <Text>
          Create <Text>T3</Text> Turbo
        </Text>

        <Button title="Refresh posts" color={"#f472b6"} />

        <View>
          <Text>Press on a post</Text>
        </View>

        <CreatePost />
      </View>
    </SafeAreaView>
  );
};

export default Index;
