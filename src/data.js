// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'team' },
  { href: '/', name: 'testimonials' },
  { href: '/', name: 'book a table' },
  { href: '/', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Bistro Cafe',
  subtitle:
    'Where Every Bite Tells a Story and Every Moment is a Culinary Symphony. ',
  btnText: 'Find out more',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'At Bistro Cafe, we are more than just a dining destination; we are architects of memorable moments, curators of exquisite flavors, and purveyors of a warm and inviting ambiance. Nestled in the heart of Egypt, our establishment is a celebration of culinary craftsmanship and a haven for those seeking an extraordinary dining experience.',
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: ' Chocolate Cake',
      price: '$7.99',
      description: 'Prepare to surrender to the allure of pure indulgence with our exquisite Chocolate Cake. Crafted with precision and passion, each slice is a journey into the heart of cocoa-rich ecstasy.',
    },
    {
      image: MenuImg2,
      name: 'King Burger',
      price: '$9.49',
      description: 'Experience royalty on a bun with our King Burger – a succulent, flame-grilled patty, draped in melted cheese, adorned with crispy bacon, and served with a side of golden fries.',
    },
    {
      image: MenuImg3,
      name: 'Mexican Burger',
      price: '$8.50',
      description: 'Indulge your taste buds in a burst of Mexican flavors with our signature Mexican Burger. Grilled to perfection, each bite is a harmonious blend of savory spices, creamy guacamole, crispy tortilla strips,',
    },
    {
      image: MenuImg4,
      name: 'Veggie Burger',
      price: '$9.99',
      description: 'Savor a symphony of fresh flavors in every bite of our Veggie Burger. Packed with a house-made veggie patty, melted cheese, creamy avocado, and crisp veggies, it is a delightful experience that proves plant-based can be just as delicious.',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Prepare your taste buds for a culinary journey like no other, orchestrated by the mastermind behind our kitchen, Chef Ramy Samir. With a passion for flavors that dance on the palate and a dedication to crafting unforgettable dining experiences, Chef Ramy is the heartbeat of our gastronomic haven.',
  sub2: 'More than a chef, Ramy Samir is a culinary artist fueled by an unwavering passion for food. His dedication to perfection is palpable in every presentation, with each plate telling a tale of creativity, precision, and devotion to the craft.',
  name: 'ramy samir',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
      'Dining atBistro Cafeis not just a meal ; it s a sensory experience. The flavors are a dance on the palate, and the service is unmatched. The attention to detail is extraordinary, making each visit a celebration. Bravo to the entire team!.',
      image: Avatar1,
      name: 'The weeknd',
      occupation: 'Best artist in the history',
    },
    {
      message:
      'consider myself a food enthusiast, and Bistro Cafe has set a new standard for excellence. The menu is a journey through flavors, and each dish is a culinary marvel. Whether you are a foodie or just looking for a memorable dining experience, this place is a must-visit!.',
      image: Avatar2,
      name: 'Elsayed Agamy',
      occupation: 'Software Engineer',
    },
    {
      message:
        'Dining at Bistro Cafe is like attending a culinary symphony. Each dish is a masterpiece, and the flavors are orchestrated to perfection. From the first bite to the last, its a culinary journey that leaves you craving an encore!.',
      image: Avatar3,
      name: 'Fahmy.',
      occupation: 'Software Engineer',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: 'alexandria,Elgish road stanley ',
    phone: '(03)308-7586',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
