import { usePage } from "../providers/RouterProvider";

const UserRegistration = () => {
  const { setPage } = usePage();

  return (
    <>
      in UserRegistration{" "}
      <button onClick={() => setPage("HomePage")}>חזרה לעמוד הבית</button>
    </>
  );
};

export default UserRegistration;
