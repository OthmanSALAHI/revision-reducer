import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddAction } from '../Actions';
import { useNavigate } from 'react-router-dom';

function AddComponent() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const stagiaires = useSelector((state) => state.stagiaires);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    dispatch(AddAction({
        id:stagiaires.at(-1).id + 1,
      name: name,
      age: age
    }));
    setName('');
    setAge('');
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Add New Stagiaire</h1>
        <form className="space-y-6" onSubmit={Submit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-500 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
          >
            Submit Information
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddComponent;
