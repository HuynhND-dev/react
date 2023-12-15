import React from "react";
import styles from "./CvCard.module.css";
import Cpn1 from "./Cpn1";
import {
  FaGraduationCap,
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import Cpn2 from "./Cpn2";
type Props = {
  imgUrl?: string;
  name?: string;
  category?: string;
  dob?: string;
  bg?: string;
  edu?: string;
  res?: string;
  email?: string;
  phone?: number;
  colorEmail?: string;
  colorPhone?: string;
};

export default function CvCrad({
  imgUrl,
  name,
  category,
  dob,
  bg,
  edu,
  res,
  email,
  phone,
  colorEmail,
  colorPhone,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={styles.title}>
        <h2>{name}</h2>
        <p>{category}</p>
      </div>
      <div className={styles.info}>
        <Cpn1 icon={<FaCalendarAlt />} title="DOB" value={dob} />
        <Cpn1 icon={<FaHeart />} title="BG" value={bg} />
        <Cpn1 icon={<FaGraduationCap />} title="EDU" value={edu} />
        <Cpn1 icon={<FaMapMarkerAlt />} title="RES" value={res} />
      </div>
      <div className={styles.contact}>
        <Cpn2
          label="email"
          icon={<AiOutlineMail />}
          text="robot12@gmail.com"
          color={colorEmail}
        />
        <Cpn2
          label="phone no"
          icon={<BsTelephoneFill />}
          text="8665543219"
          color={colorPhone}
        />
      </div>
    </div>
  );
}
