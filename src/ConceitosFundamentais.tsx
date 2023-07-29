export const ConceitosFundamentais = () => {
  return (
    <div>
      <button className="btn-blue">AZUL</button>
      <button className="btn-green">VERDE</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        VERMELHO
      </button>
      <div className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 m-4 bg-green-400 md:bg-blue-500 lg:bg-purple-500"></div>
      <div>
        <input
          type="text"
          className="bg-gray-300 text-gray-900 focus:bg-red-600 focus:text-red-400"
        />
      </div>
    </div>
  )
}
