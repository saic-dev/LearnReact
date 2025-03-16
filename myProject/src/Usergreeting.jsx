function Usergreeting(props)
{
    const welcomemsg=<h2 className="WELCOME">Welcome</h2>;
    const login=<h2 className="LOGIN"> Please Log In</h2>
   return (props.isLoggedIn?welcomemsg:login);
}
export default Usergreeting