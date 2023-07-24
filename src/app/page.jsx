'use client'
import Image from 'next/image'
import styles from './page.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from 'next/link';
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { useState } from 'react';

const navlinks = [
  {
      id: 1,
      title: "Home",
      href: "/"
  },
  {
      id: 2,
      title: "Our Services",
      href: "#ourServices"
  },
  {
    id: 3,
      title: "Courses",
      href: "#courses"
      
  },
  {
    id: 4,
    title: "Our Team",
    href: "#ourTeam"
  }
]


export default function Home()  {
    
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    
    <div className={styles.container}>

      <div className={styles.subContainer}>
      <div className={styles.header}>
      <Link href="/home" className={styles.logo}> <Image width={70} height={80} alt='' src='/logo.png'/>  </Link>

      <div className={styles.burgerMenu} onClick={toggleBurgerMenu}>
            <div className={isBurgerMenuOpen ? styles.line1Open : styles.line1} />
            <div className={isBurgerMenuOpen ? styles.line2Open : styles.line2} />
            <div className={isBurgerMenuOpen ? styles.line3Open : styles.line3} />
          </div>
     

      <div className={
              isBurgerMenuOpen ? styles.linksOpen : styles.links
            }>
        {navlinks.map(link=>(
            <Link  key={link.id} href={link.href} className={styles.link}>{link.title}</Link>
        ))}
      </div>
      </div>
      </div>



      <div  className={styles.aboutUsContainer}>

      
      <div className={styles.carouselContainer}>

      <div className={styles.aboutUs}>
        <h1>About Us</h1>
        <p className={styles.desc}>Hextech Developers is a dynamic and innovative software development company with a passionate team of tech enthusiasts, designers, and strategists. We specialize in providing a comprehensive range of digital solutions, including web development (MERN, PHP, Laravel, WordPress), mobile app development (Android, Flutter, React Native), desktop app development (C#, .NET, Java, Python), digital marketing, SEO, graphic designing (2D, 3D), and content writing. Our commitment to quality, customization, and timely delivery ensures that we exceed client expectations. With a customer-centric approach, transparency in communication, and a proven track record of successful projects, we are your ideal partner for transforming your ideas into reality in the digital world.</p>
      </div>
              
      <div className={styles.carousel}>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        setThumbs={false}
        className='productCarousel'>
        <Image alt='' width={450} height={450} src='/banner1.jpg' className={styles.image}/>
        <Image alt='' width={450} height={450} src='/banner2.jpg' className={styles.image}/>
        <Image alt='' width={450} height={450} src='/banner3.png' className={styles.image}/>
        <Image alt='' width={450} height={450} src='/graphic.jpg' className={styles.image}/>
      </Carousel>
      </div>

      </div>
      </div>


      <h1 className={styles.heading}>Our Approach</h1>
      <div className={styles.ourApproach}>

        <div className={styles.ourApproach1}>
          <Image alt='Loading Error' width={300} height={150} src='/client.jpg'/>
          <h3 className={styles.heading}>Client-Centric Solutions</h3>
          <p>At Hextech Developers, we put our clients at the center of everything we do. We take the time to understand your specific business objectives, target audience, and project requirements to deliver tailor-made solutions that align with your vision</p>
        </div>

        <div className={styles.ourApproach2}>
        <Image alt='Loading Error' width={300} height={150} src='/agile.png'/>
          <h3 className={styles.heading}>Agile Development</h3>
          <p>We embrace Agile methodologies to ensure flexibility, transparency, and efficiency throughout the development process. Regular communication and iterative development allow us to adapt to changing needs, delivering high-quality results on time and within budget</p>
        </div>

        <div className={styles.ourApproach3}>
        <Image alt='Loading Error' width={300} height={150} src='/security.jpg'/>
          <h3 className={styles.heading}>Security and Reliability</h3>
          <p>Your data and user trust are of paramount importance to us. We implement industry best practices to fortify the security of our applications, ensuring robustness and reliability</p>
        </div>

        <div className={styles.ourApproach4}>
        <Image alt='Loading Error' width={300} height={150} src='/scale.jpg'/>
          <h3 className={styles.heading}>Scalability and Performance</h3>
          <p>Our team designs web applications that can scale seamlessly as your business grows. We prioritize performance optimization to deliver lightning-fast websites and applications that provide an exceptional user experience</p>
        </div>

      </div>

      <div id='ourServices' className={styles.servicesContainer}>


      <div className={styles.services}>

      <h1 className={styles.heading}>Our Services</h1>


        <div className={styles.web}>
          <div className={styles.imageContainer}>
          <Image alt='Loading Error' className={styles.serviceImg} src='/web.png' width={500} height={400}/>
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Web Development</h2>
            <p>Our web development services encompass a wide range of technologies and platforms. We specialize in MERN stack (MongoDB, Express.js, React.js, Node.js) development, delivering high-performance and scalable web applications. Our expertise also includes PHP and Laravel, which enables us to create robust and feature-rich websites. For businesses looking for user-friendly content management systems, we offer WordPress customization and plugin development. Our team ensures that each website we create is responsive, SEO-friendly, and aligned with your brand identity</p>
          </div>
        </div>


        <div className={styles.web}>
        <div className={styles.textContainer}>
            <h2 className={styles.heading}>Mobile App Development</h2>
            <p>In the ever-expanding mobile world, we stay at the forefront of app development to create solutions that captivate users. Our Android app development expertise allows us to design and develop apps for the Android platform, catering to a vast user base. We also specialize in cross-platform app development using Flutter and React Native, providing you with cost-effective solutions that work seamlessly across multiple platforms. Whether it is a utility app, e-commerce platform, or social media application, our mobile apps are tailored to deliver an intuitive user experience</p>
          </div>
          <div className={styles.imageContainer}>
          <Image alt='Loading Error' className={styles.serviceImg} src='/andriod.png' width={500} height={400}/>
          </div>
          
        </div>

        <div className={styles.web}>
          <div className={styles.imageContainer}>
          <Image alt='Loading Error' className={styles.serviceImg} src='/desktop.png' width={450} height={310}/>
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Desktop App Development</h2>
            <p>Our desktop app development services cover a wide array of technologies, ensuring that your desktop applications are robust and reliable. Using C#, .NET, Java, and Python, we create efficient and feature-rich desktop software that enhances productivity and streamlines workflows. From standalone applications to complex enterprise systems, we deliver solutions that meet your specific business needs and run smoothly on various operating systems</p>
          </div>
        </div>


        <div className={styles.web}>
        <div className={styles.textContainer}>
            <h2 className={styles.heading}>Digital Marketing</h2>
            <p>In the competitive digital landscape, our digital marketing services help you stand out and attract your target audience. Our comprehensive approach includes Search Engine Optimization (SEO) to improve your website is visibility on search engines, driving organic traffic to your site. Our strategic social media marketing campaigns engage your audience, boost brand awareness, and drive leads. Pay-Per-Click (PPC) advertising ensures your brand reaches the right audience at the right time, increasing conversions. We analyze data to optimize your marketing strategies and deliver measurable results</p>
          </div>
          <div className={styles.imageContainer}>
          <Image alt='Loading Error' className={styles.serviceImg} src='/digital.png' width={500} height={400}/>
          </div>
          
        </div>

        <div className={styles.web}>
          <div className={styles.imageContainer}>
          <Image alt='Loading Error' className={styles.serviceImg2}  src='/graphic2.png' width={450} height={350}/>
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Designing (Graphic Designing, 3D Animation)</h2>
            <p>Our design team is passionate about creating visually appealing and user-centric designs. User Interface (UI) and User Experience (UX) design are at the core of our web and mobile app development process. We focus on creating intuitive and seamless user experiences, resulting in higher engagement and customer satisfaction. Our graphic designing services cover various aspects, from logo design and brand identity to promotional materials and social media graphics. For captivating visual storytelling, we offer 3D animation services that bring your concepts to life with precision and creativity</p>
          </div>
        </div>


      </div>

      </div>


      <h1 className={styles.heading}>Why Choose Us?</h1>
      <div className={styles.ourApproach}>

        <div className={styles.ourApproach1}>
          <Image alt='Loading Error' width={300} height={150} src='/team.jpg'/>
          <h3 className={styles.heading}>Expert Team</h3>
          <p>Our team of seasoned web developers is well-versed in the latest technologies and frameworks, empowering us to create innovative solutions that meet the demands of a rapidly evolving digital landscape</p>
        </div>

        <div className={styles.customer2}>
        <Image alt='Loading Error' width={300} height={150} src='/collab.jpg'/>
          <h3 className={styles.heading}>Collaborative Approach</h3>
          <p>We believe in building strong partnerships with our clients, fostering open communication, and working hand-in-hand to achieve project success</p>
        </div>

        <div className={styles.ourApproach3}>
        <Image alt='Loading Error' width={300} height={150} src='/qualityAssurance.jpg'/>
          <h3 className={styles.heading}>Quality Assurance</h3>
          <p>We maintain stringent quality assurance processes to ensure that our deliverables meet the highest standards of excellence, reliability, and functionality</p>
        </div>

        <div className={styles.customer4}>
        <Image alt='Loading Error' width={300} height={150} src='/support.jpeg'/>
          <h3 className={styles.heading}>Continued Support</h3>
          <p>Our commitment to your success extends beyond project completion. We offer ongoing support and maintenance services to ensure your web solutions remain cutting-edge and hassle-free</p>
        </div>

      </div>
          
      <div id='courses' className={styles.courseContainer}>    
      <div className={styles.courses}>
        <h1 className={styles.heading}>Courses We Offer</h1>
        <div className={styles.mainCourses}>
          <div className={styles.webDevelopment}>
            <Image alt='' className={styles.courseImg} width={350} height={200} src='/CourseA1.png'/>
            <h2>MERN Stack</h2>
            <div className={styles.duration}>
              <div className={styles.time}>
              <p>Duration: 2 months</p>
              </div>
              <div className={styles.fee}>
              <p> <strike>Rs. 10,000</strike> </p>
              <p>Rs. 4,999 / month</p>
              </div>
            </div>
            <button className={styles.button}>  <Link target='_blank' href='https://drive.google.com/file/d/1FAQdJ6sHk2OXyBWrHSO3F2wH5b1N9B12/view?usp=sharing'>More Details</Link> </button>
          </div>

          <div className={styles.webDevelopment}>
            <Image alt='' className={styles.courseImg} width={350} height={200} src='/CourseA2.png'/>
            <h2>Mobile App Development</h2>
            <div className={styles.duration}>
              <div className={styles.time}>
              <p>Duration: 2 months</p>
              </div>
              <div className={styles.fee}>
              <p> <strike>Rs. 10,000</strike> </p>
              <p>Rs. 5000 / month </p>
              </div>
            </div>
            <button className={styles.button}>  <Link target='_blank' href='https://drive.google.com/file/d/1y3Wj8mtpWo0C7ZuUEE6M0tnAKCFtl07I/view?usp=sharing'>More Details</Link> </button>
          </div>

          <div className={styles.webDevelopment}>
            <Image alt='' className={styles.courseImg} width={350} height={200} src='/CourseA4.png'/>
            <h2>Ethical Hacking</h2>
            <div className={styles.duration}>
              <div className={styles.time}>
              <p>Duration: 2 months</p>
              </div>
              <div className={styles.fee}>
              <p> <strike>Rs. 10,000</strike> </p>
              <p>Rs. 5000 / month </p>
              </div>
            </div>
            <button className={styles.button}>  <Link target='_blank' href='https://drive.google.com/file/d/1Ore3kqev2d0cR_WBqkTS8SXAIt-gdUQf/view?usp=sharing'>More Details</Link> </button>
          </div>
          
        </div>


        <div className={styles.mainCourses}>
          <div className={styles.webDevelopment}>
            <Image alt='' className={styles.courseImg} width={350} height={200} src='/CourseA6.png'/>
            <h2>3D Animation</h2>
            <div className={styles.duration}>
              <div className={styles.time}>
              <p>Duration: 2 months</p>
              </div>
              <div className={styles.fee}>
              <p> <strike>Rs. 10,000</strike> </p>
              <p>Rs. 5000 / month </p>
              </div>
            </div>
            <button className={styles.button}>  <Link target='_blank' href='https://drive.google.com/file/d/18ZBc37arJsqkZNJxlfnG_K6o6yEzd2_1/view?usp=sharing'>More Details</Link> </button>
          </div>

          <div className={styles.webDevelopment}>
            <Image alt='' className={styles.courseImg} width={350} height={200} src='/CourseA3.png'/>
            <h2>Artificial Intelligence</h2>
            <div className={styles.duration}>
              <div className={styles.time}>
              <p>Duration: 2 months</p>
              </div>
              <div className={styles.fee}>
              <p> <strike>Rs. 10,000</strike> </p>
              <p>Rs. 5000 / month </p>
              </div>
            </div>
            <button className={styles.button}>  <Link target='_blank' href='https://docs.google.com/document/d/1mfDMxI6j7palNcDvZLrLJxpWot5jpEid/edit?usp=sharing&ouid=117971602989001529025&rtpof=true&sd=true'>More Details</Link> </button>
          </div>

          <div className={styles.webDevelopment}>
            <Image alt='' className={styles.courseImg} width={350} height={200} src='/CourseA5.png'/>
            <h2>Digital Marketing</h2>
            <div className={styles.duration}>
              <div className={styles.time}>
              <p>Duration: 2 months</p>
              </div>
              <div className={styles.fee}>
              <p> <strike>Rs. 10,000</strike> </p>
              <p>Rs. 5000 / month </p>
              </div>
            </div>
            <button className={styles.button}>  <Link target='_blank' href='https://drive.google.com/file/d/1y3Wj8mtpWo0C7ZuUEE6M0tnAKCFtl07I/view?usp=sharing'>More Details</Link> </button>
          </div>
          
        </div>


      </div>

      </div>

      <div id='ourTeam' className={styles.teamContainer}>

      <div className={styles.team}>
        <h1 className={styles.heading}>Our Team</h1>
        <div className={styles.teamMembers}>
        <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/Agha.png'/>
            <h2 className={styles.heading}>Agha Ahmed</h2>
            <h3 className={styles.heading}>CEO</h3>
          </div>

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/usamaSaeed.jpg'/>
            <h2 className={styles.heading}>Usama Saeed</h2>
            <h3 className={styles.heading}>Manager</h3>
          </div>

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/mohib.png'/>
            <h2 className={styles.heading}>Mohib Khan</h2>
            <h3 className={styles.heading}>Senior Data Scientist</h3>
          </div>

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/hassanZaib.jpg'/>
            <h2 className={styles.heading}>Hassan Zaib</h2>
            <h3 className={styles.heading}>Full Stack Developer</h3>
          </div>

          
          </div>

          <div className={styles.teamMembers}>
         

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/talha.jpg'/>
            <h2 className={styles.heading}>Talha Ahmed</h2>
            <h3 className={styles.heading}>Front End Developer</h3>
          </div>

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/usamaAzeem.webp'/>
            <h2 className={styles.heading}>Usama Azeem</h2>
            <h3 className={styles.heading}>Flutter Developer</h3>
          </div>

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/aghaKumail.jpeg'/>
            <h2 className={styles.heading}>Agha Kumail</h2>
            <h3 className={styles.heading}>2D Animator</h3>
          </div>

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/zia.jpg'/>
            <h2 className={styles.heading}>Zia ul Rehman</h2>
            <h3 className={styles.heading}>3D Animator</h3>
          </div>

          

          </div>

          <div className={styles.teamMembers}>
         

         <div className={styles.team1}>
           <Image alt='' className={styles.teamPics} width={300} height={300} src='/Aqsa.png'/>
           <h2 className={styles.heading}>Aqsa</h2>
           <h3 className={styles.heading}>Graphic Designer</h3>
         </div>

         <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/sania.jpg'/>
            <h2 className={styles.heading}>Hania Khan</h2>
            <h3 className={styles.heading}>Business Developer</h3>
          </div>

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/zeeshan.png'/>
            <h2 className={styles.heading}>Zeeshan</h2>
            <h3 className={styles.heading}>Andriod Developer</h3>
          </div>

          <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/UmairAli.jpeg'/>
            <h2 className={styles.heading}>Umair Ali</h2>
            <h3 className={styles.heading}>UI/UX Designer</h3>
          </div>
         
          
         
         </div>

         <div className={styles.teamMembers}>
         

         <div className={styles.team1}>
           <Image alt='' className={styles.teamPics} width={300} height={300} src='/zakwan.png'/>
           <h2 className={styles.heading}>Zakwan Ali Tariq</h2>
           <h3 className={styles.heading}>Senior Flutter Developer</h3>
         </div>

         <div className={styles.team1}>
            <Image className={styles.teamPics} alt='' width={300} height={300} src='/fahad.png'/>
            <h2 className={styles.heading}>Fahad Suleman</h2>
            <h3 className={styles.heading}>Cyber Security Expert</h3>
          </div>
          
         
         </div>


          
      </div>

      </div>

      <div className={styles.footerContainer}>
    <div className={styles.inner1}>
      <h2 className={styles.footerHeading}>HexTech Developers</h2>
      <p className={styles.desc}> <AiOutlinePhone/> +92 312 1009772 </p>
      <p className={styles.desc}> <CiLocationOn/> Main GT Road, Barrier 2, Taj Complex, Wah Cantt </p>
      </div>
      <div className={styles.inner2}>
      <div className={styles.socialMediaIcons}>
          <Link href='https://www.linkedin.com/'> <Image src='/facebookb.svg' width={34} height={34} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='https://www.facebook.com/'> <Image src='/linkedinb.svg' width={34} height={34} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='https://www.facebook.com/'> <Image src='/twitterb.svg' width={34} height={34} className={styles.facebook} alt='Image Loading Error'/> </Link>
        </div>
      </div>
    </div>




    </div>
  )
}
