import React from 'react';
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import ToursInfo from "./ToursInfo";
import Stories from "./Stories";

import logo1 from "../img/logo-white.png";
import pic1 from "../img/nat-1-large.jpg";
import pic2 from "../img/nat-2-large.jpg";
import pic3 from "../img/nat-3-large.jpg";
import pic4 from "../img/nat-8.jpg";
import pic5 from "../img/nat-9.jpg";
import bgVideoMp4 from "../img/video.mp4";
import bgVideoWebM from "../img/video.webM";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header 
                    logo={logo1}
                    title="Outdoors" subTitle="is where life happens" 
                    btnText="Discover our Tours"
                    />

                <main>
                    <About
                        title="Excititng tours for adventurous people" 
                        heading1="You're going to fall in love with nature"
                        description1="Laboris ipsum ad est officia minim adipisicing duis voluptate et occaecat. Laboris magna et nulla incididunt veniam consectetur sunt. Tempor veniam adipisicing nostrud id minim occaecat exercitation nisi non. Pariatur labore dolor voluptate voluptate consectetur consectetur id est excepteur officia velit do eiusmod magna. Reprehenderit ullamco ex sint qui."
                        heading2="Live adventures like you have never have before"
                        description2="Magna laboris aliqua in id nostrud consequat magna pariatur nulla laborum Lorem minim deserunt. Veniam pariatur velit enim veniam dolore cupidatat laboris proident laboris. Velit deserunt proident cillum est irure mollit minim incididunt laboris in reprehenderit est fugiat. Consectetur sint eu sint veniam aute duis duis velit laborum eu sint aliqua veniam. Elit sint veniam quis eu Lorem pariatur proident officia commodo esse eu aliquip."
                        pic1 = {pic1}
                        pic2 = {pic2}
                        pic3 = {pic3}
                    />
                    <Features 
                        description1="Mollit nostrud dolor deserunt deserunt ea duis ut voluptate occaecat incididunt ex nostrud non. Cillum incididunt ullamco duis non anim labore commodo velit aliqua ipsum deserunt quis exercitation. Aliquip anim excepteur pariatur id ex veniam in esse culpa enim. Est ea id sint voluptate nisi nostrud laborum laborum minim nulla laboris ea."
                        description2="Mollit nostrud dolor deserunt deserunt ea duis ut voluptate occaecat incididunt ex nostrud non. Cillum incididunt ullamco duis non anim labore commodo velit aliqua ipsum deserunt quis exercitation. Aliquip anim excepteur pariatur id ex veniam in esse culpa enim. Est ea id sint voluptate nisi nostrud laborum laborum minim nulla laboris ea."
                        description3="Mollit nostrud dolor deserunt deserunt ea duis ut voluptate occaecat incididunt ex nostrud non. Cillum incididunt ullamco duis non anim labore commodo velit aliqua ipsum deserunt quis exercitation. Aliquip anim excepteur pariatur id ex veniam in esse culpa enim. Est ea id sint voluptate nisi nostrud laborum laborum minim nulla laboris ea."
                        description4="Mollit nostrud dolor deserunt deserunt ea duis ut voluptate occaecat incididunt ex nostrud non. Cillum incididunt ullamco duis non anim labore commodo velit aliqua ipsum deserunt quis exercitation. Aliquip anim excepteur pariatur id ex veniam in esse culpa enim. Est ea id sint voluptate nisi nostrud laborum laborum minim nulla laboris ea."
                        title1="Explore The World"
                        title2="Meet Nature"
                        title3="Find Your Way"
                        title4="Live A Healthier Life"
                        type1="world"
                        type2="compass"
                        type3="map"
                        type4="heart"
                    />
                    <ToursInfo 
                        title1="The Sea Explorer"
                        title2="The Forest Hiker"
                        title3="The Snow Adventurer"
                        description1={["3 Day Tours", "Up to 30 People", "2 Tour Guides","Sleep in Cozy Hotel", "Difficulty: Easy"]}
                        description2={["7 day tours", "Up to 40 People", "6 Tour Guides", "Sleep in Provided Tents", "Difficulty: Medium"]}
                        description3={["5 day tours", "Up to 15 People", "3 Tour Guides", "Sleep in Provided Tents", "difficulty: Hard"]}
                        price1="$297"
                        price2="$497"
                        price3="$697"
                        type1="orange"
                        type2="green"
                        type3="blue"
                        btnText1="Discover All Tours"
                        btnText2="Book Now!"
                    />
                    <Stories 
                        heading="We make people genuinely happy"
                        btnText="Read all stories &rarr;"
                        name1="Mary Smith"
                        name2="Jack Wilson"
                        pic1={pic4}
                        pic2={pic5}
                        bgVideoMp4={bgVideoMp4}
                        bgVideoWebM={bgVideoWebM}
                        title1="I had the best week with my family"
                        title2="WOW! My life is completely different now"
                        description1="Incididunt ut consectetur et culpa aute aliqua adipisicing fugiat in laborum excepteur minim nostrud. Incididunt esse ad qui sunt anim aliquip. Proident nostrud enim excepteur aliqua sunt qui magna. Id mollit culpa quis non laboris sint sit cillum. Ipsum consectetur mollit cupidatat sunt consequat nulla. Duis aliqua magna non eiusmod occaecat amet enim est quis Lorem esse pariatur."
                        description2="Duis commodo cupidatat nulla laborum qui enim laborum esse sit do elit. Dolor tempor ad irure do non. Dolor irure pariatur incididunt aliqua. Exercitation magna id aute et."
                        
                        
                    />
                    


                </main>


            </div>
            
        );
    }
}

export default App;