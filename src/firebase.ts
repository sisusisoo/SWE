
//import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaCX2b16Y_heD5PCO86Jtc2Exeq2cCYrs",
  authDomain: "nwitter-reloaded-ccf78.firebaseapp.com",
  projectId: "nwitter-reloaded-ccf78",
  storageBucket: "nwitter-reloaded-ccf78.appspot.com",
  messagingSenderId: "869173585310",
  appId: "1:869173585310:web:6d514260b9f8f79058228f"
};
const serviceAccount = {
  "type": "service_account",
  "project_id": "nwitter-reloaded-ccf78",
  "private_key_id": "ad3adbf96bb3fd065925326ade63fcf12d01f875",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD3Af9qCLH3byX0\nhEuxPwiXkLCcYkf9p746/h+AY1jOmYr1y7C2mb+goomP+a8DLgJpKRhGYWYpDRKK\neiK/MHZhNz7aYK5C2nTyVosTj7LoFjapnpRJzaJPZVI6fr8iaq4LKhiGirRGUpzA\nS4iFimrNokk6e+5muzfv5LUXYtKBC8XDDNcibeScbM5R4eWP5tTlaSUHlXQYJf2U\nhvMDKxhyzQvfDUtS6/i3/zcushaFUVosUxSRuUtkfT/rAwxkYyjtZNYCKOD7ymTs\nIoVK/w2/P8ESOTe51h7c/ffcLPe3EnPQa9v4MkhTIiEF3OVomSN9n0RYFT+dTO+a\nCUZXAgxbAgMBAAECggEACJwiQxfiOaaFCqwIl5ZJe23qNPoCCH3FUG1gx0U1ETbi\nSM4RDA6Q6gHqkm+wG+TycTOupJ3CP7rjJg/pW7JCh42cBQfZbJ6vaPnQePUgvpFG\nkDtNzPFThuhSo3yFzmyJnywYPcIoPMq9ZZH/W6inANuxV6shOo5PQ+ONqDqHBLfQ\nqpOoGFMuRIPkGTb4xYT8SAAszi4H10RHVN5pe5Cwy+6y82pXUbGYDVYSQSiC+/l4\n3Ng32OkfAYy/04GhTOboAI+5PULDric7Tuvja4j0PByPTKrk1NiDfzN1y/VPXRWN\nZtFpzcE6TD9oFVaW4W978Tcdk+8ErPt/2yNA1ReFdQKBgQD8zFb4OmbuTJ9bR2Ex\nNBgvzWsPbBk5ju4srvFB/hIIHYoNEIJd/ogaB1JpKLA+NksNyei64s5zyssBUEK1\nzyK3b9cHW+waKB6NHqrMiQArFA0Vvlk8gZ32Kx16EHYgoiadXZfE70PciNmC5wIx\nW8WXhasSEE595+Go9BFieOW7hQKBgQD6IuIsO4o9ZkOG0EXFRWVrNDuBy8Mxgxje\nyAS1H3weTpBWcXyWUCq5sP4GlcAZLhUqRCYrHxy67bH9DIltmn2QiSm0mfDF+Fn9\nWOYpywk3TN4/ysNqUcmN3VOwNpx+mUNQvsmwppONN/N2fmZq4TU2yvlek2daPOUc\n28mcbH5+XwKBgQDcXKNTLlWbVF91CfvHEEolIUM55lj2u4kSmkzj4b2GJXm5ebKq\njL3HMqq70CQRlvJFysN8ZUjh1tyvAG+mXDE/BdbDK3XcNyyqhxkLwkDLTGc7lPnk\nrHgtpdfEF6VhPPe8JWGu4YKeMwyn9wcKT50mP/angF9rkT48MMUWuZxIoQKBgQDl\nvliCTAWCs4TeNDmBIWYvewAVDTQxK7oSFSDNwydbJsnHu+C0ptk3SOto3O5dskfa\nVFHCVYcr4doTFAq90qH1uSXHLYVKL/tniNmOFWBXnJCdgvzNkGVRmbGeLeq7FMYR\nScsyJy1rDbLeaOZk0Ijx1KgKR9UruratNOoOdFASfQKBgQDG9BrWsvKcLo1oUd39\nynSGEu3ZNS7b4Ug3xt1dZRwD3ftezt9ZLgAEtA2B5x/WiJZS6zUqTOEpVlM1uZ97\noBPCPYFUaymqEcAH/JyOX83edcohixKScwfehUbKcbnsKR7EgU7eJkvIRI31tscg\nYUZccycP5h5ri8mPXOzzv7lrKw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xo6d2@nwitter-reloaded-ccf78.iam.gserviceaccount.com",
  "client_id": "105332974849840970067",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xo6d2%40nwitter-reloaded-ccf78.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

const app = initializeApp(firebaseConfig);


export const auth =getAuth(app);

export const storage=getStorage(app);

export const db=getFirestore(app);
