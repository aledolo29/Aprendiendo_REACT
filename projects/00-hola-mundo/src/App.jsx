import { TwitterFollowCard } from "./TwitterFollowCrad";
import "./App.css";
const users = [
  {
    userName: "aledolo",
    name: "Alejandro Dominguez",
    isFollowing: true,
  },
  {
    userName: "maria10",
    name: "Maria Vazquez",
    isFollowing: false,
  },
  {
    userName: "juancho",
    name: "Juan Perez",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          initialIsFollowing={user.isFollowing}
        >
          {user.name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
// import { useState } from "react";
// export function App() {
//   // const formatUserName = (userName) => `@${userName}`;
//   // const formattedUsertName = <span>@aledolo</span>;
//   // const [name, setName] = useState("aledolo");
//   return (
//     // <React.Fragment> // Esto es lo mismo que <>
//     <section className="App">
//       <TwitterFollowCard
//         // formatUserName={formatUserName}
//         // formattedUserName={formattedUsertName}
//         userName="aledolo"
//         // name="Alejandro Dominguez"
//         initialIsFollowing={true}
//       >
//         Alejandro Dominguez
//       </TwitterFollowCard>
//       <TwitterFollowCard
//         // formatUserName={formatUserName}
//         // formattedUserName={formattedUsertName}
//         userName="maria10"
//         // isFollowing={true} // Si no se pone nada es true
//       >
//         Maria Vazquez
//       </TwitterFollowCard>
//       {/* <button onClick={() => setName("pedroMiquel")}>Cambio nombre</button> */}
//     </section>
//     //</React.Fragment> // Esto es lo mismo que </>
//   );
// }
