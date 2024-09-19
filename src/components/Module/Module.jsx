import React from 'react';
import { Link } from 'react-router-dom';
import { moduleData } from '../ModuleData/ModuleData';
import './Module.css';

const Module = ({ searchQuery }) => {
  
  const minSearchLength = 4; 

  const filteredModules = Object.keys(moduleData).filter(moduleName => {
    const forms = moduleData[moduleName].forms || [];
    return moduleName.toLowerCase().includes(searchQuery) ||
      (searchQuery.length >= minSearchLength && forms.some(formName =>
        formName.toLowerCase().includes(searchQuery)
      ));
  });

  return (
    <>
      {filteredModules.map((moduleName, index) => {
        const forms = moduleData[moduleName].forms || [];
        const filteredForms = searchQuery.length >= minSearchLength
          ? forms.filter(formName =>
              formName.toLowerCase().includes(searchQuery)
            )
          : []; 

          const shouldShowFormLink = filteredForms.length > 0;

        // return (
          
        //   <Link to={`/module/${moduleName}`} className="module" key={index}>
        //     <section className="module-text-wrapper">
        //       <h2 className="thumbnail-title arrow">
        //         {moduleData[moduleName].icon} {moduleName} ❯ {' '}
        //         {filteredForms.length > 0 && (
        //           <span className="form-names">
        //             {filteredForms.join(', ')}
        //           </span>
        //         )}
        //       </h2>
        //       <p className="module-description">
        //         {moduleData[moduleName].description}
        //       </p>
        //     </section>
        //   </Link>
        // );
        
        return (
          <div key={index}>
            {shouldShowFormLink ? (
              filteredForms.map((formName, formIndex) => (
                <Link 
                  to={`/module/${moduleName}/${formName}`} 
                  className="module" 
                  key={formIndex}
                >
                  <section className="module-text-wrapper">
                    <h2 className="thumbnail-title arrow">
                      {moduleData[moduleName].icon} {moduleName} ❯ {formName}
                    </h2>
                    <p className="module-description">
                      {moduleData[moduleName].description}
                    </p>
                  </section>
                </Link>
              ))
            ) : (
              <Link 
                to={`/module/${moduleName}`} 
                className="module" 
                key={index}
              >
                <section className="module-text-wrapper">
                  <h2 className="thumbnail-title arrow">
                    {moduleData[moduleName].icon} {moduleName}
                  </h2>
                  <p className="module-description">
                    {moduleData[moduleName].description}
                  </p>
                </section>
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Module;
