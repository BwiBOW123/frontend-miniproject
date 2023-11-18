'use client'
import React, { useState } from 'react';
import axios from 'axios';

type Member = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  card: string;
};

type Card = {
  totla_cost: number;
  member_id: number;
  member_email: string;
};


const RegistrationForm: React.FC = () => {

  const [member, setMember] = useState<Member>({
    username: '',
    password: '',
    fullname: '',
    email: '',
    card: '',
  });
  const [cart, setCart] = useState<Card>({
    totla_cost: 0,
    member_id: 0,
    member_email: '',

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember({ ...member, [e.target.name]: e.target.value });
    cart.member_email = member.email
    
  };

  const handlerRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://54.251.12.80:8000/users', member);
      console.log('Member created:', response.data);
      const response1 = await axios.post('http://54.251.12.80:8000/Carts', cart);
      console.log('Member created:', response1.data);
      // Reset the form or handle the response
      window.location.href = '/';
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  return (
    <div className="text-black bg-custom-blue min-h-screen flex items-center justify-center">
      <div className=" bg-white p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-6  text-center">Register Form</h1>
        <form >
          <div className="mb-4">
            <input onChange={handleChange} name='fullname' type="text" placeholder="Name" className="p-2 w-full border rounded-md bg-white  placeholder-gray-400" />
          </div>
          <div className="mb-4">
            <input onChange={handleChange} name='username' type="text" placeholder="username" className="p-2 w-full border rounded-md bg-white  placeholder-gray-400" />
          </div>
          <div className="mb-4">
            <input onChange={handleChange} name='password' type="password" placeholder="password" className="p-2 w-full border rounded-md bg-white  placeholder-gray-400" />
          </div>
          <div className="mb-4">
            <input onChange={handleChange} name='email' type="email" placeholder="email" className="p-2 w-full border rounded-md bg-white  placeholder-gray-400" />
          </div>
          <div className="mb-4">
            <input onChange={handleChange} name='card' type="text" placeholder="Card ID" className="p-2 w-full border rounded-md bg-white  placeholder-gray-400" />
          </div>
          <button onClick={handlerRegister} className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
