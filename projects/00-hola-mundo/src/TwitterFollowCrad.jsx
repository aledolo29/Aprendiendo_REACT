import { useState } from "react";
export function TwitterFollowCard({
  // formattedUserName, --> ELEMENTO
  // formatUserName, // --> COMPONENTE
  // eslint-disable-next-line react/prop-types
  userName = "unknown",
  // name,
  // eslint-disable-next-line react/prop-types
  initialIsFollowing,
  // eslint-disable-next-line react/prop-types
  children,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  const imageSrc = `https://unavatar.io/instagram/${userName}`; //Así o directamente poner la el ${} abajo en el string de la url entre llaves {}
  const texto = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is--following"
    : "tw-followCard-button";
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSrc} alt="Avatar" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUsername">
            @{userName /*formatUserName(userName) formattedUserName*/}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {texto}
        </button>
      </aside>
    </article>
  );
}
