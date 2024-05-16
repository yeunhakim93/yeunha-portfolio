import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";

export const About: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <div className="card flex-row flex-gap-40 about">
      <div className="profile-container">
        <img src={profile1} />
        <img
          className="profile-dark"
          src={profile2}
          style={{ opacity: isDark ? 1 : 0 }}
        />
      </div>
      <p>
        Welcome to my page! I'm Yeunha, a full-stack software engineer with
        extensive experience in developing scalable SaaS applications. My
        professional journey has honed my ability to manage complex projects
        with shifting priorities, always ensuring robust solutions and
        maintainable code. As a committed team player, I excel in fostering
        communication and collaboration to drive success. Thank you for
        visiting!
      </p>
    </div>
  );
};
