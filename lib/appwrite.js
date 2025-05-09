import { Client, Account, Avatars } from 'appwrite'; //react-native-appwrite has a problem with setPlatform

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681951490017c91cab5a')

export const account = new Account(client);
export const avatars = new Avatars(client);
