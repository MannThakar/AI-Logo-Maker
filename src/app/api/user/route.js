import { db } from "@/config/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { userName, userEmail } = await req.json();

    if (!userName || !userEmail) {
      return NextResponse.json({ error: "Missing user data" }, { status: 400 });
    }

    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    } else {
      const data = {
        name: userName,
        email: userEmail,
        credits: 5,
      };

      await setDoc(doc(db, "users", userEmail), {
        ...data,
      });
      return NextResponse.json(data);
    }
  } catch (e) {
    console.error("Error in API:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
