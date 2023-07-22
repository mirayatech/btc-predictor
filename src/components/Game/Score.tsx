import { DocumentReference, doc, onSnapshot } from "firebase/firestore";
import { Database } from "../../library/firebase/firebase";
import { useState, useEffect } from "react";
import { UserType } from "../../library/types";

export function Score({ id }: { id?: string }) {
  const [user, setUser] = useState<UserType>();

  const usersDocumentRef = doc(
    Database,
    `user/${id}`
  ) as DocumentReference<UserType>;

  useEffect(
    () =>
      onSnapshot(usersDocumentRef, (doc) => {
        const docData = doc.data();
        if (docData) {
          setUser(docData);
        }
      }),

    []
  );

  return <p className="text-lg">Score: {user?.score}</p>;
}
