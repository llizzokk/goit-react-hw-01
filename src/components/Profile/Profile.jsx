import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainInfo}>
        <img className={styles.userPhoto} src={image} alt="User avatar" /> 
        <p className={styles.userName}>{name}</p>   
        <p className={styles.userTag}>@{tag}</p>   {" "}
        <p className={styles.userLocation}>{location}</p> 
      </div>
      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
                <span className={styles.statsName}>Followers</span>     {" "}
          <span className={styles.statsCount}>{stats.followers}</span> 
        </li>
        <li className={styles.statsItem}>
                <span className={styles.statsName}>Views</span>     {" "}
          <span className={styles.statsCount}>{stats.views}</span> 
        </li>
        <li className={styles.statsItem}>
                <span className={styles.statsName}>Likes</span>     {" "}
          <span className={styles.statsCount}>{stats.likes}</span> 
        </li>
      </ul>
    </div>
  );
};

export default Profile;
