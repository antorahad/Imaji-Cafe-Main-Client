import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Congratulation",
                    text: "Your account has been created",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
                const email = result.user.email;
                const creatAt = result.user.metadata.creationTime;

                const newUser = {
                    email,
                    creatAt
                }
                fetch('https://imaji-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10">
            <div className="flex flex-col gap-7 w-full md:w-1/2 lg:w-1/3 bg-white p-5 border rounded-md">
                <h1 className="text-4xl font-bold text-center text-custom">Sign Up</h1>
                <form onSubmit={handleSignUp} className="flex flex-col gap-5">
                    <input type="email" name="email" placeholder="User Email" className="input input-bordered" />
                    <input type="password" name="password" placeholder="User Password" className="input input-bordered" />
                    <input type="submit" value="Sign Up" className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md px-7" />
                </form>
                <p className="text-xs text-center">Member of Imaji cafe? <Link to={'/signin'} className="underline">Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;