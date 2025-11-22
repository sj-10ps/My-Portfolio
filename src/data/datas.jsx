import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket } from 'lucide-react'; 
 
 const skills = [
    'MongoDB', 'Express.js', 'React.js', 'Node.js', 
    'React Native', 'Django', 'Python', 'JavaScript',
    'REST API', 'Socket.IO', 'PostgreSQL', 'Redux',
    'Kotlin Jetpack','Bootstrap','HTML5+CSS3','Github'
  ];

  const projects = [
    {
      title: 'Jobseek Web App',
      type:'web',
      tech: 'MERN Stack',
      description: 'JobSeek makes job hunting fast and social. Create your profile,upload resume,generate resume with your uploaded details, find the right jobs, apply instantly, chat in real time, and stay updated. Companies can post openings, track applicants, and connect with talent effortlessly.',
      demo:[{
        module:'Company',
        username:'messi@gmail.com',
        password:'sj1234'
      },
    {
      module:'User',
        username:'pssoorajkbfc@gmail.com',
        password:'sj1234'

    }],
      icon: '💼',
      link:'https://jobseek-frontend-e93g.onrender.com',
      github:["https://github.com/sj-10ps/jobseek-frontend","https://github.com/sj-10ps/jobseek-backend"]
    },
    {
      title: 'Jobseek Mobile App',
      type:'mobile',
      tech: 'React Native',
      description: 'Mobile version of jobseek for users to find jobs faster while staying connected Browse jobs, apply instantly, upload your resume,generate resume with your uploaded details, chat with others in real time, share posts, and grow your professional network — all in one app.',
       demo:[
    {
      module:'User',
        username:'pssoorajkbfc@gmail.com',
        password:'sj1234'

    }],
      icon: '💼',
      link:'',
      github:["https://github.com/sj-10ps/jobseek-mobile","https://github.com/sj-10ps/jobseek-backend"]
    },
    {
      title: 'Refugee Rescue Web App',
      tech: 'Django',
      type:'web',
      description: 'Web app for rescuing the people abandoned on streets.Consists of three modules organisation, admin,user.Organisations can view ,adopt refugees and raise funds and charities.User can upload refugee details and track adoption status and provide charity,view charity status.Admin can track companies and users and complaints',
       demo:[{
        module:'Organisation',
        username:'org',
        password:'org'
      },
    {
      module:'User',
        username:'sj',
        password:'sj'

    }],
      icon: '👝',
      link:'https://refugee-rescue-1.onrender.com/',
      github:["https://github.com/sj-10ps/Refugee-rescue"]
    },
    {
      title: 'Thozhilurapp Management System (WEB)',
      tech: 'Python Flask',
      type:'web',
      description: 'Web app for managing kerala thozhilurapp.Consists of three modules admin,overseer,payments.The app helps in automating the workflow includes work estimation,work approval,attendance tracking,wage estimation,wage approval, insurance and accident approval,mate assignment etc ..',
       demo:[{
        module:'Admin',
        username:'admin',
        password:'admin'
      },
    {
      module:'Overseer',
        username:'ovr',
        password:'ovr'

    },{
       module:'Payment',
        username:'payment',
        password:'payment'

    }],
      icon: '⛏',
      link:'https://thozhilurapp-web-app.onrender.com/',
      github:["https://github.com/sj-10ps/Thozhilurapp-web-app"]
    },
    {
      title: 'Thozhilurapp Management System (Android)',
      tech: 'Android Java',
      type:'mobile',
       demo:[{
        module:'Mate',
        username:'mate',
        password:'mate'
      },
    {
      module:'Worker',
        username:'worker',
        password:'worker'

    }],
      description: 'Android app for automating kerala thozhilurapp..includes features like worker assignment,view assigned duties,attendance tracking, complaint registration,viewing wage bill and insurance details etc',

      icon: '⛏',
      link:'',
      github:["https://github.com/sj-10ps/Thozhilurapp-Android-app","https://github.com/sj-10ps/Thozhilurapp-web-app"]
    },
      {
      title: 'Yourcanteen',
      tech: 'Kotlin + Jetpack Compose',
      type:'mobile',
       demo:[],
      description: 'A mini restaurant app were users can edit profile,view food items,add to cart and order',
      icon: '🍕',
      link:'',
      github:["https://github.com/sj-10ps/Yourcanteen","https://github.com/sj-10ps/foodordering-kotlindjango"]
    },
    {
      title: 'OkaBoka',
      tech: 'React Native(Tamagui UI)',
      type:'mobile',
       demo:[],
      description: 'A Tamagui Ui Demo App',
      icon: '📸',
      link:'',
      github:["https://github.com/sj-10ps/OkaBoka"]
    },
  
  ];



  const experience = [

    {
      id:'1',
      role: 'MERN Stack Developer Intern',
      company: 'RISS TECHNOLOGIES CALICUT',
      period: 'May 2025 - Sep 2025',
      description: 'Developed a full stack web application called Jobseek using MERN stack and deployed it in render.Gained hands on experience in MERN stack developed as well as tools like github,postman and render deployment.',
      highlights: ['React.js','Express.js','Node.js','MongoDB',"Redux","Socket.io","Github","Postman","Render Hosting"],
      certificate:'/merncertificate.pdf',
      link:'https://jobseek-frontend-e93g.onrender.com'
    },
      {
        id:'2',
      role: 'Web Developer Intern',
      company: 'ETHINOVIA CONSULTANCY PRIVATE LIMITED',
      period: 'Jan 2025 - May 2025',
      description: 'Developed their Official website using HTML,CSS,Bootstrap Template',
      highlights: ["HTML","CSS","BOOTSTRAP","Github"],
      certificate:'https://drive.google.com/file/d/10OeJb4q2UcbDOY-ged8asz6kcDBkTBXj/view?usp=sharing',
      link:'https://ethinovia.com/'
    },
    
  ];

  

  const certifications = [
    { id:"1",name: 'Meta Front-End Developer', issuer: 'Meta', year: '2025' ,pdf:'https://www.coursera.org/account/accomplishments/specialization/certificate/LFA7DROVWEFF'},
    { id:"2",name: 'Meta Android Developer', issuer: 'Meta', year: '2025' ,pdf:'https://www.coursera.org/account/accomplishments/specialization/certificate/UNXJVGQM307J'},
    { id:"3",name: 'Meta React Certification', issuer: 'Meta', year: '2025' ,pdf:'https://www.coursera.org/account/accomplishments/certificate/2EWPSG96WEHQ'},
    { id:"4",name: 'Meta React Native Certification', issuer: 'Meta', year: '2025' ,pdf:'https://www.coursera.org/account/accomplishments/certificate/M2F9THD8Z3IG'},
    { id:"5",name: 'IBM Node.js and Express.js Certification', issuer: 'IBM', year: '2025' ,pdf:'https://www.coursera.org/account/accomplishments/certificate/NEVPB62DIQ02'},
    { id:"6",name: 'IBM Django with SQL Certification', issuer: 'IBM', year: '2025' ,pdf:'https://www.coursera.org/account/accomplishments/certificate/SAMMOGNF3TSK'},
    {id:"7",name:'Meta JavaScript Certification',issuer:'Meta',year:'2025',pdf:'https://www.coursera.org/account/accomplishments/certificate/LN8APB1OJTC9'},
    {id:"8",name:'IBM Python Certification',issuer:'IBM',year:'2025',pdf:'https://www.coursera.org/account/accomplishments/certificate/557XK8V43PIU'},
     {id:"9",name:'Meta Version Control (Github)',issuer:'Meta',year:"2025",pdf:'https://www.coursera.org/account/accomplishments/certificate/DILLZ6PG1X10'},
    {id:"10",name:'Meta HTML CSS Certification',issuer:'Meta',year:'2025',pdf:'https://www.coursera.org/account/accomplishments/certificate/Z965GU8DQ37H'},
    {id:"11",name:'Full stack development using Django Certification',issuer:'Fortune Institute of Technology',year:'2024',pdf:'https://drive.google.com/file/d/1Elmsr4Q_1Atu9FTySIPPmDJhouP3i6e-/view?usp=sharing'},
    {id:"12",name:'NASA Hackathon Participation Certificate',issuer:'NASA',year:'2024',pdf:'https://drive.google.com/file/d/1MrIt2LT1bson1MbOHOeAE0IPwpPlvnSg/view?usp=sharing'},
  ];

  const achievements = [
    { icon: '🏆', text: 'Bharat Scouts and Guides Rajyapuraskar Winner', color: '#FFD700' },
    { icon: '🌟', text: 'Participated in NASA Hackathon', color: '#00D9FF' },
    { icon: '👥', text: 'Team Lead of College Final Year Project', color: '#FF6B6B' },
    { icon: '🎤', text: '1 Year Home Tutor Experience', color: '#F38181' },
    { icon: '⚡', text: '20+ Github Repos', color: '#4ECDC4' },
    { icon: '📱', text: '4+ Web+Mobile applications build', color: '#95E1D3' },
    
  ];

  const badges = [
    { name: 'GitHub', count: '20+ Repos', icon: <Github size={24} />,link:"https://github.com/sj-10ps" },
    { name: 'LinkedIn', count: '10+ Connections', icon: <Linkedin size={24} />,link:"https://www.linkedin.com/in/ps-sooraj/" },
    { name: 'Credly Badges', count: 'Meta & IBM Badges', icon: <Award size={24} />,link:"https://www.credly.com/users/sooraj-ps.c7a337d2" },
   
  ];






  const projectshots=[
     {
      title:'Jobseek Mobile App',
      images:[
        "/jobseek/js1.jpg",
        "/jobseek/js2.jpg",
        "/jobseek/js3.jpg",
        "/jobseek/js4.jpg",
        "/jobseek/js5.jpg",
        "/jobseek/js6.jpg",
        "/jobseek/js7.jpg",
        "/jobseek/js8.jpg",
        "/jobseek/js9.jpg",
        
      ]
     },
     {
      title:'Thozhilurapp Management System (Android)',
      images:[
        "/tms/tms1.png",
         "/tms/tms2.png",
          "/tms/tms3.png",
           "/tms/tms4.png",
            "/tms/tms5.png",
             "/tms/tms6.png",
              "/tms/tms7.png",
               "/tms/tms8.png",
                "/tms/tms9.png",
                 "/tms/tms10.png",
                  "/tms/tms11.png",
      ]
     },
     {
      title:"OkaBoka",
      images:[
        "/okaboka/01.jpg",
         "/okaboka/02.jpg",
          "/okaboka/03.jpg",
           "/okaboka/04.jpg",
            "/okaboka/05.jpg",
             "/okaboka/06.jpg",
              "/okaboka/07.jpg",
               "/okaboka/08.jpg",
        
      ]
     },
        {
      title:"Yourcanteen",
      images:[
        "/yourcanteen/yc1.png",
         "/yourcanteen/yc2.png",
          "/yourcanteen/yc3.png",
           "/yourcanteen/yc4.png",
            "/yourcanteen/yc5.png",
             "/yourcanteen/yc6.png",
              "/yourcanteen/yc7.png",
               "/yourcanteen/yc8.png",
               "/yourcanteen/yc9.png",
        
      ]
     }

  ]


    const educationData = [
  {
    institution: 'University of Calicut',
    course: 'Bachelor of Computer Applications',
    from: '2022',
    to: '2025',
    grade: '84%'
  },
  {
    institution: 'VR.Appu Memorial School Thaikkad South',
    course: 'Science',
    from: '2020',
    to: '2022',
    grade: '93%'
  }
];


  export {skills,projects,experience,certifications,achievements,badges,projectshots,educationData}