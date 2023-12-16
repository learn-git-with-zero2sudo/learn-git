"use client";
import React, { useState } from 'react';
import Tab from './tab';
import Fundamentals from './fundamentals';

function Page() {
  const [isFundamentalsPage, setIsFundamentalsPage] = useState(true);
  return (
    <div className='container'>
      <div class="tabs">
      <button className="tablink" onClick={() => setIsFundamentalsPage(true)}>Show Fundamentals</button>
      <button className="tablink" onClick={() => setIsFundamentalsPage(false)}>Show Quiz</button>
      </div>
      <Tab isFundamentalsPage={isFundamentalsPage} />
    </div>
  );
}
export default Page;