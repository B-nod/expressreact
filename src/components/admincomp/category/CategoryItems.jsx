import React,{useEffect, useState} from 'react'
import CategoryCard from './CategoryCard';
import CategoryHeader from './CategoryHeader';
import { productItems } from '../../../utils/data';
import axios from 'axios';
import { API } from '../../../config';

const CategoryItems = ({ isDarkmode }) => {
  const[category,setCategory] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(()=>{
      axios.get(`${API}/categorylist`)
      .then(res=>{
        setCategory(res.data)
      })
      .catch(err=>console.log(err))
  },[])

  return (
    <div className="w-full overflow-x-scroll scrollbar  ">
      <div className="lg:w-[1370px] w-[1170px]">
        <CategoryHeader setIsChecked={setIsChecked} />
         {/* Check if category data is empty or undefined */}
         {category.length === 0 ? (
                <p>Loading...</p> // Display loading message
            ) : (
                category.map((data, index) => (
                    <CategoryCard
                        key={index}
                        isDarkmode={isDarkmode}
                        data={data}
                        index={index}
                        isChecked={isChecked}
                    />
                ))
            )}
      </div>
    </div>
  );
}

export default CategoryItems