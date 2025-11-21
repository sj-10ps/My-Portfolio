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
      link:'https://jobseek-frontend-e93g.onrender.com'
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
      link:'https://jobseek-frontend-e93g.onrender.com'
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
      link:'https://refugee-rescue-1.onrender.com/'
    },
    {
      title: 'Thozhilurapp Management System',
      tech: 'Python Flask',
      type:'web',
      description: 'Web app for managing kerala thozhilurapp.Consists of three modules admin,overseer,payments.The app helps in automating the workflow includes work estimation,work approval,attendance tracking,wage estimation,wage approval, insurance and accident approval,mate assignment etc ..',
       demo:[{
        module:'company',
        username:'messi@gmail.com',
        password:'sj1234'
      },
    {
      module:'user',
        username:'pssoorajkbfc@gmail.com',
        password:'sj1234'

    },{
       module:'admin',
        username:'sjjs@gmail.com',
        password:'sj1234'

    }],
      icon: '⛏'
    },
    {
      title: 'Real-Time Chat Application',
      tech: 'MERN + Socket.io',
      type:'web',
       demo:[{
        module:'company',
        username:'messi@gmail.com',
        password:'sj1234'
      },
    {
      module:'user',
        username:'pssoorajkbfc@gmail.com',
        password:'sj1234'

    },{
       module:'admin',
        username:'sjjs@gmail.com',
        password:'sj1234'

    }],
      description: 'Real-time messaging platform with group chats, file sharing, and video calls.',

      icon: '💬',
      link:'https://jobseek-frontend-e93g.onrender.com'
    },
    {
      title: 'Portfolio CMS',
      tech: 'Django + React',
      type:'web',
       demo:[{
        module:'company',
        username:'messi@gmail.com',
        password:'sj1234'
      },
    {
      module:'user',
        username:'pssoorajkbfc@gmail.com',
        password:'sj1234'

    },{
       module:'admin',
        username:'sjjs@gmail.com',
        password:'sj1234'

    }],
      description: 'Content management system for developers to showcase their projects and blogs.',
      icon: '🎨',
      link:'https://jobseek-frontend-e93g.onrender.com'
    },
  ];



  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using MERN stack and Django. Mentoring junior developers and architecting cloud-based solutions.',
      highlights: ['Led team of 5 developers', 'Reduced load time by 60%', 'Deployed 10+ production apps']
    },
    {
      role: 'Mobile App Developer',
      company: 'StartUp Co.',
      period: '2021 - 2022',
      description: 'Built cross-platform mobile applications using React Native with focus on performance and user experience.',
      highlights: ['Built 8 mobile apps', '4.8★ average rating', '100K+ downloads']
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      description: 'Developed responsive web applications and REST APIs. Collaborated with designers to implement pixel-perfect UIs.',
      highlights: ['20+ client projects', 'API integration expert', 'Agile methodology']
    },
  ];

  const certifications = [
    { name: 'MongoDB Certified Developer', issuer: 'MongoDB University', year: '2023' },
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Meta React Native Specialization', issuer: 'Meta', year: '2022' },
    { name: 'Full Stack Web Development', issuer: 'freeCodeCamp', year: '2021' },
    { name: 'Python for Data Science', issuer: 'IBM', year: '2021' },
    { name: 'Advanced JavaScript', issuer: 'Udemy', year: '2020' },
  ];

  const achievements = [
    { icon: '🏆', text: 'Built 15+ production-ready applications', color: '#FFD700' },
    { icon: '🌟', text: 'Contributed to 10+ open source projects', color: '#00D9FF' },
    { icon: '👥', text: 'Led a team of 5 developers successfully', color: '#FF6B6B' },
    { icon: '⚡', text: 'Improved app performance by 40%', color: '#4ECDC4' },
    { icon: '📚', text: 'Published 5 technical articles', color: '#95E1D3' },
    { icon: '🎤', text: 'Speaker at 3 tech conferences', color: '#F38181' },
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
      title:''
     }

  ]
  export {skills,projects,experience,certifications,achievements,badges,projectshots}