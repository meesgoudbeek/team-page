import { CardProps, MemberProps } from '../types/data';

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <>
      {item.map((member: MemberProps, index: number) => {
        return (
          <div key={member.name} className="card">
            <div className="card__container">
              <div className="image">
                <img
                  className="image__img"
                  src={member.image + '?' + index}
                  alt="Team member"
                />
              </div>
              <div className="content">
                <p className="content__name">{member.name}</p>
                <p className="content__role">{member.role}</p>
                {member.tags.map((tag, index) => (
                  <span key={index} className="content__tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
