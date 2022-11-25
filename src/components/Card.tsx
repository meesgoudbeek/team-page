import { MemberProps } from '../types/data';
import LightBox from './Lightbox';

const Card = ({ item }: any) => {
  return (
    <>
      {item.map((member: MemberProps, index: number) => {
        return (
          <div key={member.name} className="card">
            <div className="card__container">
              <div className="image">
                <LightBox src={member.image + '?' + index} alt={member.name}>
                  <img
                    className="image__img"
                    src={member.image + '?' + index}
                    alt={member.name}
                  />
                </LightBox>
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
