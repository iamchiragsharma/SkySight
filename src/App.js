import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainSection from './components/mainSection';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const apiKey = '66ec11e7781985ad33889edf12456073';

    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
      setWeatherData(res.data);
      setSubmitted(true);
      console.log(res.data);
    } catch (error) {
      console.error('Error Fetching the data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-navy-500 bg-[#141316] font-Changa flex flex-col justify-center items-center">
      <div className="mb-3 w-[500px] text-[25px] font-changa flex justify-between items-center">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='px-4 py-3 w-[70%] outline-none border-none rounded-md shadow-lg bg-gradient-to-r from-yellow-400 to-blue-600 text-blue placeholder-black focus:ring-4 focus:ring-yellow-600 hover:bg-black-700'
          placeholder='🌍 Enter your location...'
        />
        <button
          type='button'
          className={`py-3 px-6 bg-gradient-to-r from-navy-400 to-green-600 text-white font-changa w-[28%] outline-none border-none rounded-md shadow-lg focus:ring-5 focus:ring-tomato-500 focus:ring-opacity-50 transition duration-500 ease-in-out ${loading ? 'loading' : ''}`}
          onClick={() => fetchData()}
        >
          {loading ? 'LOADING...' : 'SUBMIT'}
        </button>

      </div>
      {submitted && location ? (
        <MainSection place={location} data={weatherData} />
      ) : (
        <p className='text-red-400'><sup>*</sup> Please enter your location!</p>
      )}
    </div>
  );
};

export default App;


// 1. import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import MainSection from './components/mainSection';

// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [location, setLocation] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [locationOptions] = useState([
//     'New York, US',
//   'Los Angeles, US',
//   'Chicago, US',
//   'London, UK',
//   'Manchester, UK',
//   'Paris, France',
//   'Marseille, France',
//   'Tokyo, Japan',
//   'Osaka, Japan',
//   'Sydney, Australia',
//   'Melbourne, Australia',
//   'Toronto, Canada',
//   'Vancouver, Canada',
//   'Berlin, Germany',
//   'Munich, Germany',
//   'Rome, Italy',
//   'Milan, Italy',
//   'Madrid, Spain',
//   'Barcelona, Spain',
//   'Beijing, China',
//   'Shanghai, China',
//   'Mumbai, India',
//   'New Delhi, India',
//   'Cairo, Egypt',
//   'Alexandria, Egypt',
//   'Johannesburg, South Africa',
//   'Cape Town, South Africa',
//   ]);

//   const fetchData = async () => {
//     const apiKey = '66ec11e7781985ad33889edf12456073';

//     try {
//       const res = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
//       );
//       setWeatherData(res.data);
//       setSubmitted(true);
//       console.log(res.data);
//     } catch (error) {
//       console.log('Error Fetching the data');
//     }
//   };

//   return (
//     <div className="h-screen bg-gradient-to-r from-purple-500 to-navy-500 bg-[#141316] font-Changa flex flex-col justify-center items-center">
//       <div className="mb-3 w-[500px] text-[25px] font-changa flex justify-between items-center">
//         <select
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="px-4 py-3 w-[70%] outline-none border-none rounded-md shadow-lg bg-gradient-to-r from-yellow-400 to-blue-600 text-blue placeholder-black focus:ring-4 focus:ring-yellow-600 hover:bg-black-700"
//         >
//           <option value="">Select a Location</option>
//           {locationOptions.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         <button
//           type="button"
//           className="py-3 px-6 bg-gradient-to-r from-navy-400 to-green-600 text-white font-changa w-[28%] outline-none border-none rounded-md shadow-lg hover:shadow-xl focus:ring-5 focus:ring-tomato-500 focus:ring-opacity-50 transition duration-500 ease-in-out"
//           onClick={() => fetchData()}
//         >
//           SUBMIT
//         </button>
//       </div>
//       {submitted ? (
//         location ? (
//           <MainSection place={location} data={weatherData} />
//         ) : (
//           <p className="text-red-400">
//             <sup>*</sup>Please Select a Location!
//           </p>
//         )
//       ) : null}
//     </div>
//   );
// };

// export default App;

// 2. import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import MainSection from './components/mainSection';

// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);

// const [location, setLocation] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const fetchData = async () => {
//     const apiKey = '66ec11e7781985ad33889edf12456073';

//     try {
//       const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
//       setWeatherData(res.data);
//       setSubmitted(true);
//       console.log(res.data);
//     } catch (error) {
//       console.log('Error Fetching the data');
//     }
//   };

//   return (
//     <div className="h-screen bg-gradient-to-r from-purple-500 to-navy-500 bg-[#141316] font-Changa flex flex-col justify-center items-center">
//       <div className="mb-3 w-[500px] text-[25px] font-changa flex justify-between items-center">
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className='px-4 py-3 w-[70%] outline-none border-none rounded-md shadow-lg bg-gradient-to-r from-yellow-400 to-blue-600 text-blue placeholder-black focus:ring-4 focus:ring-yellow-600 hover:bg-black-700'
//           placeholder='<SKYSIGHT>Type here;'
//         />
//         <button
//           type='button' // Change type to 'button'
//           className='py-3 px-6 bg-gradient-to-r from-navy-400 to-green-600 text-white font-changa w-[28%] outline-none border-none rounded-md shadow-lg hover:shadow-xl focus:ring-5 focus:ring-tomato-500 focus:ring-opacity-50 transition duration-500 ease-in-out'
//           onClick={() => fetchData()}
//         >
//           SUBMIT
//         </button>
//       </div>
//       {submitted ? (
//         location ? (
//           <MainSection place={location} data={weatherData} />
//         ) : (
//           <p className='text-red-400'><sup>*</sup>Please Enter your location!</p>
//         )
//       ) : null}
//     </div>
//   );
// };

// export default App;


//3. import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import MainSection from './components/mainSection';

// const App = () => {
//   // /Syntax
//   // const [state, setState] = useState(0);

//   const [weatherData, setWeatherData] = useState(null);
//   const [location, setLocation] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const fetchData = async () => {

//     const apiKey = "66ec11e7781985ad33889edf12456073";

//     try {
//       const res = await axios.get(`https://api.openwenpathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
//       setWeatherData(res.data);
//       setSubmitted(true);
//       console.log(res.data);
//     } catch (error) {
//       console.log("Error Fetching the data");
//     }
//   }

//   return (
//     <div className="h-screen bg-gradient-to-r from-purple-500 to-navy-500 bg-[#141316] font-Changa flex flex-col justify-center items-center">
//       <div className="mb-3 w-[500px] text-[25px] font-changa flex justify-between items-center">
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className='px-4 py-3 w-[70%] outline-none border-none rounded-md shadow-lg bg-gradient-to-r from-yellow-400 to-blue-600 text-blue placeholder-black focus:ring-4 focus:ring-yellow-600 hover:bg-black-700'
//         placeholder='<>SKYSIGHT</>Type here;'/>
//         <button type='submit' className='py-3 px-6 bg-gradient-to-r from-navy-400 to-green-600 text-white font-changa w-[28%] outline-none border-none rounded-md shadow-lg hover:shadow-xl focus:ring-5 focus:ring-tomato-500 focus:ring-opacity-50 transition duration-500 ease-in-out' onClick={() => fetchData()}>SUBMIT</button>
//       </div>
//       {submitted ? (
//         location ? (
//           <MainSection place={location} data={weatherData} />
//         ) : (
//           <p className='text-red-400'><sup>*</sup>Please Enter your location!</p>
//         )
//       ) : null}
//     </div>
//   )
// }

// export default App;