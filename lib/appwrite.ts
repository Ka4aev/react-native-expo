import { Client, Account, Avatars }  from "react-native-appwrite";

export const client = new Client()
    .setProject("69a959140006b70b228c")
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setPlatform("dev.ka4aev.shelfie");

export const account = new Account(client)
export const avatars = new Avatars(client)