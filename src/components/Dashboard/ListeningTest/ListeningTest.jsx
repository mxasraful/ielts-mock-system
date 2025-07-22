// import React, { useState, useEffect, useRef } from "react";
// import { FaHeadphones, FaPlay, FaClock } from "react-icons/fa";
// import "./ListeningTest.css";

// const TOTAL_TIME = 30 * 60; // 30 minutes in seconds

// const ListeningTest = () => {
//   const [currentSection, setCurrentSection] = useState(1);
//   const [answers, setAnswers] = useState({});
//   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
//   const [zoomedQuestion, setZoomedQuestion] = useState(null);

//   const audioRef = useRef();

//   const allSections = {
//     1: {
//       title: "Section 1",
//       questions: Array.from({ length: 10 }, (_, i) => ({
//         id: i + 1,
//         type: "Form Completion",
//         text: `Complete the form: Question ${i + 1}`,
//       })),
//     },
//     2: {
//       title: "Section 2",
//       questions: Array.from({ length: 10 }, (_, i) => ({
//         id: i + 11,
//         type: "Multiple Choice",
//         text: `Choose the correct option for Question ${i + 11}`,
//       })),
//     },
//     3: {
//       title: "Section 3",
//       questions: Array.from({ length: 10 }, (_, i) => ({
//         id: i + 21,
//         type: "Sentence Completion",
//         text: `Complete the sentence: Question ${i + 21}`,
//       })),
//     },
//     4: {
//       title: "Section 4",
//       questions: Array.from({ length: 10 }, (_, i) => ({
//         id: i + 31,
//         type: "Matching",
//         text: `Match the items in Question ${i + 31}`,
//       })),
//     },
//   };

//   useEffect(() => {
//     if (isAudioPlaying && timeLeft > 0) {
//       const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//       return () => clearInterval(interval);
//     }
//   }, [isAudioPlaying, timeLeft]);

//   const handleAnswerChange = (id, value) => {
//     setAnswers((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleCheckboxChange = (id, option) => {
//     setAnswers((prev) => {
//       const current = prev[id] || [];
//       const updated = current.includes(option)
//         ? current.filter((opt) => opt !== option)
//         : [...current, option];
//       return { ...prev, [id]: updated };
//     });
//   };

//   const handlePlayAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//       setIsAudioPlaying(true);
//     }
//   };

//   const formatTime = (t) => {
//     const m = Math.floor(t / 60)
//       .toString()
//       .padStart(2, "0");
//     const s = (t % 60).toString().padStart(2, "0");
//     return `${m}:${s}`;
//   };

//   const sectionData = allSections[currentSection];

//   return (
//     <div className="container my-4 position-relative pb-5">
//       {/* Audio Player */}
//       <div className="card shadow-sm border-0 p-3 mb-4 d-flex flex-row justify-content-between align-items-center bg-light">
//         <div>
//           <h5 className="mb-2">
//             <FaHeadphones className="me-2" /> Listening Test Audio
//           </h5>
//           <button
//             className="btn btn-danger"
//             onClick={handlePlayAudio}
//             disabled={isAudioPlaying}
//           >
//             <FaPlay className="me-2" /> Start Audio
//           </button>
//           <audio
//             ref={audioRef}
//             src="/audio/full-listening-test.mp3"
//             hidden
//           ></audio>
//         </div>
//         <div className="text-end">
//           <p className="fw-bold mb-0 text-secondary">
//             <FaClock className="me-2" /> {formatTime(timeLeft)}
//           </p>
//         </div>
//       </div>

//       {/* Section Selector */}
//       <div className="mb-4 text-center">
//         {[1, 2, 3, 4].map((sec) => (
//           <button
//             key={sec}
//             className={`btn me-2 ${
//               sec === currentSection ? "btn-dark" : "btn-outline-dark"
//             }`}
//             onClick={() => {
//               setCurrentSection(sec);
//               setZoomedQuestion(null);
//             }}
//           >
//             Section {sec}
//           </button>
//         ))}
//       </div>

//       {/* Questions List */}
//       <div className="card p-4 border-0 shadow-sm mb-5">
//         <h4 className="mb-4 text-dark">{sectionData?.title} Questions</h4>
//         {sectionData?.questions.map((q) => (
//           <div
//             key={q.id}
//             id={`q${q.id}`}
//             className={`mb-4 p-3 border rounded ${
//               zoomedQuestion === q.id ? "shadow-lg scale-up" : ""
//             }`}
//           >
//             <h6 className="text-muted">{q.type}</h6>
//             <label htmlFor={`input-${q.id}`} className="form-label fw-bold">
//               Q{q.id}. {q.text}
//             </label>
//             {q.type === "Multiple Choice" ? (
//               <div>
//                 {["A", "B", "C"].map((opt) => (
//                   <div key={opt} className="form-check">
//                     <input
//                       type="radio"
//                       name={`q${q.id}`}
//                       className="form-check-input"
//                       id={`q${q.id}-opt${opt}`}
//                       checked={answers[q.id] === opt}
//                       onChange={() => handleAnswerChange(q.id, opt)}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={`q${q.id}-opt${opt}`}
//                     >
//                       Option {opt}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <input
//                 type="text"
//                 className="form-control"
//                 id={`input-${q.id}`}
//                 value={answers[q.id] || ""}
//                 onChange={(e) => handleAnswerChange(q.id, e.target.value)}
//                 placeholder="Your answer"
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Sticky Question Number Bar */}
//       <div
//         className="position-fixed bottom-0 start-0 w-100 bg-white shadow border-top py-2"
//         style={{ zIndex: 1050 }}
//       >
//         <div className="container d-flex flex-wrap justify-content-center gap-2">
//           {Array.from({ length: 40 }, (_, i) => (
//             <button
//               key={i + 1}
//               className="btn btn-outline-dark btn-sm"
//               onClick={() => {
//                 const qid = i + 1;
//                 const section = Math.floor(i / 10) + 1;
//                 setCurrentSection(section);
//                 setTimeout(() => {
//                   const el = document.getElementById(`q${qid}`);
//                   if (el) {
//                     el.scrollIntoView({ behavior: "smooth", block: "center" });
//                     setZoomedQuestion(qid);
//                     setTimeout(() => setZoomedQuestion(null), 1500);
//                     const input = el.querySelector("input[type='text']");
//                     if (input) input.focus();
//                   }
//                 }, 100);
//               }}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .scale-up {
//           transform: scale(1.05);
//           transition: transform 0.3s ease-in-out;
//           background-color: #f8f9fa;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ListeningTest;





// import { useState } from "react";
// import { FaBicycle, FaUsers, FaClock, FaCoffee } from "react-icons/fa";

// const questions = [
//   { id: 1, text: "Full membership costs $260; this covers cycling and", placeholder: "(1)" },
//   { id: 2, text: "Cost of membership includes the club fee and", placeholder: "(2)" },
//   { id: 3, text: "The club kit is made by a company called", placeholder: "(3)" },
//   { id: 4, text: "Level B: speed about", placeholder: "(4) kph" },
//   { id: 5, text: "Tuesdays at 5.30 am, meet at the", placeholder: "(5)" },
//   { id: 6, text: "Thursdays at 5.30 am, meet at the entrance to the", placeholder: "(6)" },
//   { id: 7, text: "Members often have", placeholder: "(7) together afterwards" },
//   { id: 8, text: "There is not always a", placeholder: "(8) with the group on these rides" },
// ];

// export default function IELTSMockTest() {
//   const [answers, setAnswers] = useState({});

//   const handleChange = (id, value) => {
//     setAnswers({ ...answers, [id]: value });
//   };

//   return (
//     <div className="container my-5">
//       <h1 className="mb-4">South City Cycling Club</h1>
//       <p className="fw-bold">Example</p>
//       <p>Name of club secretary: Jim .....Hunter.....</p>

//       <div className="card p-4 mt-4">
//         <h4 className="mb-3"><FaBicycle className="me-2" />Membership</h4>
//         <p>● Full membership costs $260; this covers cycling and <input type="text" className="form-control d-inline w-25 mx-2" placeholder="(1)" value={answers[1] || ''} onChange={e => handleChange(1, e.target.value)} /> all over Australia</p>
//         <p>● Recreational membership costs $108</p>
//         <p>● Cost of membership includes the club fee and <input type="text" className="form-control d-inline w-25 mx-2" placeholder="(2)" value={answers[2] || ''} onChange={e => handleChange(2, e.target.value)} /></p>
//         <p>● The club kit is made by a company called <input type="text" className="form-control d-inline w-25 mx-2" placeholder="(3)" value={answers[3] || ''} onChange={e => handleChange(3, e.target.value)} /></p>

//         <h4 className="mt-4 mb-3"><FaClock className="me-2" />Training rides</h4>
//         <p>● Chance to improve cycling skills and fitness</p>
//         <p>● Level B: speed about <input type="text" className="form-control d-inline w-25 mx-2" placeholder="(4)" value={answers[4] || ''} onChange={e => handleChange(4, e.target.value)} /> kph</p>
//         <p>● Weekly sessions</p>
//         <p>– Tuesdays at 5.30 am, meet at the <input type="text" className="form-control d-inline w-25 mx-2" placeholder="(5)" value={answers[5] || ''} onChange={e => handleChange(5, e.target.value)} /></p>
//         <p>– Thursdays at 5.30 am, meet at the entrance to the <input type="text" className="form-control d-inline w-25 mx-2" placeholder="(6)" value={answers[6] || ''} onChange={e => handleChange(6, e.target.value)} /></p>

//         <h4 className="mt-4 mb-3"><FaUsers className="me-2" />Further information</h4>
//         <p>● Rides are about an hour and a half</p>
//         <p>● Members often have <input type="text" className="form-control d-inline w-25 mx-2" placeholder="(7)" value={answers[7] || ''} onChange={e => handleChange(7, e.target.value)} /> together afterwards <FaCoffee className="ms-2 text-muted" /></p>
//         <p>● There is not always a <input type="text" className="form-control d-inline w-25 mx-2" placeholder="(8)" value={answers[8] || ''} onChange={e => handleChange(8, e.target.value)} /> with the group on these rides</p>
//       </div>
//     </div>
//   );
// }




import { useState, useRef, useEffect } from "react";
import { FaBicycle, FaUsers, FaClock, FaCoffee } from "react-icons/fa";

const questions = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  text: `Question ${i + 1}:`,
  placeholder: `(${i + 1})`
}));

export default function IELTSMockTest() {
  const [answers, setAnswers] = useState({});
  const inputRefs = useRef([]);

  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const scrollToInput = (index) => {
    inputRefs.current[index]?.focus();
  };

  return (
    <div className="container my-5">
      <header className="mb-4">
        <h2 className="text-center fw-bold">IELTS MOCK PREP Pro</h2>
      </header>

      <div className="card p-4 mb-4">
        <h4 className="mb-3"><FaBicycle className="me-2" />Membership</h4>
        <p>● Full membership costs $260; this covers cycling and <span className="me-2">(1)</span>
          <input type="text" className="form-control d-inline w-25" ref={el => inputRefs.current[0] = el} value={answers[1] || ''} onChange={e => handleChange(1, e.target.value)} /> all over Australia</p>
        <p>● Recreational membership costs $108</p>
        <p>● Cost of membership includes the club fee and <span className="me-2">(2)</span>
          <input type="text" className="form-control d-inline w-25" ref={el => inputRefs.current[1] = el} value={answers[2] || ''} onChange={e => handleChange(2, e.target.value)} /></p>
        <p>● The club kit is made by a company called <span className="me-2">(3)</span>
          <input type="text" className="form-control d-inline w-25" ref={el => inputRefs.current[2] = el} value={answers[3] || ''} onChange={e => handleChange(3, e.target.value)} /></p>

        <h4 className="mt-4 mb-3"><FaClock className="me-2" />Training rides</h4>
        <p>● Chance to improve cycling skills and fitness</p>
        <p>● Level B: speed about <span className="me-2">(4)</span>
          <input type="text" className="form-control d-inline w-25" ref={el => inputRefs.current[3] = el} value={answers[4] || ''} onChange={e => handleChange(4, e.target.value)} /> kph</p>
        <p>● Weekly sessions</p>
        <p>– Tuesdays at 5.30 am, meet at the <span className="me-2">(5)</span>
          <input type="text" className="form-control d-inline w-25" ref={el => inputRefs.current[4] = el} value={answers[5] || ''} onChange={e => handleChange(5, e.target.value)} /></p>
        <p>– Thursdays at 5.30 am, meet at the entrance to the <span className="me-2">(6)</span>
          <input type="text" className="form-control d-inline w-25" ref={el => inputRefs.current[5] = el} value={answers[6] || ''} onChange={e => handleChange(6, e.target.value)} /></p>

        <h4 className="mt-4 mb-3"><FaUsers className="me-2" />Further information</h4>
        <p>● Rides are about an hour and a half</p>
        <p>● Members often have <span className="me-2">(7)</span>
          <input type="text" className="form-control d-inline w-25" ref={el => inputRefs.current[6] = el} value={answers[7] || ''} onChange={e => handleChange(7, e.target.value)} /> together afterwards <FaCoffee className="ms-2 text-muted" /></p>
        <p>● There is not always a <span className="me-2">(8)</span>
          <input type="text" className="form-control d-inline w-25" ref={el => inputRefs.current[7] = el} value={answers[8] || ''} onChange={e => handleChange(8, e.target.value)} /> with the group on these rides</p>
      </div>

      <div className="fixed-bottom bg-light p-2 border-top overflow-auto" style={{ whiteSpace: "nowrap" }}>
        {questions.map((q, index) => (
          <button
            key={q.id}
            className="btn btn-outline-primary btn-sm mx-1"
            onClick={() => scrollToInput(index)}
          >
            {q.id}
          </button>
        ))}
      </div>
    </div>
  );
}
