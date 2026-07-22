import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getCountFromServer, collection, serverTimestamp, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/**
 * Enregistre la visite si c'est une nouvelle adresse IP
 * Et retourne le nombre total d'IPs uniques connectées
 */
export async function recordVisitAndGetCount(): Promise<number> {
  if (!firebaseConfig.apiKey) {
    console.warn("Firebase n'est pas configuré. Le compteur ne fonctionnera pas en dev si .env est manquant.");
    return 0;
  }

  try {
    // 1. Récupérer l'IP du visiteur (via un service gratuit simple)
    const ipRes = await fetch('https://api.ipify.org?format=json');
    const { ip } = await ipRes.json();
    const safeIp = ip.replace(/\./g, '_').replace(/:/g, '_'); // Safe document ID

    const docRef = doc(db, "visitors", safeIp);
    const docSnap = await getDoc(docRef);

    // 2. Si c'est une nouvelle IP, on l'enregistre (seulement sa 1ère visite)
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        firstVisit: serverTimestamp(),
      });
    }

    // 3. Récupérer le total des visiteurs uniques (rapide et peu coûteux avec le SDK)
    const collRef = collection(db, "visitors");
    const snapshot = await getCountFromServer(collRef);
    return snapshot.data().count;
    
  } catch (error) {
    console.error("Erreur compteur Firebase:", error);
    return 0;
  }
}
