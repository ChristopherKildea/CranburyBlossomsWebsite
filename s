warning: in the working copy of 'src/App.jsx', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/src/App.jsx b/src/App.jsx[m
[1mindex 304e62b..7365cbc 100644[m
[1m--- a/src/App.jsx[m
[1m+++ b/src/App.jsx[m
[36m@@ -7,7 +7,8 @@[m [mimport Home from './pages/Home'[m
 import Deliveries from './pages/Deliveries'[m
 import { Routes, Route } from 'react-router-dom'[m
 import Footer from './components/Footer'[m
[31m-[m
[32m+[m[32mimport SocialContent from './components/SocialContent'[m
[32m+[m[32mimport PurchasePage from './pages/PurchasePage'[m
 [m
 [m
 [m
[36m@@ -25,17 +26,21 @@[m [mfunction App() {[m
 [m
 [m
       <NavBar />[m
[31m-      {/* <Home /> */}[m
[32m+[m
 [m
       <main>[m
         <Routes>[m
           <Route path="/" element={<Home />} />[m
           <Route path="/deliveries" element={<Deliveries />} />[m
[32m+[m[32m           <Route path="/purchase/:id" element={<PurchasePage />} />[m
         </Routes>[m
       </main>[m
 [m
 [m
[31m-      <Footer />[m
[32m+[m
[32m+[m[32m    <SocialContent />[m
[32m+[m
[32m+[m[32m    <Footer />[m
 [m
 [m
     </>[m
[1mdiff --git a/src/components/FlowerCard.jsx b/src/components/FlowerCard.jsx[m
[1mindex 4dddf2a..8b4188a 100644[m
[1m--- a/src/components/FlowerCard.jsx[m
[1m+++ b/src/components/FlowerCard.jsx[m
[36m@@ -5,7 +5,7 @@[m [mimport "../css/FlowerCard.css"[m
 function FlowerCard({ flower }) {[m
     return <div className="flower-card">[m
 [m
[31m-[m
[32m+[m[41m        [m
         <img src={flower.image} alt={flower.name} style={{ width: '90%' }} />[m
         <p className="flower-title">{flower.name}</p>[m
         <p className="flower-price">${flower.price.toFixed(2)}</p>[m
