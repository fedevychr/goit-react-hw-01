import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  console.log('stats: ', stats);
  return (
    <div className={css.card}>
      <div className={css.userInfo}>
        <img className={css.img} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
