import { CardProps, MemberProps } from '../types/data';

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <>
      {item.map((member: MemberProps, index: number) => {
        return (
          <div key={member.name} className="grid-item">
            <div className="card">
              <div className="card__container">
                <div className="image">
                  <img src={member.image + '?' + index} alt="Team member" />
                </div>
                <div className="content">
                  <p>{member.name}</p>
                  <p>{member.role}</p>
                  <p>{member.tags}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
