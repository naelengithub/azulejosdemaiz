import React from "react";

export default function TalaveraCard() {
  return (
    <div className="relative max-w-xs mx-auto p-4 border-4 border-blue-800 rounded-lg bg-white">
      {/* ───── Esquinas decorativas (placeholders) ───── */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blue-800 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blue-800 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blue-800 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blue-800 rounded-br-lg"></div>

      {/* ───── Contenido de la tarjeta ───── */}
      <h2 className="text-blue-800 text-xl font-bold mb-2">GALLETAS</h2>
      <p className="text-gray-600 mb-4">
        Sugerencia de lorem ipsum para la descripción de las galletas aquí.
      </p>
      <p className="text-blue-800 text-lg font-semibold mb-4">$250</p>
      <button className="bg-blue-800 text-white px-4 py-2 rounded">
        HACER PEDIDO
      </button>
    </div>
  );
}
