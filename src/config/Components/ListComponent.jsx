import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAction } from '../Actions';
import { Link } from 'react-router-dom';

function ListComponent() {
    const stagiaires = useSelector((state) => state.stagiaires);
    const dispatch = useDispatch();
    const deletePerson=(id)=>{
        dispatch(DeleteAction(id))
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-4xl">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Stagiaire List</h1>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-indigo-500 text-white text-left">
                <th className="py-3 px-4 uppercase font-semibold text-sm">ID</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Name</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Age</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stagiaires.map((e, index) => (
                <tr className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} key={e.id}>
                  <td className="py-3 px-4">{e.id}</td>
                  <td className="py-3 px-4">{e.name}</td>
                  <td className="py-3 px-4">{e.age}</td>
                  <td className="py-3 px-4 flex gap-2 items-center justify-left">
                    <button
                      className="text-red-600 hover:text-red-800 focus:outline-none"
                      onClick={() => deletePerson(`${e.id}`)}
                    >
                      DELETE
                    </button>
                    <Link
                      className="text-red-600 hover:text-red-800 focus:outline-none"
                      to={`/editer-stagiaire/${e.id}`}
                    >
                      EDIT
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListComponent;
 