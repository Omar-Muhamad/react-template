import { Link } from "react-router-dom";
import { PiUserCircleLight } from "react-icons/pi";

const SignInBtn = () => {
  return (
    <Link to="./sign-in">
      <button
        type="button"
        className="flex items-center gap-2 border border-neutral-800 dark:border-neutral-200 rounded-full px-4 py-2"
      >
        <span>Sign in</span>
        <PiUserCircleLight className="text-2xl" />
      </button>
    </Link>
  );
};
export default SignInBtn;
