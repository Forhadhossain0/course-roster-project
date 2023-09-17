/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import PropTypes from 'prop-types';

const Carts1 = ({passCartData,totalprice,remains,getCredit}) => {
// console.log(handleDataPass) 
    return (
        <div className='bg-white text-left w-64 py-3 px-5 mx-5 text-black rounded-lg shadow-xl '>
            <h2 className='text-green-600 py-4 font-sans   '>Credit Hour Remaining {remains} hr </h2> <hr />

            <h2 className='py-3  font-bold '>Course name</h2>
            {
                passCartData.map((cart) => (
                    <div key={cart.id}> 
                    <li className='text-[12px] text-gray-700'>{cart.title}</li>
      
                    </div>     
                ))
            }
            <hr className='mt-6 font-extrabold' />
            <h2 className='py-3 text-[12px] font-bold text-gray-600 font-sans  '>Total Credit Hour : {getCredit}</h2> 
            <hr />
            <h2 className='py-2 text-[12px] font-bold text-gray-600 font-sans '>Total Prices : {totalprice} USD</h2>
        </div>
    );
};

Carts1.propTypes = {
    cart: PropTypes.object //is requierd is not will use now  cart: PropTypes.object.isRequired
};

export default Carts1;