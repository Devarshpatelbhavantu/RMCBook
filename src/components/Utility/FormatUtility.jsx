
   const PAGE_HEIGHT_LIMIT  = 400; 

   export const formatInstructions = (title, description, notes) => {
    const notesList = notes.map(note => `<li>${note}</li>`).join('');
    const fullContent = `
        <h2>${title}</h2>
        <p>${description}</p>
        <h3>Additional Notes</h3>
        <ul>
        ${notesList}
        </ul>
    `;
    return splitContentIntoPages(fullContent);
   };

   export const formatSteps = (steps, maxCharsPerPage = 500) => {
    const formattedSteps = [];
    let currentStepNumber = 1;

    const formatStepsItems = (stepItems) => {
        return stepItems.map(item => `<li>${item}</li>`).join('');
    };

    const paginateSteps = (steps) => {
        let currentPage = [];
        let currentPageLength = 0;

        steps.forEach(step => {
            const stepHtml = `<li>${step}</li>`;
            const stepLength = stepHtml.length;

            // If adding this step exceeds the max length, push the current page and start a new one
            if (currentPageLength + stepLength > maxCharsPerPage) {
                formattedSteps.push({
                    content: `<ol start="${currentStepNumber}">${formatStepsItems(currentPage)}</ol>`,
                    stepNumber: currentStepNumber
                });
                currentStepNumber += currentPage.length;
                currentPage = [];
                currentPageLength = 0;
            }

            // Add the current step to the current page
            currentPage.push(step);
            currentPageLength += stepLength;
        });

        // Add the last page if it has content
        if (currentPage.length > 0) {
            formattedSteps.push({
                content: `<ol start="${currentStepNumber}">${formatStepsItems(currentPage)}</ol>`,
                stepNumber: currentStepNumber
            });
        }
    };

    paginateSteps(steps);

    return formattedSteps;
   };

   const splitContentIntoPages = (content) => {
    let pages = [];
    let currentPage = '';
    
    // Create a hidden element to measure height
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.width = '100%';
    document.body.appendChild(tempDiv);
  
    const lines = content.split('\n');
  
    lines.forEach(line => {
      // Add line to the current page content
      tempDiv.innerHTML = currentPage + line + '\n';
  
      // Check if adding this line exceeds the height limit
      if (tempDiv.scrollHeight > PAGE_HEIGHT_LIMIT) {
        pages.push(currentPage.trim()); // Push current page content
        currentPage = ''; // Start a new page
        tempDiv.innerHTML = ''; // Reset tempDiv content
      }
  
      // Add the line to the current page after the check
      currentPage += line + '\n';
    });
  
    if (currentPage.trim()) {
      pages.push(currentPage.trim()); // Push remaining content
    }
  
    // Clean up
    document.body.removeChild(tempDiv);
  
    return pages;
   };
