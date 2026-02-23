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
      <div className="flex-column">
        <p>
          Hey there! I&apos;m Yeunha Kim, a software engineer based in Los
          Angeles. I&apos;m all about building thoughtful software, solving
          complex problems, and shipping products that are reliable in the real
          world. I love working on agentic AI systems and turning messy
          workflows into clear, usable experiences, with a strong focus on
          safety and ethical use of AI in real-world systems.
        </p>
        <div className="about-education">
          <p>Education</p>
          <p>
            M.S. in Computer Science, GPA 4.0 - Georgia Institute of Technology
            (exp. 2027)
          </p>
          <p>
            M.S. in Chemical Engineering - University of California, Los Angeles
          </p>
          <p>
            B.S. in Chemical Engineering - University of California, Los Angeles
          </p>
        </div>
      </div>
    </div>
  );
};
