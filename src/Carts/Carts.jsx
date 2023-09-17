/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { BiDollar } from "react-icons/bi";
import { AiOutlineRead } from "react-icons/ai";
import Carts1 from "./Carts1";
import { useEffect, useState } from "react";

const Carts = () => {

const [displayCartData,setDisplayCartData] = useState ([]);
const [passCartData,setPassCartData] = useState([]);
const [totalprice,setTotalprice] = useState (0);
const [remains,setRemains] = useState (0);
const [getCredit,setGetCredit] = useState (0);

useEffect(() => {
     fetch('../public/mydata.json')
    .then(res => res.json())
    .then(data => setDisplayCartData(data))
},[])


const handleDataPass = (data) =>{
    const isCarthave = passCartData.find((cart) => cart.id === data.id);
    let totalprice = data.price;
    let credit = data.credit;

    if(isCarthave){
        return  alert('This item already Added! try another one..');
    }
    else{
        // passCartData.forEach(cart => (totalprice = totalprice + cart.price) );
        passCartData.forEach(cart => (totalprice = totalprice + cart.price) );
        passCartData.forEach(cart => (credit = credit + cart.credit) );
    
    let totalRemaining = 20 - credit;
    if(credit > 20 ){
        return alert ('Your have no enough credits !')
    }
    setRemains(totalRemaining);
    setGetCredit(credit)
    setTotalprice(totalprice);
    setPassCartData([...passCartData,data]);
}

};




  return (
    <main >
      {/* header */}
      <div className=" text-[10px]  font-semibold shadow-md text-green-400 font-mono text-center mt-4 mb-10">
        <h1 >  Course Registration </h1>
      </div>
      {/* main container */}
      <section className="flex">
        {/* left side design */}
            <div className="gap-5 grid grid-cols-3" > 
         {/* containers*/}
         {
            displayCartData.map(cart => 
         
         <div className=" w-60 h-76 bg-white p-3 text-black rounded-lg shadow-xl " key={cart.id}>
            <img className="rounded-lg " src={cart.cover}   alt=""/>
            <h2 className="text-left text-sm py-1 font-extrabold  ">{cart.title}</h2>
            <p className="  text-xs font-[Inter]  text-left py-1  text-gray-600"> {cart.description} </p>
            <div className="flex justify-evenly py-2 text-[12px] text-gray-600"> 
            <BiDollar className=" mt-0.5 " />   <span className="mr-4 font-mono ">Price : {cart.price}</span>
            <AiOutlineRead className=" mt-0.5"/><span className=" font-mono ">Credit : {cart.credit}hr</span> 
            </div>
            <button onClick={()=> handleDataPass(cart)} id="selectbtn" className=" rounded-md bg-blue-600 w-full text-xs    text-center  text-white ">Select</button>
          </div>
            ) }
 </div>

        {/* right side design for Carts1 */}
        <div>
          <Carts1 passCartData={passCartData} totalprice={totalprice} remains={remains} getCredit={getCredit} > </Carts1>
        </div>
      </section>
    </main>
  );
};

Carts.propTypes = {
  props: PropTypes.array,
};

export default Carts;
