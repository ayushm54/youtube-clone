import { AiFillHome } from "react-icons/ai";
import { BiCodeAlt, BiDumbbell } from "react-icons/bi";
import { GiMusicalNotes, GiHanger, GiGamepad, GiTrade } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { SiGooglepodcasts } from "react-icons/si";
import {
  MdOutlineOndemandVideo,
  MdLiveTv,
  MdOutlineFitnessCenter,
  MdFaceRetouchingNatural,
  MdTheaterComedy,
} from "react-icons/md";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
  { name: "New", icon: <AiFillHome /> },
  { name: "Coding", icon: <BiCodeAlt /> },
  { name: "Music", icon: <GiMusicalNotes /> },
  { name: "Education", icon: <IoMdSchool /> },
  { name: "Podcast", icon: <SiGooglepodcasts /> },
  { name: "Movie", icon: <MdOutlineOndemandVideo /> },
  { name: "Gaming", icon: <GiGamepad /> },
  { name: "Live", icon: <MdLiveTv /> },
  { name: "Sport", icon: <MdOutlineFitnessCenter /> },
  { name: "Fashion", icon: <GiHanger /> },
  { name: "Beauty", icon: <MdFaceRetouchingNatural /> },
  { name: "Comedy", icon: <MdTheaterComedy /> },
  { name: "Gym", icon: <BiDumbbell /> },
  { name: "Trading", icon: <GiTrade /> },
];
