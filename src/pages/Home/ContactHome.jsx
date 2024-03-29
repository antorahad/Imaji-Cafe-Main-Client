import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
const ContactHome = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    const handleSendMessage = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const newMessage = {
            name,
            email,
            message
        }
        console.log(newMessage);

        fetch('https://imaji-server.vercel.app/messages', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newMessage)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Success",
                    text: "Message has been sent",
                    icon: "success"
                });
                form.reset()
            }
        })
    }
    return (
        <div className="py-10 px-5 max-w-7xl mx-auto" data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div className="space-y-4 text-center">
                <h1 className="text-5xl font-bold">Contact Us</h1>
                <p>For details, contact us professionally.</p>
            </div>
            <div className='flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between gap-5 mt-10'>
                <div className='w-full lg:w-1/2'>
                    <iframe className='rounded-md w-full h-[460px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58398.25195556627!2d90.31569810424551!3d23.822483734594424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a7acb51d71%3A0xbc6f965356941a96!2sUnimart%20Gulshan%202!5e0!3m2!1sen!2sbd!4v1707053378127!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='w-full lg:w-1/2'>
                    <form onSubmit={handleSendMessage} className="flex flex-col gap-3 w-full bg-white border rounded-md p-5">
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered rounded-md" />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered rounded-md" />
                        <textarea name='message' className="w-full textarea textarea-bordered rounded-md h-60" placeholder="Type Your message"></textarea>
                        <input type="submit" value="Send Message" className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;