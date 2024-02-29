import './Header.sass'
import Button from "@/ui/Button/Button.tsx";
import {ButtonColor, ButtonType} from "@/assets/js/types.ts";

const Header = () => {
  return (
    <header className="shadow-1">
      <div className="container header">
        <Button
          color={ButtonColor.ORANGE}
          type={ButtonType.OUTLINE}
          classNames={'button-lg'}>
          Add to cart
        </Button>
      </div>
    </header>
  );
};

export default Header;
