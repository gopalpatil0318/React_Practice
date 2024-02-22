import React, { useState, useEffect } from 'react'
import MyLove from './MyLove';

function MyLoveContainer() {

    let myLoveList = [
        {
            name: "Sneha",
            message: "My first Love hai yaar I love Sneha"
        },
        {
            name: "Sakshi",
            message: "love aahe pan Sneha chy khali"
        },
        {
            name: "Shehal",
            message: "love aahe pan Sayali chy khali"
        },
        {
            name: "Kavya",
            message: "love aahe pan Kavya chy khali"
        },
        {
            name: "Aarti",
            message: "love aahe pan Aarti chy khali"
        },
        {
            name: "Neha",
            message: "love aahe pan Neha chy khali"
        },
        {
            name: "Pooja",
            message: "love aahe pan Pooja chy khali"
        },
        {
            name: "Riya",
            message: "love aahe pan Riya chy khali"
        },
        {
            name: "Shreya",
            message: "love aahe pan Shreya chy khali"
        },
        {
            name: "Trisha",
            message: "love aahe pan Trisha chy khali"
        },
        
    ];
    

    const [getLoveName, setGetLoveName] = useState('');

    const [search, setSearch] = useState('');

    const [loveNames, setLoveNames] = useState(myLoveList)

    useEffect(() => {

        let filter = myLoveList.filter((e) => {
            return e.name.toLowerCase().includes(search.toLowerCase());
        });

        

      

        setLoveNames(filter)


        
    }, [search]);

  return (
    <div className='myLoveComponent'>
        <h1>My Love</h1>
        <input type='text' placeholder='Find your Love...' onChange={(e)=> setSearch(e.target.value)}/>
        <br/>
        <span className='proposeLine'>I Love You 🎀 {getLoveName} {getLoveName == 'Sayali' ? '😍😘🥰' : '😄'}</span>

        <br/><br/>

        {loveNames.map((loves) =>{
            return(
            <MyLove name={loves.name} message={loves.message} getName={(e)=> setGetLoveName(e)}/>

            )
        })}

        {
            loveNames.length == 0 ? <div className='notFound'><h2>😔 Tuzya Nashibat Nahiy tii 😔</h2><p>👉 Sorry! Brother</p></div> : ' '
        }

<img src="" class="" />

      
 
       

    </div>
  )
}

export default MyLoveContainer