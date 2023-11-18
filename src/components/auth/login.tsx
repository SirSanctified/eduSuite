import { useState } from "react";
import { MdSchool } from "react-icons/md";
import { login } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../app/store";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LockIcon, User } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(login({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-4 space-y-4 my-auto bg-white rounded-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 flex gap-2 items-center justify-center">
          <MdSchool size={36} color="brown" />
          EduSuite
        </h1>
        <p className="text-center text-gray-500">Sign in to your account</p>
        <form
          onSubmit={onSubmit}
          className="space-y-4"
          autoComplete="off"
          autoFocus
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <div className="relative">
              <User size={24} className="absolute top-2 left-1 text-gray-400" />
              <Input
                type="username"
                id="username"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 pl-8 rounded-sm focus:outline-none focus:ring-0 focus-visible:ring-0"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <LockIcon
                size={24}
                className="absolute top-2 left-1 text-gray-400"
              />
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 pl-8 rounded-sm focus:outline-none focus:ring-0 focus-visible:ring-0"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember-me"
                className="w-4 h-4 border border-gray-500"
                data-checked-style="bg-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="block text-sm font-medium text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="/#"
                className="text-blue-500 font-semibold hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full mt-4 bg-blue-500 rounded-sm font-semibold"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
