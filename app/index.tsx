import { Link } from "expo-router";
import { ThemedView, ThemedLogo, Spacer, ThemedText } from "../components";

const Home = () => {
  return (
      <ThemedView className="pt-6 p-4 flex-1 items-center justify-center">
        <ThemedLogo />
        <Spacer height={20} />

        <ThemedText title className="font-bold text-lg">The Number 1</ThemedText>

        <Spacer height={10} />
        <ThemedText>Reading List App</ThemedText>
        <Spacer />

        <Link className="underline" href="/login">
          <ThemedText>Login Page</ThemedText>
        </Link>
        <Link className="underline" href="/register">
          <ThemedText>Register Page</ThemedText>
        </Link>
        <Link className="underline" href="/profile">
          <ThemedText>Profile Page</ThemedText>
        </Link>
      </ThemedView>
  )
}

export default Home
