// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import talkToUsImg from "../assets/images/talktous.png"; // <-- yahan apni image ka sahi path aur naam likho

// const TalkToUs = () => {
//   const [expand, setExpand] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [visible, setVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(window.scrollY);
//   const formRef = useRef(null);

//   const handleClick = () => {
//     setExpand(!expand);
//   };

//   const closeForm = () => {
//     setExpand(false);
//   };

//   const checkFooterProximity = () => {
//     const footer = document.querySelector("footer");
//     const talkBtn = document.getElementById("talkToUsBtn");

//     if (footer && talkBtn) {
//       const footerRect = footer.getBoundingClientRect();
//       const footerTop = footerRect.top + window.scrollY;
//       const buttonRect = talkBtn.getBoundingClientRect();
//       const buttonBottom = buttonRect.bottom + window.scrollY;
//       const offset = 50;

//       if (buttonBottom + offset >= footerTop) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }
//     }
//   };

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     setLastScrollY(scrollTop);
//     checkFooterProximity();
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", () => {
//       setIsMobile(window.innerWidth < 768);
//       checkFooterProximity();
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", () =>
//         setIsMobile(window.innerWidth < 768)
//       );
//     };
//     // eslint-disable-next-line
//   }, [lastScrollY]);

//   return (
//     <>
//       <div
//         ref={formRef}
//         id="talkToUsBtn"
//         className="position-fixed d-flex flex-column align-items-center justify-content-center"
//         style={{
//           top: isMobile ? "55%" : "50%",
//           right: "1px",
//           transform: visible ? "translateY(-50%)" : "translateY(100px)",
//           zIndex: 1100,
//           transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//           opacity: visible ? 1 : 0,
//           pointerEvents: visible ? "auto" : "none",
//         }}
//       >
//         {!expand && (
//           <div
//             className="bg-dark text-white shadow-lg"
//             style={{
//               writingMode: "vertical-rl",
//               padding: "20px 12px",
//               borderRadius: "30px",
//               fontSize: "12px",
//               width: "40px",
//               cursor: "pointer",
//               fontFamily: "Glacial Indifference, sans-serif",
//               boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginBottom: "10px",
//               transform: visible ? "translateY(0)" : "translateY(20px)",
//               transition: "transform 0.3s ease",
//               position: "relative",
//             }}
//             onClick={handleClick}
//           >
//             <img
//               src={talkToUsImg}
//               alt="Talk"
//               style={{
//                 width: "20px",
//                 height: "20px",
//                 marginBottom: "5px",
//                 position: "absolute",
//                 top: "12px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//               }}
//             />
//             <span style={{ fontWeight: "400", letterSpacing: "1px", marginTop: "15px" }}>
//               Talk to Us
//             </span>
//           </div>
//         )}

//         {expand && (
//           <div
//             style={{
//               backgroundColor: "white",
//               padding: "15px",
//               width: isMobile ? "270px" : "300px",
//               borderRadius: "10px",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//               marginTop: "10px",
//               position: "relative",
//             }}
//           >
//             <button
//               onClick={closeForm}
//               style={{
//                 position: "absolute",
//                 top: "5px",
//                 right: "10px",
//                 fontSize: "18px",
//                 border: "none",
//                 background: "none",
//                 cursor: "pointer",
//                 color: "#333",
//               }}
//             >
//               ✖
//             </button>

//             <form style={{ marginTop: "25px" }}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="form-control mb-2"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="form-control mb-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Contact No"
//                 className="form-control mb-2"
//               />
//               <select className="form-control mb-2">
//                 <option>Select City</option>
//                 <option>Delhi</option>
//                 <option>Mumbai</option>
//                 <option>Bangalore</option>
//               </select>
//               <select className="form-control mb-2">
//                 <option>Select Loan Type</option>
//                 <option>Personal Loan</option>
//                 <option>Home Loan</option>
//                 <option>Car Loan</option>
//               </select>
//               <select className="form-control mb-2">
//                 <option>Select Loan Amount</option>
//                 <option>₹50,000</option>
//                 <option>₹1,00,000</option>
//                 <option>₹5,00,000</option>
//               </select>

//               <div className="form-check mb-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="whatsappUpdates"
//                 />
//                 <label
//                   className="form-check-label"
//                   htmlFor="whatsappUpdates"
//                 >
//                   Enable updates through{" "}
//                   <span style={{ color: "green" }}>WhatsApp</span>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="btn w-100"
//                 style={{
//                   backgroundColor: "#0074D9",
//                   color: "white",
//                   borderRadius: "25px",
//                 }}
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TalkToUs;
