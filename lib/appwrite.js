import { Client, Account, Avatars, Databases } from 'appwrite'; //react-native-appwrite has a problem with setPlatform

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681951490017c91cab5a')

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);