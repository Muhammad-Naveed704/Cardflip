import"./App.css"
import {useState} from "react"

function App() {
  const initialCardData = [
    {
      question: "React",
      answer: "React is a community. It's a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners "
    },
    {
      question: "HTML",
      answer: "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn"
    },
    {
      question: "JAVA SCRIPT",
      answer: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard."
    },{
      question: "BOOTSTRAP",
      answer: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."
    },{
      question: "GITHUB",
      answer: "GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code."
    },{
      question: "NODE JS",
      answer: "Node.js is a cross-platform, open-source server environment that can run on Windows,"
    },{
      question: "MANGO DB",
      answer: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program,"
    },{
      question: "MANGOOSE",
      answer: "Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment."
    }
    ,{
       question: "EXPRESS JS",
      answer: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs. With a myriad"
    },{
      question: "FIREBASE",
      answer: "Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure"
    }
  ];
  const [cardData, setCardData] =useState([initialCardData])
  function handleMouseOver(index){
  const updatedData=[...cardData] 
  updatedData[index].question= cardData[index].answer    
  setCardData(updatedData)
  }
  function handleMouseLeave(){
    setCardData(initialCardData)
  }
  return(
    <div className="cardBody">
      {cardData.map((data,index )=>(
        <div className="singleCard" onMouseOver={()=> handleMouseOver(index)} onMouseLeave={handleMouseLeave}>
          {data.question}
        </div>
      ))}

    </div>
  )
  
}

export default App;

