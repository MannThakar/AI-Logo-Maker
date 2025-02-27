import { doc, getDoc } from "firebase/firestore";

export const POST = async (req) => {
  const { userName, userEmail } = await req.json();
  try {
    const docRef = doc(db, userName, userEmail);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    }
    return NextResponse.json({});
  } catch (e) {
    console.log(e);
  }
};
