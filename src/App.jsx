import React from 'react';
import AddComponent from './config/Components/AddComponent';
import ListComponent from './config/Components/ListComponent';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import EditComponent from './config/Components/EditComponent';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <BrowserRouter>
        <header className="bg-white shadow">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <Link
                to={'/'}
                className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-300"
              >
                List des stagiaires
              </Link>
              <Link
                to={'/ajouter-stagiaire'}
                className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Ajouter un stagiaire
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-6">
          <Routes>
            <Route path={'/'} element={<ListComponent />} />
            <Route path={'/ajouter-stagiaire'} element={<AddComponent />} />
            <Route path={'/editer-stagiaire/:id'} element={<EditComponent />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
