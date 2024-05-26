import { getUser } from "../../lib/data";
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   return res.json();
// };
export default async function PostUser({ userId }) {
  // const user = await getData(userId);
  const user = await getUser(userId);
  return <div className="text-sm mb-2">By {user.username}</div>;
}
