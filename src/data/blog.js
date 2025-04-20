import logo from "../assets/logo";

const blogData = {
  name: "Underreacted",
  image: logo,
  about: "Personal blog by Dan Abramov." + " I explain with words and code.",
  
  posts: [
    {
      id: 1,
      title: "The WET Codebase",
      date: "July 13, 2020",
      preview: "Come waste your time with me.",
      minutes: 1,
    },
    {
      id: 2,
      title: "Goodbye, Clean Code",
      date: "January 11, 2020",
      preview: "Let clean code guide you.Then let it go.",
      minutes: 5,
    },
    {
      id: 3,
      title: "My Decade in Review",
      preview: "A personal reflection.",
      minutes: 26,
    },
  ],
};

export default blogData;
