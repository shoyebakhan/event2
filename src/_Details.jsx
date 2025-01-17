// import components

import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { light } from "@mui/material/styles/createPalette"

export const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ktecheducation.karauli",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/k.tech.education.karauli/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@ktecheducation",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const categories = [
  {
    name: 'Hotels',
    to: 'hotelscard',
    imageSrc: "https://i.postimg.cc/nzQCjFTR/hotels.jpg",
  },
  {
    name: 'Gardens',
    to: 'gardencard',
    imageSrc: "https://i.postimg.cc/JhNjpPRR/garden.jpg",
  },
  {
    name: 'Caterings',
    to: 'cateringcard',
    imageSrc: "https://i.postimg.cc/76PKwRVZ/catering.jpg",
  },
  {
    name: 'Salon & Parlour',
    to: 'saloncard',
    imageSrc: "https://i.postimg.cc/L8cXdKmj/salon.jpg",
  },
  {
    name: 'Fireworks',
    to: 'fireworkcard',
    imageSrc: "https://i.postimg.cc/KzswVF22/fireworks.jpgx",
  },

  {
    name: 'Grocery Stores',
    to: 'grocerycard',
    imageSrc: "https://i.postimg.cc/xd8WPqwR/grocery.jpg",
  },

  {
    name: 'Lights & Decorations',
    to: 'lightcard',
    imageSrc: "https://i.postimg.cc/KvdkbgNK/lights.jpg",
  },

  {
    name: 'Car',
    to: 'carcard',
    imageSrc: "https://i.postimg.cc/vTvsNk3L/car.jpg",
  },

  {
    name: 'Cards Printing',
    to: 'cardsprintingcard',
    imageSrc: "https://i.postimg.cc/bYSL91sr/cards.jpg",
  },

  {
    name: 'Sounds',
    to: 'soundscard',
    imageSrc: "https://i.postimg.cc/vm16wtR6/dj.jpg",
  },
  {
    name: 'Photography',
    to: 'photographycard',
    imageSrc: "https://i.postimg.cc/SKP76Mb9/photoshoot.jpg",
  },
  {
    name: 'Mare',
    to: 'marecard',
    imageSrc: "https://i.postimg.cc/mZ1RyfC1/mare.png",
  },
]

export const fireworksObj = [
  {
    name: "S.K Fireworks",
    phone: "8058851259",
    address: "Phootakot karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Deepak & Tulsi Fireworks",
    phone: "9166316031",
    address: "Phootakot karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "B.K. Fireworks",
    phone: "8058485861",
    address: "Bhoodara Bazar karauli",
    price: '',
    image: '',
    email: '',
  },
]

const obj1 = JSON.stringify(fireworksObj)
console.log(obj1)

export const hotelsObj = [
  {
    name: "Hotel Prakash",
    email: "prakashhotel13@gmail.com",
    phone: "7231080222 7464250586",
    address: "Near Govt. College Karauli",
    price: '',
    image: '',
  },
  {
    name: "The Karauli Inn",
    email: "thekarauliinn@gmail.com",
    phone: "9351627742 9351644255",
    address: "Masalpur Chungi Karauli",
    price: '',
    image: '',
  },
  {
    name: "Hotel Chetan",
    email: "chetanhotel@gmail.com",
    phone: "9929028366",
    address: "Private Bus Stand Hindaun Road Karauli",
    price: '',
    image: '',
  },
  {
    name: "Hotel Karauli Ajay",
    email: '',
    phone: "9024745555 8209531450",
    address: "Private Bus Stand Hindaun Road Karauli",
    price: '',
    image: '',
  },
  {
    name: "Hotel Krishna",
    phone: "7464220103 8114407972",
    address: "Near Roadways Bus Stand Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Hotel Richa Palace",
    phone: "9413885760",
    address: "Collectory Road Near Govt. College Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Radha Krishna Guest House",
    phone: "9694519739 8769589282",
    address: "Opp. Trilok Chand Mathur Stadium Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Royal Hotel",
    phone: "7073727144",
    address: "Opp. Hotel Ajay Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Siddhi Vinayak",
    phone: "9414272043",
    address: "Gulab Bagh Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Krishna Hotel In Karauli",
    phone: "9785756380",
    address: "Masalpur Chungi, Hindaun Road Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Hotel Raj Palace Karauli",
    phone: "8005871045",
    address: "Sikarganj Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Hotel Ras Raj",
    phone: "9664484445",
    address: "GSS Colony Vaishali Nagar Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Hotel Gopal",
    phone: "7023276015",
    address: "Opp. Govt. College Karauli",
    price: '',
    image: '',
    email: '',
  },
]

const obj2 = JSON.stringify(hotelsObj)
console.log(obj2)

export const gardensObj = [
  {
    name: "Shiv Ashoka",
    phone: "9784720762",
    address: "Near Petrol Pump Village Ruggapura Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Shiv Palace",
    phone: "8005765475",
    address: "Indira Colony In Front Of Kotwali Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Shree Ji Marriage Garden",
    phone: "9690871665",
    address: "Near Mahindra Showroom Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Laxmi Marriage Garden",
    phone: "9530172496",
    address: "Near Stadium Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Garg Palace",
    phone: "9983786964",
    address: "Hindaun Gate Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Karauli Garden Inn",
    phone: "8740075371",
    address: "Gulab Bagh Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Rajrani Palace",
    phone: "7942688271",
    address: "GSS Colony, Vaishali Nagar Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Ashirwad Marriage Garden",
    phone: "7381828282",
    address: "Vaishali Nagar Karauli",
    price: '',
    image: '',
    email: '',
  },
]

const obj3 = JSON.stringify(gardensObj)
console.log(obj3)

export const kiranaObj = [
  {
    name: "Kallu Traders",
    phone: "9414727578 9001203540",
    address: "Old Vegetable Market Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Dinesh Disposals",
    phone: "9079968341 7877327367",
    address: "Food Market Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Mukesh Traders",
    phone: "6350546283",
    address: "Bada Baazar Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Purushottam Disposals",
    phone: "8094779373",
    address: "Food Market Karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Ashok Trading Company",
    phone: "8290440667",
    address: "Food Market Karauli",
    price: '',
    image: '',
    email: '',
  },
]

const obj4 = JSON.stringify(kiranaObj)
console.log(obj4)

export const cardsprintingObj = [
  {
    name: "Puspendra Printing Press",
    phone: "8005599335",
    address: "Near Santoshi Mata Temple karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Nagina Printing Press",
    phone: "9829238509",
    address: "Wazirpur Gate karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Shubham Printing Press",
    phone: "9460152920",
    address: "Outside Of Wazirpur Gate karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Ganesh Printers",
    phone: "8058042145",
    address: "Collectory Road karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Padam Printers",
    phone: "9413886872",
    address: "Wazirpur Gate karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Azad Printing Press",
    phone: "9785515737",
    address: "Near PWD. Collectory Circle karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Galaxy Offset",
    phone: "9414340961",
    address: "Outside Of Wazirpur Gate karauli",
    price: '',
    image: '',
    email: '',
  },
]

const obj5 = JSON.stringify(cardsprintingObj)
console.log(obj5)

export const lightsObj = [
  {
    name: "Divya Light & Decoration",
    phone: "9785385251",
    address: "Indira Colony In Front Of Kotwali karauli",
    price: '',
    image: '',
    email: '',
  },
  {
    name: "Shivam Light & Decoration",
    phone: "9649384022",
    price: '',
    image: '',
    email: '',
    address: '',
  },
  {
    name: "Pachori Light & Decoration",
    phone: "9982306018",
    price: '',
    image: '',
    email: '',
    address: '',
  },
]

const obj6 = JSON.stringify(lightsObj)
console.log(obj6)

export const parlourObj = [
  {
    name: "pooja beauty parlour",
    phone: "8107465561",
    address: "baraf factory , chatikna karauli",
    price: '',
    image: '',
  },
  {
    name: "priti beauty parlour",
    phone: " 9079100735",
    address: "sita badi karauli",
    price: ' 1100-2100',
    image: '',
  },
  {
    name: "vandana beauty parlour",
    phone: "8209783430",
    address: "near ganpati palaza sitabadi ,karauli",
    price: '1100 -5000',
    image: '',
  },
  {
    name: "payal beauty parlour",
    instagram:'mansiimakover',
    phone: "6376103612",
    address: "sitabadi city mall first floor , karauli ",
    price: '1000-51000',
    image: '',
  },
  {
    name: "radhika beauty parlour",
    phone: "7891836834",
    address: "sitabadi city mall first floor , karauli",
    price: '1000-3100',
    image: '',
  },
  {
    name: "glam studio",
    phone: "9694718125",
    address: "in front shivcharan singh dhawai petrol pump , truck union karauli",
    price: '2000,71000',
    image: '',
  }]
  const obj7 = JSON.stringify(parlourObj)
console.log(obj7)
  
export const womenclothingObj = [
  {
    name: "radharani sari showroom",
    phone: "9309485546 , 9929849035",
    address: "first and secound floor ganpati plaza , karauli",
    price: '',
    image: '',
  },
  {
    name: "riya sarees",
    phone: "8209625913",
    address: "ganpati plaza,karauli",
    price: '3000-45000',
    image: '',
  },
  {
    name: "gomti sares",
    phone: "7737990667",
    address: "agarsen katla bhure valo ki gali, karauli",
    price: '2500-50000',
    image: '',
  },
  {
    name: "mangalam showroom",
    phone: "9875242147",
    address: "agarsen katla bhure valo ki gali, karauli",
    price: '3500-35000',
    image: '',
  },
  {
    name: "panihari vesh collection",
    phone: "8058116947",
    address: "city mall ,karauli",
    price: '2000-40000',
    image: '',
  },
  ]
  const obj8 = JSON.stringify(womenclothingObj)
console.log(obj8)
  
