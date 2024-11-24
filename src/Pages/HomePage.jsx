import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
