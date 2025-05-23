import React from 'react'

type CardProps = {
    text: string;
    image: string; //path to image
}

const Cards = ({text,image}:CardProps) => {
  return (
    <div>
        <a href='/projects'>
            <img 
            src={image}
            alt="Test Image"
            className="w-[400px] h-[300px]"
            />
        <div>{text}</div>
        </a>
    </div>
  );
};

export default Cards