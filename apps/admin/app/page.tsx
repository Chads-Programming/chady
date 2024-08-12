const LOGIN_PATH = "http://localhost:3200/auth/discord/login";

export default function Home() {
  return (
    <div className="flex w-full flex-row justify-center items-center">
      <a href={LOGIN_PATH}>Login</a>
    </div>
  );
}
