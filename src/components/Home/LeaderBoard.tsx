import { useEffect, useState } from "react";
import { UserType } from "../../library/types";
import { Database } from "../../library/firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useAuthContext } from "../../library/firebase/firebaseAuth";

export function LeaderBoard() {
  const [users, setUsers] = useState<UserType[]>([]);

  const { user } = useAuthContext();

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
    <div className="max-w-screen-md  mx-auto pb-20">
      <div className="my-4 border-b-2">
        <h2 className="text-xl font-bold leading-10">Leader Board</h2>
      </div>
      <div className="p-10 bg-[#e1e9f0] max-h-[500px] overflow-auto rounded-sm border shadow-lg">
        {users.map((player, index) => {
          let medal = "";
          if (index === 0) {
            medal = "🥇";
          } else if (index === 1) {
            medal = "🥈";
          } else if (index === 2) {
            medal = "🥉";
          }
          return (
            <div key={index} className="w-full bg-white rounded  border my-3 ">
              <div>
                <div className="p-3">
                  <div className="uppercase tracking-wide text-sm text-[#16a34a] font-semibold rounded-md">
                    {medal ? (
                      <span className="text-3xl">{medal}</span>
                    ) : (
                      `#${index + 1}`
                    )}
                  </div>
                  <p className="block mt-1 text-lg leading-tight font-medium text-black">
                    {user
                      ? user.uid === player.id
                        ? "You"
                        : player.name
                      : player.name}
                  </p>
                  <p className="mt-2 text-gray-500">Score: {player.score}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
