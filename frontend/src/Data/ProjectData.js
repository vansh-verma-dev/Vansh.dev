import GoRivo from "../assits/GoRivo.png";
import Prajanya from "../assits/Prajnaya.png";
import TrueBook from "../assits/TrueBook.png";

const projectsData = [
  {
    id: 1,
    title: "TrueBook",
    status: "In progress",
    note: "Frontend done, backend next",
    desc: "A Tally-inspired accounting app for day-to-day business bookkeeping, with a clean and simple interface.",
    tech: ["React.js", "Tailwind CSS"],
    video: "",
    image:  TrueBook,
    github: "https://github.com/vansh-verma-dev/Truebook",
    live: "",
  },
 
  {
    id: 2,
    title: "GoRivo",
    status: "Completed",
    note: "Currently building",
    desc: "An Uber-style ride booking app. I'm building it to learn how real-world apps handle users, rides and locations.",
    tech: ["React.js", "Node.js", "MongoDB"],
    video: "",
    image: GoRivo,
    github: "https://github.com/vansh-verma-dev/GoRivo",
    live: "",
  },
    {
    id: 3,
    title: "Prajanya Healthcare",
    status: "Completed",
    note: "Frontend + backend",
    desc: "A medicine e-commerce website with user login, product listing and an admin page where orders can be viewed and products managed.",
    tech: ["React.js", "Tailwind CSS", "Admin Panel"],
    video: "",
    image: Prajanya,
    github: "https://github.com/vansh-verma-dev/Prajanya-Healthcare",
    live: "https://prajanya-healthcares.onrender.com",
  },
];

export default projectsData;