import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';



export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.Mohammadoz.Aoras",
    projectId: "6681556d001cd8cf7691",
    databaseId: "66816f3800000ffc340c",
    usersCollectionId: "668171a3000c1316de32",
    videosCollectionId: '66816fa30023a1beab24',
    storageId: "66af7698001c8017068e",

}

// 1- conncting 
// 2- create a user
// 3- Login








// 1- conncting 

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;



// 2- create a user

const account =new Account(client);
const avatar =new Avatars(client);
const databases =new Databases(client);

export const createUser = async  (email  , password,username) => {
try {
const newAccount = await account.create(
    ID.unique(),
    email,
    password,
  username,
)
if(!newAccount) throw Error
const avatarUrl =avatar.getInitials(username);
await Login(email,password)
const newUser = await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    ID.unique(),
    {    accountId:newAccount.$id,
         email,
         username,
        avatar:avatarUrl
    })
return newUser
} catch (error) {
    console.log(error,"line 69")
    throw new Error(error)
}}

//  3- Login
export const Login = async  (email ,password)=> {
try {

    // if (account.listSessions().length > 0) {
    //     await account.deleteSessions();
    //   }
    const session = await account.createEmailSession(email ,password);
return session
} catch (error) {
    console.log(error,"line 78")
    throw new Error(error)
}}


//  get current user

export const getCurrentUser = async () => {


try {
      const currentAccount = await account.get()

    if(!currentAccount) throw Error;

const currentUser = await databases.listDocuments(
appwriteConfig.databaseId,
appwriteConfig.usersCollectionId,
[Query.equal("accountId" ,currentAccount.$id)])

if(!currentUser) throw Error

return currentUser.documents[0]

} catch (error) {
    console.log(error,"line 103")
    throw Error(error)
}


 }





