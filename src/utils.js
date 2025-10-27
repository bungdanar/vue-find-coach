export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL

const firebaseIdToolkitUrl = import.meta.env.VITE_FIREBASE_ID_TOOLKIT_URL
const firebaseApikey = import.meta.env.VITE_FIREBASE_APIKEY
export const firebaseSignupUrl = `${firebaseIdToolkitUrl}?key=${firebaseApikey}`
