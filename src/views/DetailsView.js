import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';

function ListView({ university }) {
  const navigate = useNavigate();

  return (
    <div className='details-container'>
      <Title text={university.name} />

      <p>
        Location:&nbsp;
        <span className='details'>
          {university["state-province"] && `${university["state-province"]}, `}
          {university.country} {university.alpha_two_code}
        </span>
      </p>

      <p>Domain:&nbsp;<span className='details'>{university.domains[0]}</span></p>

      {university.web_pages[0] && (
        <a href={university.web_pages[0]} target='_blank' rel='noreferrer' className='website-link'>
          Visit website
        </a>
      )}

      <button type='button' onClick={() => navigate("/")} className='back-btn'>
        &larr; Go Back
      </button>
    </div>
  )
}

export default ListView;