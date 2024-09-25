import React, { useState, useRef , useEffect } from 'react';
import { useParams,useNavigate  } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import formDescriptions from '../FormDescriptions/FormDescriptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowLeft, faArrowRight,faArrowCircleLeft  } from '@fortawesome/free-solid-svg-icons';
import { formatInstructions, formatSteps} from '../Utility/FormatUtility';
import './FormDetail.css';
import sad from "../../assets/sad.png";

const FormDetail = () => {
  const { moduleName, formName } = useParams();
  const formDetails = formDescriptions[moduleName]?.[formName];
  const [isOpen, setIsOpen] = useState(false);
  const flipBookRef = useRef(null);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []); 

  if (!formDetails) {
    return (
      <div className="no-description-container">
        <button className="back-button" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />Back
       </button>
        <div className="no-description-card">
          <img src={sad} alt="Oops!" className="oops-icon" />
          <h2 className="no-description-title">Oops!</h2>
          <p className="no-description-message">Description not found for {formName}.</p>
        </div>
      </div>
    );
  }

  const { instructions, steps } = formDetails;

  const formattedInstructions = formatInstructions(instructions.title, instructions.description, instructions.notes);
  const formattedSteps = formatSteps(steps,600); 

  const handleBookClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNextPage = (event) => {
    event.stopPropagation();
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrevPage = (event) => {
    event.stopPropagation();
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const handleFlipBookOpen = () => {
    setIsOpen(true);
  };

  const handleFlipBookClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="form-detail-container">

      <button className="back-button" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />Back
      </button>

      <div className={`book-wrapper ${isOpen ? 'open' : ''}`}  onClick={handleBookClick} >
        
        <HTMLFlipBook
          ref={flipBookRef}
          width={540} 
          height={600} 
          className="flipbook"
          showCover={true}
          maxShadowOpacity={0.7}
          drawShadow={true}
          flippingTime={1000}
          size="stretch"
          onFlip={() => {
            if (flipBookRef.current && flipBookRef.current.pageFlip()) {
              if (flipBookRef.current.pageFlip().getCurrentPageIndex() === 0) {
                handleFlipBookClose();
              } else {
                handleFlipBookOpen();
              }
            }
          }}
        >

          <div className="page cover-page" >
            <div className="cover-content">
              <h1>{formName}</h1>
              <h3>Instructions & Steps</h3>
              <div className="instruction-text">
                <span className="text">Please click on the book to open it</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faArrowUp} />
                </span> 
              </div>
            </div>
          </div>

          <div className="page instructions-page">
            <div className="page-header">
              <h2>Instructions</h2>
            </div>
            <div className="page-content" dangerouslySetInnerHTML={{ __html: formattedInstructions }}></div>
          </div>

          {formattedSteps.map((pageContent, index) => (
            <div className="page steps-page" key={index}>
              <div className="page-header">
                <h2>Steps</h2>
              </div>
              <div className="page-content" dangerouslySetInnerHTML={{ __html: pageContent.content }}></div>
            </div>
          ))}

          <div className="page end-page">
              <h1>THE END</h1>
          </div>

        </HTMLFlipBook>

        {isOpen && (
          <>
            <button className="carousel-button left" onClick={handlePrevPage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="carousel-button right" onClick={handleNextPage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default FormDetail;
