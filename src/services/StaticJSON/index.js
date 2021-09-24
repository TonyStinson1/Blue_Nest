import moment from 'moment';

import BlogImage1 from '../../assets/images/blog/featured1.jpg';
import BlogImage2 from '../../assets/images/blog/featured2.jpg';
import BlogImage3 from '../../assets/images/blog/featured3.jpg';
import BlogImage4 from '../../assets/images/blog/featured4.jpg';
import BlogImage5 from '../../assets/images/blog/featured4.jpg';
import userImage1 from '../../assets/images/blog/comment1.jpg';
import userImage2 from '../../assets/images/blog/comment2.jpg';

import teamImage1 from '../../assets/images/team/team1.jpg';
import teamImage2 from '../../assets/images/team/team2.jpg';
import teamImage3 from '../../assets/images/team/team3.jpg';
import teamImage4 from '../../assets/images/team/team4.jpg';

import priceImage1 from '../../assets/images/bicycle.png';
import priceImage2 from '../../assets/images/vespa-1.png';
import priceImage3 from '../../assets/images/car.png';


/* ---- load Tabs images ------ */
import tab1Image from '../../assets/images/portfolio/work1.jpg';
import tab2Image from '../../assets/images/portfolio/work2.jpg';
import tab3Image from '../../assets/images/portfolio/work3.jpg';
import tab4Image from '../../assets/images/portfolio/work4.jpg';

import Insta1 from '../../assets/images/instagram/insta1.jpg';
import Insta2 from '../../assets/images/instagram/insta2.jpg';
import Insta3 from '../../assets/images/instagram/insta3.jpg';
import Insta4 from '../../assets/images/instagram/insta4.jpg';
import Insta5 from '../../assets/images/instagram/insta5.jpg';
import Insta6 from '../../assets/images/instagram/insta6.jpg';

/* -------------------- client image ---------------- */
import clientImage1 from '../../assets/images/clients/client1.png';
import clientImage2 from '../../assets/images/clients/client2.png';
import clientImage3 from '../../assets/images/clients/client3.png';
import clientImage4 from '../../assets/images/clients/client4.png';

/* -------------------- client image ---------------- */
import portfioImag1 from "../../assets/images/portfolio/work1.jpg";
import portfioImag2 from "../../assets/images/portfolio/work2.jpg";
import portfioImag3 from "../../assets/images/portfolio/work3.jpg";
import portfioImag4 from "../../assets/images/portfolio/work4.jpg";
import portfioImag5 from "../../assets/images/portfolio/work5.jpg";
import portfioImag6 from "../../assets/images/portfolio/work6.jpg";


function getBlogPostList() {
    return {
        mainBlog: [
            { title: "12+ Amazing Growth Hacking Tips and Tricks", image: BlogImage1, comment: "24", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis." },
            { title: "10 Tips to Validate Your Next Startup Idea", image: BlogImage2, comment: "24", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis." },
            { title: "How to Create Successful Website for Your Agency", image: BlogImage3, comment: "24", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis." }
        ],
        postwithImage: [{
                delay: '.2s',
                image: BlogImage1,
                date: 'Jan 25 2020',
                title: 'MUSIC for refreshment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24'
            },
            {
                delay: '.3s',
                srce: BlogImage2,
                date: 'Sep 25 2020',
                title: 'Muhammad Ali',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24 '
            },
            {
                delay: '.3s',
                image: BlogImage3,
                date: 'Feb 25 2020',
                title: 'Kelly Grover',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24 '
            },
            {
                delay: '.4s',
                image: BlogImage4,
                date: 'Mar 25 2020',
                title: 'We support your custom',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24 '
            },
            {
                delay: '.5s',
                image: BlogImage5,
                date: 'April 25 2020',
                title: 'We love photography',
                data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24 '
            },
        ],
        postwithoutImage: [{
                delay: '.3s',
                date: 'Sep 25 2020',
                title: 'Muhammad Ali',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24 '
            },
            {
                delay: '.5s',
                date: 'Oct 25 2020',
                title: 'Bruce Wayne',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24 '
            },
            {
                delay: '.6s',
                date: 'Nov 25 2020',
                title: 'Clark Kent',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24 '
            },
            {
                delay: '.7s',
                date: 'Dec 25 2020',
                title: 'Peter Parker',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis assumenda ipsum maiores dolorum similique obcaecati perspiciatis.',
                comment: '24 '
            },
        ],
        category: [
            { name: 'Lifestyle (21)' }, { name: 'Photography (19)' }, { name: 'Journal (16)' }, { name: 'Works (7)' }
        ],
        messageHistory: [{
                sender: {
                    userName: 'John Doe',
                    image: userImage1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti accusantium earum vitae aperiam eos dolorum quidem, architecto tenetur molestiae!'
                },
                receiver: {
                    userName: 'Cristiana',
                    image: userImage2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti accusantium earum vitae aperiam eos dolorum quidem, architecto tenetur molestiae!'
                }
            },
            {
                sender: {
                    userName: 'Javed',
                    image: userImage1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti accusantium earum vitae aperiam eos dolorum quidem, architecto tenetur molestiae!'
                },
                receiver: {
                    userName: 'Cristiana',
                    image: userImage2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti accusantium earum vitae aperiam eos dolorum quidem, architecto tenetur molestiae!'
                }
            }
        ],
        instagramList: [
            { image: Insta1 },
            { image: Insta2 },
            { image: Insta3 },
            { image: Insta4 },
            { image: Insta5 },
            { image: Insta6 },
        ]
    };
}

function getTeamMember() {
    return {
        mainList: [{ username: "Rob Percy", position: "Co-Founder", image: teamImage1, delay: ".2s" },
            { username: "Jennifer L.", position: "Graphic Designer", image: teamImage2, delay: ".3s" },
            { username: "Tom Hanks.", position: "SEO Speacialist", image: teamImage3, delay: ".4s" },
            { username: "Emma Watson", position: "Head Of Ideas", image: teamImage4, delay: ".5s" }
        ],
    }
}

function getCounter() {
    return {
        list1: [
            { title: "Project done", timer: 347, icon: "mdi-check-all", delay: ".2s" },
            { title: "Working Hours", timer: 8896, icon: "mdi-clock", delay: ".3s" },
            { title: "Team Member", timer: 35, icon: "mdi-account-multiple-outline", delay: ".4s" },
            { title: "Happy Clients", timer: 233, icon: "mdi-sticker-emoji", delay: ".5s" }
        ],
        list2: [
            { title: "Project Delivered", timer: 768, icon: "mdi-medical-bag", delay: ".2s" },
            { title: "Working Hours", timer: 900, icon: "mdi-clock", delay: ".3s" },
            { title: "Work Station", timer: 215, icon: "mdi-cellphone-link", delay: ".4s" },
            { title: "International Clients", timer: 553, icon: "mdi-cisco-webex", delay: ".5s" }
        ]
    }
}

function getServices() {
    return {
        servicesList1: [
            { title: "Refreshing Design", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-arrange-send-backward", delay: ".2s" },
            { title: "Solid Bootstrap 4", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-code-tags-check", delay: ".3s" },
            { title: "100+ Components", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-grid", delay: ".4s" },
            { title: "Regular Updates", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-update", delay: ".5s" },
            { title: "Speed Optimized", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-speedometer", delay: ".6s" },
            { title: "Fully Customizable", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-shape-plus", delay: ".7s" }
        ],
        servicesList2: [
            { title: "20+ HTML Pages", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-language-html5", delay: ".2s" },
            { title: "Multiple Variations", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-file-tree", delay: ".3s" },
            { title: "Feature-Rich Sections", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-tune", delay: ".4s" },
            { title: "Highly-Customizable", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-tune", delay: ".5s" },
            { title: "100+ UI Elements", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-package-variant", delay: ".6s" },
            { title: "Simplified Design", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-crown", delay: ".7s" }
        ]
    }
}

function getAccording() {
    return {
        darkArray: [
            { title: "What People say about us", icon: "mdi-briefcase-check" },
            { title: "Frequently asked questions", icon: "mdi-information" },
            { title: "Know more about us", icon: "mdi-checkbox-multiple-blank" }
        ],
        defaultArray: [
            { title: "About Material Agency", icon: "mdi-checkbox-multiple-blank" },
            { title: "What We Do", icon: "mdi-briefcase-check" },
            { title: "Services We Provide", icon: "mdi-account-multiple" }
        ]
    }
}

function getButton() {
    return [
        { name: "Default", color: "btn-default", icon: "mdi-bookmark-outline" },
        { name: "Primary", color: "btn-primary", icon: "mdi-code-tags" },
        { name: "Success", color: "btn-success", icon: "mdi-heart-outline" },
        { name: "Info", color: "btn-info", icon: "mdi-star" },
        { name: "Warning", color: "btn-warning", icon: "mdi-format-strikethrough-variant" },
        { name: "Danger", color: "btn-danger", icon: "mdi-map-marker" },
        { name: "Link", color: "btn-link", icon: "mdi-trending-up" }
    ];
}

function getIconsList() {
    return [
        { icon: 'mdi-human' },
        { icon: 'mdi-lightbulb-outline' },
        { icon: 'mdi-fingerprint' },
        { icon: 'mdi-eye' },
        { icon: 'mdi-view-quilt' },
        { icon: 'mdi-trending-up' },
        { icon: 'mdi-store' },
        { icon: 'mdi-format-line-style' },
        { icon: 'mdi-comment-outline' },
        { icon: 'mdi-camera' },
        { icon: 'mdi-code-tags' },
        { icon: 'mdi-star' },
        { icon: 'mdi-delete' },
        { icon: 'mdi-map-marker' }
    ];
}

function getPrices() {
    return {
        priceBlock1: [{
                plan: "Basic",
                price: "5.50",
                image: priceImage1,
                user: "1",
                projects: "Limited",
                storage: "2GB"
            },
            {
                plan: "Standard",
                price: "9.90",
                image: priceImage2,
                user: "2",
                projects: "Unlimited",
                storage: "20GB"
            },
            {
                plan: "Premium",
                price: "100.90",
                image: priceImage3,
                user: "20",
                projects: "Unlimited",
                storage: "200GB"
            }
        ],
        priceBlock2: [{
                plan: "FREE",
                price: "3.99",
                user: "Unlimited",
                support: "Free",
                track: "No Time Tracking",
                setup: "Free"
            },
            {
                plan: "PREMIUM",
                price: "5.99",
                user: "Unlimited",
                support: "Free",
                track: "No Time Tracking",
                setup: "Free"
            },
            {
                plan: "PLATINUM",
                price: "9.99",
                user: "Unlimited",
                support: "Free",
                track: "No Time Tracking",
                setup: "Free"
            }
        ],
        priceBlock3: [{
                plan: "Basic",
                price: "5.99",
                user: "Unlimited",
                support: "Free",
                track: "No Time Tracking",
                setup: "Free",
                offer: "30 DAYS FREE TRIAL"
            },
            {
                plan: "Standard",
                price: "9.59",
                user: "Unlimited",
                support: "Free",
                track: "No Time Tracking",
                setup: "Free",
                offer: "10% DISCOUNT ON RENEWAL"
            },
            {
                plan: "Premium",
                price: "89.50",
                user: "Unlimited",
                support: "Free",
                track: "No Time Tracking",
                setup: "Free",
                offer: "30% DISCOUNT ON RENEWAL"
            }
        ]
    }
}

function getTabs() {
    return {
        tabList: [
            { id: "home", img: tab1Image, title: "Perferendis et, veritatis enim voluptatem libero" },
            { id: "profile", img: tab2Image, title: "Delectus, aut ut totam quam inventore suscipit." },
            { id: "messages", img: tab3Image, title: "voluptatum itaque at. Expedita impedit facere." },
            { id: "settings", img: tab4Image, title: "Lorem ipsum dolor sit amet, consectetur adi." }
        ]
    }
}

function getClientList() {
    return [
        { image: clientImage1 }, { image: clientImage2 }, { image: clientImage3 }, { image: clientImage4 },
        { image: clientImage1 }, { image: clientImage2 }, { image: clientImage3 }, { image: clientImage4 }
    ];
}

function getPortfolioList() {
    return {
        portfolioList: [
            { type: "Business", title: "A boat of hope", location: "Istambul, Turkey", image: portfioImag1, delay: ".2s", class: "business blog" },
            { type: "Development", title: "Visit to moon", location: "Nasa, USA", image: portfioImag2, delay: ".3s", class: "education more" },
            { type: "Creative", title: "Lighthouse of Cox", location: "Chittagong, Bangladesh", image: portfioImag3, delay: ".4s", class: "education blog" },
            { type: "Education", title: "Bug of the day", location: "Delhi, India", image: portfioImag4, delay: ".5s", class: "creative more business" },
            { type: "Blog", title: "Loard of the ring", location: "Novel, USA", image: portfioImag5, delay: ".5s", class: "more free creative" },
            { type: "Business", title: "Wings of paper", location: "Venis, Italy", image: portfioImag6, delay: ".5s", class: "blog business" }

        ]
    }
}

function getTableViewRecored() {
    return [
        { _id: 1, name: "Cristiana Rol", email: "cristiana@gmail.com", position: "Co-Founder", createdAt: moment().subtract(2, 'day') },
        { _id: 12, name: "HEMANT PATEL", email: "hemant@elemensis.com", position: "Web Developer", createdAt: moment().subtract(4, 'day') },
        { _id: 55, name: "Pankaj SWAMI", email: "pankaj@elemensis.com", position: "Web Developer", createdAt: moment().subtract(7, 'day') },
        { _id: 41, name: "Tom Hanks", email: "tom@hanks.com", position: "App Developer", createdAt: moment().subtract(1, 'day') },
        { _id: 61, name: "Jennifer L", email: "jennifer@gmail.com", position: "SEO Speacialist", createdAt: moment().subtract(8, 'day') },
        { _id: 67, name: "Rob Percy", email: "rob@gmail.com", position: "Co-Founder" },
        { _id: 69, name: "Emma Watson", email: "waston@gmail.com", position: "Graphic Designer", createdAt: moment().subtract(9, 'day') }

    ];
}
export default {
    getBlogPostList,
    getTeamMember,
    getCounter,
    getServices,
    getAccording,
    getButton,
    getIconsList,
    getPrices,
    getTabs,
    getClientList,
    getPortfolioList,
    getTableViewRecored
};