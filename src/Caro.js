import React, {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './App.css';

// Some fake data... pretend I got it from some API
const data = [
    {
        title: "CoDex 1962",
        author: "Sjon",
        date: "June 11th 2021",
        rating: "7",
        critic: "Parul Sehgal",
        subName: "PS",
        award: "Award Winning Critic since 1997",
        review: "“This book is a Norse Arabian Nights. Each section is a honeycomb. Stories are nested in stories and crack open to reveal rumor and anecdote, prose poems, tendrils of myth. This abundance isn’t an empty show of virtuosity but rooted in Sjon’s belief in the power and obligation of old-fashioned storytelling…”"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        date: "June 10th 2021",
        rating: "9",
        critic: "John Smith",
        subName: "JS",
        award: "Award Winning Critic since 2004",
        review: "“The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.”"
    },
    {
        title: "1984",
        author: "George Orwell",
        date: "June 8th 2021",
        rating: "9",
        critic: "Adam Taylor",
        subName: "AT",
        award: "Critic Award Winner 2020",
        review: "“Nineteen Eighty-Four: A Novel, often referred to as 1984, is a dystopian social science fiction novel by the English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.”"
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        date: "June 5th 2021",
        rating: "10",
        critic: "Parul Sehgal",
        subName: "PS",
        award: "Award Winning Critic since 1997",
        review: "“Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.”"
    },
]

function Caro() {
  let settings = {
      infinite: false,
      speed: 800,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 600,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <div style = {{alignItems:"center", justifyContent:"center", backgroundColor:"#4B5563"}}>
        <Slider {...settings} style = {{width: "90%", marginLeft:"5%"}}>
            {data.map((current) => (
               <div className = "grid grid-cols-1">
               <div className = "bg-gray-600 flex justify-center items-center" style = {{minHeight:"500px"}}>
                   <div className = "w-4/5 flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                       <div className = "bg-gray-200 text-gray-700 text-lg px-6 py-4 flex justify-between">
                       <div>
                           <p className = "font-bold">{current.title}</p>
                           <p className = "text-sm">{current.author}</p>
                       </div>

                       <div className = "bg-green-500 w-12 h-12 flex justify-center items-center rounded-full font-bold text-gray-100">{current.rating}</div>

                       </div>
                       <div className = "flex px-6 py-4 justify-between">
                           <div className = "bg-blue-600 text-xs px-2 py-1 rounded-full border-gray-200 text-gray-200">Approved Critic</div>

                           <div className = "text-sm">{current.date}</div>
                       </div>

                       <div className = "px-6 py-4">
                           <div className = "text-sm" style = {{minHeight:"150px"}}>{current.review}</div>
                       </div>

                       <div className = "bg-gray-200 px-6 py-4">
                           <div className ="flex items-center pt-3">
                               <div className = "bg-yellow-500 w-12 h-12 flex justify-center items-center rounded-full font-bold text-gray-100">{current.subName}</div>
                               <div className ="ml-4">
                                   <p className = "font-bold">{current.critic}</p>
                                   <p className = "text-sm">{current.award}</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               </div>
            ))}
        </Slider>
    </div>
  );
}


export default Caro;
