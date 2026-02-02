// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Manmeet Kaur Oberoi',
    title: 'UG STUDENT|BSc Economics with Data Science',
    image: getAsset('images/manmeet.png'), // Customize or replace with your profile image
    description:
      'I am currently pursuing a Bachelor of Science in Economics with Data Science, where I am  developing a strong foundation in economic analysis along with practical data handling and analytical skills. 
      '\n' +
      'I am currently studying in Christ University and am interested in Data analysis and solving real world problems through Data Science.\n' +
      '\n' +
      'I am currently the assistant editor at Equinomics,The Economics Department Newsletter that is helping me with my research skills.\n' +
      '\n' + 
    'location: Bengaluru, India',
  },

  seo: {
    title: 'Manmeet Kaur Oberoi-UG Student',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Your Role', 'Your Focus', 'Your Interest', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Contact', url: '/contact' },
  ],

  education: [
    {
      institution: 'Christ University,Bannerghatta Road Campus',
      degree: 'BSc Economics with Data Science',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
    },
    {
      institution: 'Christ Academy Junior College',
      degree: 'Class XII(PCMC)-90.2%',
      year: '2023-2025',
      image: getAsset('images/education/placeholder.png'),
    },
    {
      institution:'Christ Academy ICSE School',
      degree:'Class X(ICSE)-97.4%',
      year:'2015-2023',
    },
  ],




  // ✅ Experience section updated
  experience: [
    {
      title: 'Volunteer',
      place: 'NGO-Snehasadan Boys Home',
      time: '(30/11/25-Present)',
    },
  ],



  contact: {
    email: 'manmeetkaur9777@gmail.com',
    linkedin: 'https://www.linkedin.com/in/manmeet-840355376/',
    github: 'https://github.com/manmeth',
  },
};

export default siteConfig;
