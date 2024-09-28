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
import { cn } from "@/lib/utils";

const Header = ({ className }: { className?: string }) => {
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
    <header
      className={cn(
        "w-full px-5 border-[2px] border-gray-500 dark:border-slate-300 rounded-xl backdrop-blur-xl flex flex-wrap items-center justify-between",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <Link to="/">
          <img src={Logo} alt="" className="logo -mb-3" />
        </Link>
      </div>
      <Timer />
      <Mouse />
      <nav>
        <ul className="flex gap-8">
          <li className="text-2xl hidden 2xl:block">
            <Link to="/scoreboard">Scoreboard</Link>
          </li>
          {isAuth && (
            <li className="text-2xl hidden 2xl:block">
              <Link to="/challenges">Challenges</Link>
            </li>
          )}
          <li className="text-2xl hidden 2xl:block">
            <Link to="/faq">FAQ</Link>
          </li>
          {!isAuth && (
            <li className="text-2xl hidden 2xl:block">
              <Link to="/login">Sign in</Link>
            </li>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="/logo.ico" className="animate-spin" />
                <AvatarFallback>{user?.userName[0]}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              {isAuth ? (
                <DropdownMenuItem>
                  <Link className="text-2xl w-full" to="/profile">
                    Profile
                  </Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem className="flex 2xl:hidden">
                  <Link className="text-2xl w-full" to="/login">
                    Sign in
                  </Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem className="flex 2xl:hidden">
                <Link className="text-2xl w-full" to="/scoreboard">
                  Scoreboard
                </Link>
              </DropdownMenuItem>
              {isAuth && (
                <DropdownMenuItem className="flex 2xl:hidden">
                  <Link className="text-2xl w-full " to="/challenges">
                    Challenges
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem className="flex 2xl:hidden">
                <Link className="text-2xl w-full" to="/faq">
                  FAQ
                </Link>
              </DropdownMenuItem>
              {isAuth && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <p
                      className="w-full text-2xl cursor-pointer"
                      onClick={logoutHandler}
                    >
                      Log out
                    </p>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
