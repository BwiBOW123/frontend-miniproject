import Link from "next/link";



const LoginForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login Now</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username *</label>
            <input type="text" id="username" name="username" placeholder="Enter your Username" className="mt-1 p-2 w-full border rounded-md text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password *</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password" className="mt-1 p-2 w-full border rounded-md text-black" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="remember" name="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">LOGIN</button>
        </form>
        <p className="mt-4 text-center text-sm">Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
      </div>
    </div>
  );
}

export default LoginForm;