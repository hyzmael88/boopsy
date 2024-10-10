import React, { useState } from 'react';

function TrackingModal({ isOpen, close, onSubmit }) {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = () => {
    onSubmit(trackingNumber);
    close();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg w-80 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Introduce la Guía de Seguimiento</h2>
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border rounded p-2 w-full mb-4"
            placeholder="Número de seguimiento"
          />
          <div className="flex justify-end space-x-2">
            <button onClick={close} className="px-4 py-2 bg-gray-200 rounded">Cancelar</button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Guardar</button>
          </div>
        </div>
      </div>
    )
  );
}

export default TrackingModal;
