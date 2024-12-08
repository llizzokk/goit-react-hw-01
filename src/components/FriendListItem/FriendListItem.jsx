import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      <p
        className={clsx(
          styles.friendIsOnline,
          isOnline ? styles.isOnline : styles.isOffline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendListItem;
