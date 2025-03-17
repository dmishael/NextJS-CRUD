import { cn } from "../../lib/utils";

interface HeaderProps {
  title: string;
  center?: boolean;
  lg?: boolean;
}

const Header = ({ title, center, lg }: HeaderProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className={cn("font-bold text-2xl my-2", lg && "text-4xl")}>
        {title}
      </h1>
    </div>
  );
};

export default Header;
