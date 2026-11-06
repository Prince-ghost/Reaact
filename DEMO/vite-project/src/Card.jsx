// const Card = ({ title, img, description}) => {
//     let marks = 45;
//     let 
// }
// import { useContext } from 'react';
// import { UserContext } from './UserContext';

// const B = () => {
//     const data = useContext(UserContext);

//     return (
//         <div>
//             <h1>B components</h1>
//             <h1>This iis our Bcomonent: {data}</h1>
//         </div>
//     );
// };

// export default B;


import "./card.css"

const Card = ({ title, img, description }) => {
    return (
        <article className ="">
            {img ? <img className="img" src ={img} alt={title} /> : null}
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <button className="btn" type="button">View</button>
        </article>
    )
}

export default Card;