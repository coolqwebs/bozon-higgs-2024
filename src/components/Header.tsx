import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Timer from "@/components/Timer";
import Logo from "@/assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { api } from "@/store/api";
import { setIsAuth } from "@/store/slice";
import Mouse from "./Mouse";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const logoutHandler = () => {
    dispatch(setIsAuth(false));
    localStorage.clear();
    dispatch(api.util.resetApiState());
    navigate("/");
  };

  return (
    <header className="w-[80%] px-12 py-2 border-[2px] border-gray-500 dark:border-slate-300 rounded-xl backdrop-blur-xl flex items-center justify-between">
      <div className="flex items-center justify-center gap-8">
        <Link to="/">
          <img src={Logo} alt="" className="logo" width="400" height="20" />
        </Link>
      </div>
      <Timer className="md:order-last lg:-order-none" />
      <Mouse />
      <nav>
        <ul className="flex gap-8">
          <li className="text-xl">
            <Link to="/scoreboard">Scoreboard</Link>
          </li>
          {isAuth && (
            <li className="text-xl">
              <Link to="/challenges">Challenges</Link>
            </li>
          )}
          <li className="text-xl">
            <Link to="/faq">FAQ</Link>
          </li>

          {!isAuth ? (
            <li className="text-xl">
              <Link to="/login">Sign in</Link>
            </li>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="/logo.ico" className="animate-spin" />
                  <AvatarFallback>{user?.userName[0]}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <p className="cursor-pointer" onClick={logoutHandler}>
                    Log out
                  </p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
