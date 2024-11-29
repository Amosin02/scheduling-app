export default function WelcomePage() {
  return (
    <div className="p-4">
      <h1 className="text-xl">Sign In</h1>
      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" className="border border-black" />

        <label htmlFor="password" className="ml-2">
          Password:{' '}
        </label>
        <input type="password" id="password" className="border border-black" />
      </form>
    </div>
  );
}
