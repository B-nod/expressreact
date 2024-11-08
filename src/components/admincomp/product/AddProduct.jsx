import React,{useState,useEffect} from 'react'
import { API } from '../../../config';
import { isAuthenticated } from '../../../auth';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AddProduct = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const[categories,setCategory] = useState([]);
    useEffect(()=>{
        axios.get(`${API}/categorylist`)
        .then(res=>{
          setCategory(res.data)
        })
        .catch(err=>console.log(err))
    },[])
    const { token, user } = isAuthenticated(); // Get user and token

    useEffect(() => {
        if (user && user.role === 1) { // Check if user is admin
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [user]);


    const[productData,setProductData]=useState({
        product_name:'',
        product_price:'',
        countInStock:'',
        product_description:'',
        product_image:'',
        category:''
    })

    const{product_name,product_price,product_description,countInStock} = productData

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (name) => (event) => {
        setProductData({
            ...productData,
            error: false,
            [name]: event.target.value,
        });
    };

    const handleImage = (event) => {
        setProductData({
            ...productData,
            product_image: event.target.files[0],
        });
    };
 

    const handleSubmit= async event=>{

        event.preventDefault()
        try{
            const formData = new FormData();
            formData.append('product_name', productData.product_name)
            formData.append('product_price', productData.product_price)
            formData.append('countInStock', productData.countInStock)
            formData.append('product_description', productData.product_description)
            formData.append('product_image', productData.product_image)
            formData.append('category', productData.category)
            const config = {
                headers:{
                    'Content-Type':'mutlipart/form-data',
                    Authorization:`Bearer ${token}`
                },
            };
            const response = await axios.post(`${API}/postproduct`, formData,config)
            setSuccess(true)
            setError(false)
            setProductData({
                product_name:'',
                product_price:'',
                countInStock:'',
                product_description:'',
                product_image:'',
                category:''
            })
        }
        catch(err){
            setError(err.response.data.error)
            setSuccess(false)
        }
    }

      // to show error message
  const showError = () => {
    return (
        error &&
      <div
        className="bg-red-100 text-red-800 p-4 rounded-lg"
       
        role="alert"
      >
        <strong className="font-bold text-sm mr-4">Error!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">{error}</span>
      </div>
    );
  };

  // to show success message
  const showSuccess = () => {
    return ( success &&
      <div
        className="bg-green-100 text-green-800 p-4 rounded-lg"
        role="alert"
       
      >
        <strong className="font-bold text-sm mr-4">Success!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">New Product Added </span>
      </div>
    );
  };

  if (!isAdmin) {
    return <div>Access denied. Only admins can add products.</div>;
}

  return (
    <>
    <div className="flex flex-wrap justify-center">
      <div className="w-full xl:w-12/12">
        <div className="bg-white shadow-md rounded-lg mb-4 p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Add Category</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="/product-upload" className="text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/product-upload" className="text-blue-600">
                  Category
                </a>
              </li>
              <li className="text-gray-600">Add Product</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-1/2 p-4">
        <form>
          <div className="bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="text-xl font-medium">Product Form</h4>
              <button className="bg-blue-600 text-white p-2 rounded">
                <i className="material-icons"></i>
              </button>
              
            </div>
            <div className="p-4">
            {showError()}
              {showSuccess()}
              <div className="mt-2 mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="pname">
                  Product Name
                </label>
                <input
                  type="text"
                  id="pname"
                  name='pname'
                  placeholder="Type here"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange('product_name')}
                  value={product_name}
                />
                 <label className="block text-sm font-medium mb-2" htmlFor="price">
                  Product Price
                </label>
                <input
                  type="number"
                  id="price"
                  name='price'
                  placeholder="Type here"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange('product_price')}
                  value={product_price}
                />
                 <label className="block text-sm font-medium mb-2" htmlFor="qty">
                  Stock quantity
                </label>
                <input
                  type="number"
                  id="qty"
                  name='qty'
                  placeholder="Type here"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange('countInStock')}
                  value={countInStock}
                />
                 <label className="block text-sm font-medium mb-2" htmlFor="des">
                  Product Description
                </label>
                <textarea
                
                  id="des"
                  name='des'
                  placeholder="Type here"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange('product_description')}
                  value={product_description}
                ></textarea>
                 <label className="block text-sm font-medium mb-2" htmlFor="img">
                  Product Image
                </label>
                <input
                  type="file"
                  id="img"
                  name='img'
                  accept='image/*'
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleImage}
                 
                />
                 <label className="block text-sm font-medium mb-2" htmlFor="category">
                  Category
                </label>
                 <select  className=' border-black border-opacity-20 outline-none sm:text-sm text-xs w-full px-4 py-2 border rounded-md'>
                    {categories.map((c,i)=>(
                              <option value={c._id} key={i}>
                                {c.category_name}
                              </option>
                    ))}
                  
                 </select>
                <button
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={handleSubmit}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default AddProduct