import React, { useEffect, useState } from 'react';
import { useParams,Link,useNavigate} from 'react-router-dom';
import { FaClipboardList, FaArrowLeft } from 'react-icons/fa';
import { useSpring, animated, config} from '@react-spring/web';
import { moduleData } from '../ModuleData/ModuleData'; 
import './ModuleDetail.css';

const ModuleDetail = () => {
  const { moduleName } = useParams();
  const dataList = moduleData[moduleName]?.forms || []; 
  const navigate = useNavigate();
  const [showItems, setShowItems] = useState(false);

  const containerSpring = useSpring({
    opacity: 1,
    transform: 'scale(1) rotate(0deg)',
    from: { opacity: 0, transform: 'scale(0.8) rotate(-5deg)' },
    config: config.gentle
  });

  const itemSprings = dataList.map((_, index) => 
    useSpring({
      opacity: showItems ? 1 : 0,
      transform: showItems ? 'translateY(0)' : 'translateY(20px)',
      from: { opacity: 0, transform: 'translateY(20px)' },
      config: { ...config.stiff, delay: index * 100 }
    })
  );

  useEffect(() => {
    // Delay to show items after the container animation
    const timer = setTimeout(() => setShowItems(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='module-detail-page'>
      <animated.div className="module-detail-container" style={containerSpring}>
        
        <button className="backhome-button" onClick={() => navigate('/')}>
            <FaArrowLeft className="backhome-icon" /> Home        
        </button>

        <h1 className="module-detail-title">
          {moduleName} <span>Details</span>
        </h1>
        <div className="module-detail-grid">
          {dataList.map((item, index) => (
            <Link
              key={index}
              to={`/module/${moduleName}/${encodeURIComponent(item)}`}
              className="form-link"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <animated.div  className="module-detail-card" style={itemSprings[index]} >
                  <FaClipboardList className="module-icon" />
                  <span>{item}</span>
                </animated.div>
            </Link>
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default ModuleDetail;
