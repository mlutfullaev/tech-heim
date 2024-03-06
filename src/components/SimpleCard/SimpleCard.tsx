import cls from './SimpleCard.module.sass'
import {useNavigate} from "react-router-dom";

interface SimpleCardProps {
  img: string
  text: string
  link: string
}

const SimpleCard = ({img, text, link}: SimpleCardProps) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(link)}
      className={`shadow-1 br-8 ${cls.card}`}>
      <img className={cls.img} src={img} alt=""/>
      <p className={`body-md ${cls.text}`}>{text}</p>
    </div>
  );
};

export default SimpleCard;
