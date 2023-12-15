import React from "react";
import "./App.css";
// import Button from "./Button";
import IconButton from "./homeworks/section01/day01/IconButton";
import Search from "./homeworks/section01/day01/Search";
import Cpn1Block3 from "./homeworks/section01/day01/Cpn1Block3";
import ProductTag from "./homeworks/section01/day02/basic-1/ProductTag";
import ProductCard from "./homeworks/section01/day02/basic-2/ProductCard";

import {
  AiFillApple,
  AiOutlineArrowRight,
  AiFillAndroid,
  AiOutlineDropbox,
} from "react-icons/ai";
import {
  BsFacebook,
  BsGoogle,
  BsFilterCircle,
  BsTwitter,
  BsPinterest,
  BsThreeDots,
} from "react-icons/bs";
import { RiSearchLine, RiFacebookFill, RiVisaLine } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { TiPhone } from "react-icons/ti";
import { FaJava, FaEyeSlash } from "react-icons/fa";

import PostCard from "./homeworks/section01/day02/basic-3/PostCard";
import PercentageBar from "./homeworks/section01/day02/block-ui-1/PercentageBar";
import RankBar from "./homeworks/section01/day02/block-ui-2/RankBar";
import LogoCard from "./homeworks/section01/day02/block-ui-3/LogoCard";
import Cpn2Block3 from "./homeworks/section01/day01/Cpn2Block3";
import StatisticalCard from "./homeworks/section01/day02/block-ui-4/StatisticalCard";
import CvCrad from "./homeworks/section01/day02/block-ui-5/CvCrad";
import ShopCard from "./homeworks/section01/day02/block-ui-6/ShopCard";
import ProductList from "./homeworks/section01/day02/block-ui-7/ProductList";
import LikeButton from "./homeworks/section02/LikeButton";
import LikeAnimation from "./homeworks/section02/LikeAnimation";
import Ratting from "./homeworks/section02/RateButton";
import ImageViewer from "./homeworks/section02/ImageViewer";
import Tabs from "./homeworks/section02/Tabs";
import ImageSlider from "./homeworks/section02/ImageSlider";
import MultipleAcordions from "./homeworks/section02/MultipleAccordions";
import SingleAccordions from "./homeworks/section02/SingleAccordions";
import Dashboard from "./homeworks/section01/day01/Dashboard";
import Weatherweek from "./homeworks/section01/day01/Weatherweek";
import Weatherforecast from "./homeworks/section01/day01/Weatherforecast";
import Calendar from "./homeworks/section01/day01/Calendar";
import MountingExample from "./homeworks/section02/LifecycleExample";
import AppDelivery from "./homeworks/section03/AppDelivery";
import Form from "./homeworks/section03/AppDelivery/Form";
import Rate from "./homeworks/section03/AppDelivery/Rate";
import Pay from "./homeworks/section03/AppDelivery/Pay";
import MusicPlayer from "./homeworks/section03/MusicPlayer";
import Onchoose from "./homeworks/section04/OnChoose/Onchoose";
import MutipleChoice from "./homeworks/section04/MutipleChoice/MutipleChoice";
import FillInBlank from "./homeworks/section04/FillInBlank/FillInBlank";
import FillInBlanks from "./homeworks/section04/Fillblanks/FillBlanhks";
import RadioQuiz from "./homeworks/section04/RadioQuiz";
import Form01 from "./homeworks/section05/Form01";
import SignUpForm from "./homeworks/section05/Form01/SignUpForm";
import LogInForm from "./homeworks/section05/Form01/LogInForm";
import Form02 from "./homeworks/section05/Form02";
import Form03 from "./homeworks/section05/Form03";
import Form04 from "./homeworks/section05/Form04";
import Bs5Categories from "./homeworks/section06/Categories";
import Login from "./homeworks/section06/Login";

import Page from "./Section08/Page";

function App() {
  return (
    // <div className="block">
    //   <div className="flexColumn">
    //     <IconButton />
    //     <IconButton iconRight={<AiOutlineArrowRight />} text="get started" />
    //     <IconButton
    //       iconLeft={<AiFillApple size={30} />}
    //       text="Continue with Apple"
    //     />
    //     <IconButton
    //       iconLeft={<BsGoogle />}
    //       text="Continue with Google"
    //       outLine={true}
    //     />
    //     <IconButton
    //       iconLeft={<BsFacebook />}
    //       text="Continue with Facebook"
    //       outLine={true}
    //     />
    //   </div>
    //   <div className="flexColumn">
    //     <Search iconLeft={<RiSearchLine />} />
    //     <Search text="Seach" iconLeft={<RiSearchLine />} color="#A2AAAD" />
    //     <Search text="Textfield" iconLeft={<RiSearchLine />} fontWeight="600" />
    //     <Search
    //       text="Seach in the web"
    //       iconLeft={<RiSearchLine />}
    //       iconRight={<BsFilterCircle />}
    //       color="#A2A9AD"
    //     />
    //     <Search
    //       text="Seach crypto"
    //       iconLeft={<RiSearchLine />}
    //       iconRight={<LuSettings2 />}
    //       color="#778289"
    //     />
    //     <Search
    //       text="Phone number"
    //       iconRight={<TiPhone size={20} />}
    //       color="#A2A9AD"
    //       fontWeight="400"
    //       bgIcon="#D3FFD8"
    //       radiusIcon={12}
    //     />
    //     <Search
    //       text="Seach in the web"
    //       iconLeft={<RiSearchLine />}
    //       iconRight={<BsFilterCircle />}
    //       color="#A2A9AD"
    //       bgIcon="#FFE664"
    //       radiusIcon={100}
    //     />
    //   </div>
    //   <div className="flexColumn">
    //     <Cpn1Block3
    //       minutes={7}
    //       rightIcon={<BsThreeDots />}
    //       leftName="Spain"
    //       leftFlag="images/flags/emojione_flag-for-ceuta-and-melilla.png"
    //       leftScore={0}
    //       rightScore={0}
    //       rightFlag="images/flags/emojione_flag-for-france.png"
    //       rightName="France"
    //       colorMinute="#A2AAAD"
    //     />
    //     <Cpn2Block3
    //       img="images/flags/emojione_flag-for-ceuta-and-melilla.png"
    //       title="Wade Warren"
    //       iconTitle={<BsThreeDots size={20} />}
    //     />
    //     <Cpn2Block3
    //       img="images/flags/emojione_flag-for-france.png"
    //       title="Manchespool liverted"
    //       iconTitle={<BsThreeDots size={20} />}
    //       subTitle="4293 3242 &bull;&bull;&bull;&bull;"
    //       iconSubLeft={<RiVisaLine size={30} />}
    //       iconSubRight={<FaEyeSlash />}
    //     />
    //     <Dashboard />
    //   </div>
    //   <div className="flexColumn">
    //     <Weatherweek
    //       images={[
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //       ]}
    //       texts={[
    //         { text: "Mon" },
    //         { text: "Tue" },
    //         { text: "Wed" },
    //         { text: "Thu" },
    //         { text: "Fri" },
    //       ]}
    //     ></Weatherweek>
    //     <Weatherweek
    //       images={[
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //       ]}
    //       texts={[
    //         { text: "Mon", time: "10:00 AM" },
    //         { text: "Tue", time: "11:30 AM" },
    //         { text: "Wed", time: "1:00 PM" },
    //         { text: "Thu", time: "3:30 PM" },
    //         { text: "Fri", time: "5:00 PM" },
    //       ]}
    //     />
    //     <Weatherweek
    //       images={[
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //         "images/iconExport/Frame15.png",
    //       ]}
    //       texts={[
    //         { text: "Mon", time: "10:00 AM" },
    //         { text: "Tue", time: "11:30 AM" },
    //         { text: "Wed", time: "1:00 PM" },
    //         { text: "Thu", time: "3:30 PM" },
    //         { text: "Fri", time: "5:00 PM" },
    //       ]}
    //       textheader="Great day to schedule"
    //       textBlur="Your usual hours"
    //       icon="&bull;&bull;&bull;"
    //     />
    //     <Weatherforecast />
    //     <Calendar />
    //   </div>

    //   <div className="flexRow">
    //     <ProductTag
    //       imgUrl="/images/products/basic-1.jpg"
    //       title="Clothing & Apparel"
    //       contents={["Accessory", "Bags", "kid's", "Mens"]}
    //     />
    //     <ProductCard
    //       imgUrl="images/products/basic-2.jpg"
    //       shop="YOUNG SHOP"
    //       productName="SamSung UHD TV 24inch"
    //       rateQuantity={2}
    //       price={599}
    //     />
    //     <PostCard
    //       imgUrl="images/product/basic-3.jpg"
    //       category="Technology"
    //       title="Harman Kadon Onyx Studio Mini, Reviews Experiences"
    //       date="Feb 21, 2021"
    //       author="drfurion"
    //     />
    //   </div>
    //   <div className="flexColumn">
    //     <PercentageBar color="red" percent={20} title="bandwidth" />
    //     <PercentageBar color="blue" percent={50} title="storage" />
    //     <PercentageBar color="green" percent={70} title="Users" />
    //   </div>
    //   <div className="flexColumn">
    //     <RankBar
    //       icon={<AiFillAndroid size={20} />}
    //       title="android"
    //       rank={60}
    //       color="#57f576"
    //     />
    //     <RankBar
    //       icon={<AiFillApple size={20} />}
    //       color={"#e61523"}
    //       rank={50}
    //       title="css"
    //     />
    //     <RankBar
    //       icon={<AiOutlineDropbox size={20} />}
    //       color="#1c86ff"
    //       rank={25}
    //       title="php"
    //     />
    //     <RankBar
    //       icon={<FaJava size={20} />}
    //       color="#b5b01b"
    //       rank={70}
    //       title="java"
    //     />
    //     <RankBar
    //       icon={<AiFillAndroid size={20} />}
    //       color="#9d10de"
    //       rank={40}
    //       title=".net"
    //     />
    //   </div>
    //   <div className="flexRow">
    //     <LogoCard
    //       icon={<RiFacebookFill size={100} />}
    //       title="Facebook"
    //       subTitle="5.000.000 Likes"
    //       color="#349aed"
    //     />
    //     <LogoCard
    //       icon={<BsTwitter size={100} />}
    //       title="Twitter"
    //       subTitle="40.000 Twitter"
    //       color="#4be4f2"
    //     />
    //     <LogoCard
    //       icon={<BsGoogle size={100} />}
    //       title="Facebook"
    //       subTitle="4.600.000 Plus"
    //       color="#f5693b"
    //     />
    //     <LogoCard
    //       icon={<BsPinterest size={100} />}
    //       title="Pinterest"
    //       subTitle="34.000 Pins"
    //       color="#f22727"
    //     />
    //   </div>

    //   <div className="flexRow">
    //     {/* <RankColumn color="blue" rank={10} /> */}
    //     <StatisticalCard title="TODAY'S VISITORS" data="24,599" />
    //     <StatisticalCard title="YESTERDAY'S VISITORS" data="15,699" />
    //     <StatisticalCard title="TOTAL DOWNLOAD" data="1,24,599" />
    //     <StatisticalCard title="CURRENT INCOME" data="$54,599" />
    //   </div>
    //   <div className="flexRow">
    //     <CvCrad
    //       imgUrl="images/avatars/huynhnd.jpg"
    //       name="HuynhND"
    //       category="Developing"
    //       dob="23/05/2014"
    //       bg="B+"
    //       edu="MCA"
    //       res="Bagalore"
    //       colorEmail="#F75354"
    //       colorPhone="#51D567"
    //     />
    //     <CvCrad
    //       imgUrl="images/avatars/trucnhan.webp"
    //       name="Trucnhan"
    //       category="Designer"
    //       dob="23/05/2014"
    //       bg="B+"
    //       edu="MCA"
    //       res="Bagalore"
    //       colorEmail="#31C8DD"
    //       colorPhone="#619CEC"
    //     />
    //     <CvCrad
    //       imgUrl="images/avatars/mytam.jpg"
    //       name="Mytam"
    //       category="UI Designer"
    //       dob="23/05/2014"
    //       bg="B+"
    //       edu="MCA"
    //       res="Bagalore"
    //       colorEmail="#F78153"
    //       colorPhone="#FCD518"
    //     />
    //     <CvCrad
    //       imgUrl="images/avatars/bray.png"
    //       name="BRay"
    //       category="Testing"
    //       dob="23/05/2014"
    //       bg="B+"
    //       edu="MCA"
    //       res="Bagalore"
    //       colorEmail="#CB79E7"
    //       colorPhone="#FE60E8"
    //     />
    //   </div>
    //   <div className="flexRow">
    //     <ShopCard
    //       imgUrl="images/people/block-ui-6-1.jpg"
    //       name="eodem modo typi"
    //       description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
    //       size="XL / XXL / S"
    //       price={25}
    //     />
    //     <ShopCard
    //       imgUrl="images/people/block-ui-6-2.jpg"
    //       name="eodem modo typi"
    //       description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
    //       size="XL / XXL / S"
    //       price={25}
    //     />
    //     <ShopCard
    //       imgUrl="images/people/block-ui-6-3.jpg"
    //       name="eodem modo typi"
    //       description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
    //       size="XL / XXL / S"
    //       price={25}
    //     />
    //     <ShopCard
    //       imgUrl="images/people/block-ui-6-4.jpg"
    //       name="eodem modo typi"
    //       description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
    //       size="XL / XXL / S"
    //       price={25}
    //     />
    //   </div>
    //   <div className="flexRow">
    //     <ProductList />
    //     <ProductList />
    //     <ProductList />
    //     <ProductList />
    //   </div>
    //   <div className="flexColumn">
    //     <LikeButton />
    //     <LikeAnimation />
    //     <Ratting />
    //     <ImageViewer
    //       img={[
    //         "images/flowers/xuongrong.jpg",
    //         "images/flowers/hong.jpg",
    //         "images/flowers/10h.jpg",
    //         "images/flowers/sung.jpg",
    //         "images/flowers/duacan.jpg",
    //       ]}
    //     />
    //     <Tabs />
    //     <ImageSlider
    //       img={[
    //         "images/flowers/xuongrong.jpg",
    //         "images/flowers/hong.jpg",
    //         "images/flowers/10h.jpg",
    //         "images/flowers/sung.jpg",
    //         "images/flowers/duacan.jpg",
    //       ]}
    //     />
    //     <MultipleAcordions />
    //     <SingleAccordions />
    //     <MountingExample />
    //   </div>
    // </div>
    // <div className="block">
    //   <div className="flexColumn">
    //     <MutipleChoice
    //       questionContent=" doi nao vo dich woundcup nam 2022"
    //       correctAnswers={["phap", "anh"]}
    //       answers={["my", "phap", "anh", "bo do nha"]}
    //     />
    //     <FillInBlank
    //       questionContent="dien vao cho trong sau ___"
    //       correctAnswer="quan"
    //     />
    //     <FillInBlanks
    //       questionContent="đội bóng nào đã từng vô địch worldcup ___và ___"
    //       correctAnswers={["anh", "phap", "tay ban nha"]}
    //       blanks={["___"]}
    //     />
    //   </div>
    // </div>
    // <div className="block">
    //   {/* <div className="flexRow" style={{ margin: 100 }}>
    //     <AppDelivery />
    //     <Form />
    //     <Rate />
    //     <Pay />
    //     <MusicPlayer />
    //     <RadioQuiz />
    //     <Form01 />
    //     <SignUpForm />
    //     <LogInForm />
    //     <Form02 />
    //     <Form03 />
    //     <Form04 />
    //   </div> */}
    //   <div className="flexColumn">
    //     <Login />
    //     <Bs5Categories />
    //   </div>
    // </div>

    <div>
      {/* <Login /> */}
      <Page />
    </div>
  );
}

export default App;
