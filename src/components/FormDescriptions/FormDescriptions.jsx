
const formDescriptions = {
  
  Account: {
    'Branch Master': {
    instructions: {
      title: 'Branch Master Instructions',
      description: 'Branch Master is used to create a new Branch of the Company.',
      notes: [
        'Complete all mandatory fields marked with a yellow line.',
        'Make sure to verify the branch code.',
        'Review all entered details before saving.',
      ],
    },
    steps: [
      'First, go to the Account section, click on A/C Master, then click on Branch Master.',
      'The Branch Master index page will be displayed.',
      'Click on the New button.',
      'The Branch Master form will open.',
      'Fill in the following fields: Company, Currency Code, GST State Code, GST Date, Address, Bank, Description, Tax Description, Certify Description, Remarks, Plant.',
      'Click on the Save button in the footer section to save the data.',
    ],
    },
    'Company Master': {
      instructions: {
        title: 'Company Master Instructions',
        description: 'Company Master is used to create a new Company.',
        notes: [
          'Instructions for the Company Master form go here. Ensure all details are accurate and complete.',
          'Complete all mandatory fields marked with a yellow line.',
          'To avoid issues, double-check each entry before submission.',
        ],
      },
      steps: [
        'First, go to the Account section, click on A/C Master, then click on Company Master.',
        'The Company Master index page will be displayed.',
        'Click on the New button.',
        'The Company Master form will open.',
        'Fill in the following fields: State, Currency Code, GST State Code, GST Date, TINNO, TINDT, CST, CSTDT, Service Tax No, SSINO, TANNO, ECONO, Range, Division, Commissioner, Jurisdiction, IECCode, AuthPerson, Address, Bank, Full Bank, Brief Bank, Description, Tax Description, Certify Description, Declaration, Remarks, Plant.',
        'Click on the Save button in the footer section to save the data.',
      ],
    },
    'Ledger Master': {
    instructions: {
      title: 'Ledger Master Instructions',
      description: 'Ledger Master is used to create a new ledger or to add a new Job-site Address.',
      notes: [
        'Complete all mandatory fields marked with a yellow line.',
        'To avoid issues, double-check each entry before submission.',
        'Only click on the + sign beside Address when the ledger is already created.',
        'You can save multiple Job Site Names and Addresses as per your client’s requirements.'
      ]
    },
    steps: [
      'First, go to the Account section, click on A/C Master, then click on Ledger Master.',
      'The Ledger Master index page will be displayed.',
      'Click on the New button.',
      'The Ledger Master form will open.',
      'Write GST_No, then click on the Search button.',
      'Fields like Ledger Name, Address, Address1, Location, City, Pin, PanNo, etc., will be automatically filled.',
      'Fill in the other fields, such as: Ledger Code, Tax Type, GST Nature, GST Per, GST Sup Type, etc.',
      'Click on the Save button in the footer section to save the data.',
      'Scroll down and click on the Address (+) button to add a Job Site and Address.',
      'The Address Master form will open.',
      'When the form opens, fields like Ledger Name, City, State, Contact Person, Statecode, Pin, etc., will be automatically filled.',
      'Complete all mandatory fields marked with a yellow line.',
      'Fill in the other fields.',
      'Click the Save button at the top of the form to add the Jobsite Address.',
      'You will be redirected back to the Ledger Master Form.',
      'Click on the Save button again in the footer section to save the data.'
    ]
    },
  },
  LabMaster: {
    'Grade Master': {
    instructions: {
      title: 'Grade Master Instructions',
      description: 'Grade Master is used to create a new Grade, which is necessary before generating a Batch Report.',
      notes: [
        'Complete all mandatory fields marked with a yellow line.',
        'To avoid issues, double-check each entry before submission.'
      ]
    },
    steps: [
      'First, go to the Lab section, click on Lab, then click on Grade Master.',
      'The Grade Master index page will be displayed.',
      'Click on the New button.',
      'The Grade Master form will open.',
      'Select Grade ID.',
      'Select your Party Name.',
      'Write Grade Design as per your need.',
      'The Density field will be automatically filled through calculations.',
      'Click on the Save button in the footer section to save the data.'
    ]
    },
  },
  Purchase: {
    'PO Master': {
      instructions: {
        title: 'Purchase Order Master Instructions',
        description: 'Purchase Order Master is used to create a new Purchase Order.',
        notes: [
          'Complete all mandatory fields marked with a yellow line.',
          'To avoid issues, double-check each entry before submission.'
        ]
      },
      steps: [
        'First, go to the Purchase section, click on Purchase, then click on Purchase Order Master.',
        'The Purchase Order Master index page will be displayed.',
        'Click on the New button.',
        'The Purchase Order Master form will open.',
        'Select your Voucher type and Tax type.',
        'Enter your Ref no. and Ref Date.',
        'Select your Party Name.',
        'Many fields such as Party Address, Party GST_No, payterm term, etc. will be automatically filled.',
        'Enter your valid date.',
        'Click on PO Item at the top of the form.',
        'Select your Item Name.',
        'Enter your Quantity and Rate.',
        'Fields like Amount and For Rate will be automatically filled through calculations.',
        'Click on Other detail at the top of the form.',
        'Select your Term Head.',
        'Click on the Save button in the footer section to save the data.'
      ]
    },
    'Purchase Abstract': {
      instructions: {
        title: 'Purchase Abstract and Invoice Instructions',
        description: 'Purchase Abstract and Invoice is used to generate a new Purchase Invoice.',
        notes: [
          'Complete all mandatory fields marked with a yellow line.',
          'To avoid issues, double-check each entry before submission.'
        ]
      },
      steps: [
        'First, go to the Purchase section, click on Purchase, then click on Purchase Abstract.',
        'The Purchase Abstract index page will be displayed.',
        'Click on the New button.',
        'The Purchase Abstract form will open.',
        'Select your Party Name.',
        'Select your PoId.',
        'Select your Item Name.',
        'Enter From Date and To Date.',
        'Click on the ⬇️ button beside Item ID.',
        'Click on the Save button in the footer section to save the data.',
        'Click on the 📂 button to open the Purchase Invoice Form.',
        'Check all Purchase Invoice details.',
        'Before saving, click on the Purchase Item button at the top of the form to check Qty, Rate, etc.',
        'Click on the Save button in the footer section to save the data.'
      ]
    },
    'Purchase Invoice':{
      instructions: {
        title: 'Purchase Abstract and Invoice Instructions',
        description: 'Purchase Abstract and Invoice is used to generate a new Purchase Invoice.',
        notes: [
          'Complete all mandatory fields marked with a yellow line.',
          'To avoid issues, double-check each entry before submission.'
        ]
      },
      steps: [
        'First, go to the Purchase section, click on Purchase, then click on Purchase Abstract.',
        'The Purchase Abstract index page will be displayed.',
        'Click on the New button.',
        'The Purchase Abstract form will open.',
        'Select your Party Name.',
        'Select your PoId.',
        'Select your Item Name.',
        'Enter From Date and To Date.',
        'Click on the ⬇️ button beside Item ID.',
        'Click on the Save button in the footer section to save the data.',
        'Click on the 📂 button to open the Purchase Invoice Form.',
        'Check all Purchase Invoice details.',
        'Before saving, click on the Purchase Item button at the top of the form to check Qty, Rate, etc.',
        'Click on the Save button in the footer section to save the data.'
      ]
    }
  },
  Marketing: {
  'Sales Order Entry': {
    instructions: {
      title: 'Sales Order Entry Instructions',
      description: 'Order Entry form is used to enter a new sales order.',
      notes: [
        'Complete all mandatory fields marked with a yellow line.',
        'To avoid issues, double-check each entry before submission.',
        'Create Grade/Mix Design Party-wise before adding Grade/Mix Design on the sales order.'
      ]
    },
    steps: [
      'Go to the Marketing section, click on Marketing Transaction, then click on Sales Order Entry.',
      'The Sales Order Entry index page will be displayed.',
      'Click on the New button.',
      'The Order Entry form will open.',
      'Select your Tax type.',
      'Fill out the other fields.',
      'Select your Party Name.',
      'Fields like Delivery Address, Buyer Name, Buyer Address, and Job Site will be automatically filled.',
      'Enter your Valid Date.',
      'Click on Order Item at the top of the form.',
      'Select your Grade.',
      'Fields like Item Name, UOM, and Tax type will be automatically filled.',
      'Select your Pump.',
      'Enter your Quantity and For Rate.',
      'Fields like Rate and Amount will be automatically filled through Calculation.',
      'Click on Other Detail at the top of the form.',
      'Select your Term Head.',
      'Click on the Save button in the footer section to save the data.'
    ]
  }
  },
  Sales:{
  'Challan Pending Invoice':{
    instructions: {
      title: 'Sales Invoice Instructions',
      description: 'Sales Abstract and Invoice forms are used to generate new Invoice.',
      notes: [
        'Complete all mandatory fields marked with a yellow line.',
        'To avoid issues, double-check each entry before submission.',
      ]
    },
    steps: [
      'Go to the Sales section, click on Sales Report, then click on Challan Pending Invoice.',
      'The Challan Pending Invoice index page will be displayed.',
      'Click on your Party Name.',
      'As Soon as you click on you Party Name, the Sales Abstract form will be opened.',
      'Write your From date and To date.',
      'The other fields are already automatically filled.',
      'Then, Click on Get challan.',
      'After that, Other Fields will be automatically filled.',
      'Click the Save button in the footer section to save the data.',
      'Then, Click on Gen Invoice to open the Sales Invoice form.',
      'Here, all fields are automatically filled',
      'Click on Invoice Item at the top of the form.',
      'If you want to change the rate, you can.',
      'Click on the Save button in the footer section to save the data.'
    ]
  },
  'Dispatch View':{
    instructions: {
      title: 'Schedule Master Instructions',
      description: 'Schedule Master is used to create new challan entry.',
      notes: [
        'Complete all mandatory fields marked with a yellow line.',
        'To avoid issues, double-check each entry before submission.',
      ]
    },
    steps: [
      'Go to the Sales section, click on Disptach Master, then click on Disptach View.',
      'The Disptach View index page will be displayed.',
      'Click on Add button.',
      'As Soon as you click on Add button, Schedule Master form will be opened.',
      'Select your Party Name.',
      'After that, Fields like Jobsite, Order No, Grade, Pump, Rate, Invoice rate will be automatically filled.',
      'Fill the other fields like Quantity, Challan type, Pump no, Pump gang and etc.',
      'Click on the Save button to save the data.',
      'Then, New Entry will be visible in schedule list in the Dispatch view index.',
      'Now, Click on the 🚚 like button.',
      'As Soon as you click on button, Challan Entry form will be opened.',
      'Here, Many fields will be automatically filled.',
      'Write your Quantity.',
      'Write your Vehicle No.',
      'After that, Fields like Driver name, Last Km, Last HRH will be automatically filled.',
      'Fill the other fields.',
      'Click on the Save button in the footer section to save the data.'
    ]
  }
  },
  Store:{
  'GRN Entry':{
    instructions: {
      title: 'Good Receive Entry Instructions',
      description: 'Good Receive Entry is used to create GRN entry.',
      notes: [
        'Complete all mandatory fields marked with a yellow line.',
        'To avoid issues, double-check each entry before submission.',
      ]
    },
    steps: [
      'Go to the Sales section, click on Store Transaction, then click on GRN Entry.',
      'The GRN Entry index page will be displayed.',
      'Click on the New button.',
      'The GRN Entry form will open.',
      'Select your Party Name.',
      'After that, Fields like Ledger Name and Address will be automatically filled.',
      'Write your Type Rf No. and Ref date.',
      'Then, fill the order item details.',
      'Select your Item Name .',
      'Select your UOM AND Tax type.',
      'Write your Royalty Quantity and Bill Quantity.',
      'Write your Quantity and rate.',
      'After that, Fields like For rate and Amount will be automatically filled through Calculation.',
      'Click on the Save button in the footer section to save the data.'
    ]
  }
  }
};

export default formDescriptions;
