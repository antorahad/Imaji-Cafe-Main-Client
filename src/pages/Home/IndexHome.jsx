import BannerHome from '../Home/BannerHome';
import MenuHome from '../Home/MenuHome';
import EventsHome from '../Home/EventsHome';
import BlogHome from '../Home/BlogHome';
import ContactHome from '../Home/ContactHome';
const IndexHome = () => {
    return (
        <div>
            <BannerHome/>
            <MenuHome/>
            <EventsHome/>
            <BlogHome/>
            <ContactHome/>
        </div>
    );
};

export default IndexHome;