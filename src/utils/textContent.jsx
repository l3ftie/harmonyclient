import { BsPersonArmsUp } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { LuHeartPulse } from "react-icons/lu";
import {
  MdAccessibility,
  MdOutlineHealthAndSafety,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import { TbNurse, TbOld } from "react-icons/tb";

import { RiHome6Line } from "react-icons/ri";
import { TbMedicalCross } from "react-icons/tb";
import doctor2 from "../assets/images/Slider_Illustration.png";
import doctor from "../assets/images/doctor.png";
import doctor1 from "../assets/images/slide1.png";

const services = [
  {
    id: 1,
    name: "Resident Care",
    icon: <RiHome6Line color="#00afef" size={34} />,
  },
  {
    id: 2,
    name: "Medical Care",
    icon: <TbMedicalCross color="#00afef" size={34} />,
  },
  {
    id: 2,
    name: "Nursing care",
    icon: <RiHome6Line color="#00afef" size={34} />,
  },
  {
    id: 2,
    name: "Medical Care",
    icon: <MdAccessibility color="#00afef" size={34} />,
  },
  {
    id: 1,
    name: "Resident Care",
    icon: <MdOutlineMapsHomeWork color="#00afef" size={34} />,
  },
  {
    id: 2,
    name: "Medical Care",
    icon: <MdAccessibility color="#00afef" size={34} />,
  },
  {
    id: 2,
    name: "Medical Care",
    icon: <MdAccessibility color="#00afef" size={34} />,
  },
  {
    id: 2,
    name: "Medical Care",
    icon: <MdAccessibility color="#00afef" size={34} />,
  },
];

const upperLinks = [
  { id: 1, name: "Click to view Harmony Home opportunities", link: "careers" },
];

const fqas = [
  {
    id: 1,
    title: "What kind of home care services do you provide?",
    content: "this is content one",
  },
  {
    id: 2,
    title: "Where do you provide services?",
    content: "this is content two,",
  },
  {
    id: 3,
    title: "Will I have a choice of who comes to my home?",
    content: "this is content three,",
  },
  {
    id: 4,
    title: "Will my family member always receive care from the same caregiver?",
    content: "this is content four,",
  },
  {
    id: 5,
    title: "Can I change or discontinue the services my loved one receives?",
    content: "this is content five,",
  },
];

const points = [
  {
    id: 1,
    title: "Compassion",
    point:
      "We approach our work with empathy, kindness, and understanding, recognizing the unique needs of each individual.",
  },
  {
    id: 2,
    title: "Dedication",
    point:
      "Committed to delivering high-quality care, we go above and beyond to ensure the well-being and comfort of our clients.",
  },
  {
    id: 3,
    title: "Professionalism",
    point:
      "Our team of trained carers upholds the highest standards of professionalism, maintaining confidentiality and...",
  },
  {
    id: 4,
    title: "Collaboration",
    point:
      "We work collaboratively with families, healthcare professionals, and the community to create a comprehensive support...",
  },
];
const servicesOffered = [
  {
    id: 1,
    color: "#defffd",
    service: "Carer Support Services",
    description: `For individuals discharged from the hospital, we provide tailored support to aid in their recovery and
    adjustment back to daily life. Assistance with activities of daily living (ADLs) to enhance independence.
    Medication management to ensure a consistent and safe healthcare routine`,
    icon: MdOutlineHealthAndSafety,
  },
  {
    id: 2,
    color: "#ffecee",
    service: "Elderly Care",
    description: `Customized care plans for the elderly, addressing their unique physical, emotional, and social needs.
    Companionship and engagement to promote mental well-being.
    Assistance with mobility, personal hygiene, and nutritional support.`,
    icon: TbOld,
  },
  {
    id: 3,
    color: "#efefff",
    service: "Health Condition-Specific Care",
    description: `Specialized care plans for individuals with specific health conditions, including chronic illnesses or post-surgery recovery.
    Regular health monitoring and coordination with healthcare professionals`,
    icon: LuHeartPulse,
  },
  {
    id: 4,
    color: "#fff2c5",
    service: "Support for Working Class and Diaspora Overseas",
    description: `Peace of mind for families by providing care and companionship to their loved ones in their absence.
    Regular updates and communication to keep families informed about their relative's well-being.`,
    icon: TbNurse,
  },
  {
    id: 5,
    color: "#ceceff",
    service: "Daily Activities and Leisure",
    description: `Facilitating daily activities, such as walks and recreational pursuits, to promote an active and fulfilling
    lifestyle. Creating a positive and engaging environment for social interaction.`,
    icon: BsPersonArmsUp,
  },
  {
    id: 6,
    color: "#defffd",
    service: "Trained and Experienced Carers",
    description: `Our team of carers undergoes rigorous training to ensure they possess the skills and compassion required
    for the diverse needs of our clients. Continuous professional development to stay updated with the latest healthcare practices`,
    icon: GoShieldCheck,
  },
];

const sliderData = [
  {
    id: 1,
    title: "Harmony Health Home",
    img: doctor,
    desc1:
      "We are committed to providing compassionate and dedicated care that meets the unique needs of everyone. ",
    desc2:
      "Learn about home care services that can help you maintain your independence and stay at home for longer.",
    bg: "#86d3ea",
  },
  {
    id: 2,
    title: "Giving our all to you",
    img: doctor1,
    desc1:
      "We are committed to providing compassionate and dedicated care that meets the unique needs of everyone. ",
    desc2:
      "Learn about home care services that can help you maintain your independence and stay at home for longer.",
    bg: "#8696a9",
  },
  {
    id: 3,
    title: "Passion Led us here",
    img: doctor2,
    desc1:
      "We are committed to providing compassionate and dedicated care that meets the unique needs of everyone. ",
    desc2:
      "Learn about home care services that can help you maintain your independence and stay at home for longer.",
    bg: "#BAFCF5",
  },
];

export { fqas, points, services, servicesOffered, sliderData, upperLinks };
