import { usePage } from "../providers/RouterProvider";

const UserLogInpassword = () => {
  const { setPage } = usePage();

  return (
    <>
      <button onClick={() => setPage("UserLogIn")}>
        {" "}
        <i className="material-icons">arrow_forward</i>{" "}
      </button>
      <form>
        <p>הזן שם משתמש</p>
        <input type="text" />
        <p>הזן סיסמה</p>
        <input type="text" />
        <button type="button" onClick={() => setPage("IncorrectPassword")}>
          <i className="material-icons">check_box</i>
        </button>
      </form>
    </>
  );
};

export default UserLogInpassword;
