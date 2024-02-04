import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignIn = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoggleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Congratulation",
                    text: "You logged in successfully",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Congratulation",
                    text: "You logged in successfully",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10">
            <div className="flex flex-col gap-7 w-full md:w-1/2 lg:w-1/3 bg-white p-5 border rounded-md">
                <h1 className="text-4xl font-bold text-center text-custom">Sign In</h1>
                <button onClick={handleGoggleSignIn} className="btn bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 border-none outline-none rounded-md px-7"> <FcGoogle size={25} /> Sign in Google</button>
                <p className="text-center font-semibold">Or sign in with</p>
                <form onSubmit={handleSignIn} className="flex flex-col gap-5">
                    <input type="email" name="email" placeholder="User Email" className="input input-bordered" />
                    <input type="password" name="password" placeholder="User Password" className="input input-bordered" />
                    <input type="submit" value="Sign In" className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md px-7" />
                </form>
                <p className="text-xs text-center">New to Imaji cafe? <Link to={'/signup'} className="underline">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default SignIn;