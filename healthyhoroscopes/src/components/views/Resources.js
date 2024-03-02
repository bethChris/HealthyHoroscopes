import React, {useEffect, useState} from 'react';

const Resources = () => {
  const [inputText, setInputText] = useState('');

  return (<div className="outer-box">

    <div className="centered-box resources">
      <h3>If you or someone you know has a mental illness, is struggling emotionally, or has concerns about their mental health, there are ways to get help. Use these resources to find help for you, a friend, or a family member.<br/><br/></h3>

      <p><em><strong>Call 911 if you or someone you know is in immediate danger, or go to the nearest emergency room.</strong></em></p>

      <br/>

      <ul>
        <li>
          988 Suicide & Crisis Lifeline - Call or text 988.
        </li>
        <li>
          <a href="https://www.usu.edu/aggiewellness/">USU Student Wellness</a>
        </li>
        <li>
          <a href="https://www.usu.edu/aggiewellness/mental-health">Counseling & Psychological Services (CAPS)</a>: This program provides mental health services to USU students throughout Utah.
        </li>
        <li>
          <a href="https://cehs.usu.edu/scce/services/act-guide/">Acceptance & Commitment Therapy Self-Help Program</a>: As a student of USU, you have access to the self-directed ACT Guide for USU Students. You will access this guide using your A# and strong password. This is a 12 week program that uses the principles of ACT to help you with goal setting and emotional well being.
        </li>
        <li>
          The Trevor Project’s TrevorLifeline (LGBTQ+ focused): 1-866-488-7386
        </li>
        <li>
          National Domestic Violence Hotline: 1-800-799-7233
        </li>
        <li>
          Veteran’s Crisis Line: 988, then select 1
        </li>
      </ul>
      <p className="more-margin"></p>
    </div>

  </div>);
};

export default Resources;
