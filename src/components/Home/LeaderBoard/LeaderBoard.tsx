import { useEffect, useState } from "react";
import { UserType } from "../../../library/types";
import { Database } from "../../../library/firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { LeaderBoardItem } from "./LeaderBoardItem";

export function LeaderBoard() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRef = collection(Database, "user");
      const userQuery = query(userRef, orderBy("score", "desc"));
      const data = await getDocs(userQuery);
      setUsers(data.docs.map((doc) => ({ ...(doc.data() as UserType) })));
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto pb-20">
      <div className="my-4 border-b-2">
        <h2 className="text-xl font-bold leading-10">Leader Board</h2>
      </div>
      <div className="p-10 bg-[#e1e9f0] max-h-[500px] overflow-auto rounded-sm border shadow-lg">
        {users.map((player, index) => (
          <LeaderBoardItem key={index} player={player} index={index} />
        ))}
      </div>
    </div>
  );
}
