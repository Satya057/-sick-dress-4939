import React from "react";
import Content from "./Content";
import styles from "./Footer.module.css";
import SliderTest from "./SliderTest";

const Footer = () => {
  const footer = [
    "About Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Careers with Us",
    "Sitemap",
    "Contact Us",
    "FAQs",
    "Summons / Notices",
    "Grievances", 
    "Fraud Alert",
    "Trust and Safety",
  ];

  const footerb = [
    "Upload Resume",
    "Search Jobs",
    "Create Job Alert",
    "Report a Problem",
    "Naukri Blogs",
  ];

  const footerb_1 = [
    "Browse All Jobs",
    "Premium MBA Jobs",
    "Premium Engineering Jobs",
    "Govt. Jobs",
    "International Jobs",
    "Jobs in Gulf",
    "Jobs by Company",
    "Jobs by Category",
    "Jobs by Designation",
    "Jobs by Location",
    "Jobs by Skill",
  ];

  const footerC = [
    "Priority Applicant",
    "Resume Display",
    "Resume Writing",
    "Jobs4U",
    "Recruiter Connection",
    "Job Search Booster",
  ];
  const footerC_1 = [
    "Software and Technology",
    "Artificial Intelligence and Data Science",
    "Management",
    "Finance",
    "Creativity and Design",
    "Emerging Technologies",
    "Engineering-non CS",
    "Healthcare",
    "Energy and Environment",
    "Social sciences",
    "Personal growth",
  ];

  const footerD = [
    "Job Posting",
    "Resume Database Access",
    "Recruiter Login",
    "Naukri RMS",
    "Buy Resume Packages Online",
    "Transition Services",
    "Report a Problem",
    "Recruiters from USA, call",
    "Toll Free # 1866-557-3340",
  ];

  const footerD_1 = [
    "Interview Questions",
    "About Companies",
    "Share Interview Advice",
    "Write Company Review",
    "Company Reviews",
    "Company Salaries",
  ];

  

  return (
    <div className={styles.main}>
      <div className={styles.footer_content}>
        <div className={styles.footerA}>
          <Content data={footer} head={"Information"} />
          <div className={styles.iconDiv}>
            <h3>Naukri on Mobile</h3>
            <img
              className={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/768px-Google_Play_Store_badge_EN.svg.png?20190913154415"
              alt="Google Play"
            />
            <img
              className={styles.logo}
              src="http://digitopoly.files.wordpress.com/2016/06/app-store-logo.png"
              alt=""
            />
          </div>
        </div>

        <div className={styles.footerA}>
          <Content data={footerb} head={"Jobseekers"} />
          <Content data={footerb_1} head={"Browse Jobs"} />
        </div>

        <div className={styles.footerA}>
          <Content data={footerC} head={"Jobseeker Services"} />
          <Content data={footerC_1} head={"Naukri Learning"} />
        </div>

        <div className={styles.footerA}>
          <Content data={footerD} head={"Employers"} />
          <Content data={footerD_1} head={"Ambition Box"} />
          <div className={styles.followUs}>
            <h3>Follow Us</h3>
            <div className={styles.logoD}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png?20140103173026"
                alt="Facebook Logo"
              />
              <img
                src="https://pnggrid.com/wp-content/uploads/2021/07/Twitter-Logo-Square.png"
                alt="twiiter Logo"
              />
              <img
                src="https://www.waengineering.com/wp-content/uploads/2019/04/linkedin-icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomdiv}>
        <div className={styles.sliderLogo}>
          {/* <Slider children={[...imgArr]}/> */}
          <div className={styles.logoSilder}>
            <p>Partner Sites</p>
            <SliderTest />
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <p>All rights reserved @ 2022 Info Edge (India) Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
