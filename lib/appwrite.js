import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681951490017c91cab5a')
    .setPlatform('dev.saerom.first.ios.app');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);