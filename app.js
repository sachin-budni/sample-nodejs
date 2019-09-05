const express = require("express");

const app = express();

app.get('/',(req,res,next)=>{
    res.send(jsonData)
})

app.listen('5000',()=>console.log("localhost Runting 5000"));

const jsonData =[
    {
      "name": "Excel",
      "children": [
        {
          "name": "Excel Introduction",
          "children": [
            {
              "name": "What is MS Excel"
            },
            {
              "name": "Advantages and Importance of Excel"
            },
            {
              "name": "Limitation of Excel."
            },
            {
              "name": "An Overview of Excel Spreadsheet and Screen"
            },
            {
              "name": "Shortcut Keys and Tab OptionsHome, Insert, Page Layout, Formulas, Data, Review, View and Developer"
            },
            {
              "name": "Reference Freezing – Absolute, Mixed and Relative"
            }
          ]
        },
        {
          "name": "Basic Formulas and Functions",
          "children": [
            {
              "name": "ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION"
            },
            {
              "name": "PRODUCT, AVERAGE, MAX, MIN, LARGE, SMALL, COUNT, COUNTA"
            }
          ]
        },
        {
          "name": "PRODUCT, AVERAGE, MAX, MIN, LARGE, SMALL, COUNT, COUNTA",
          "children": [
            {
              "name": "SUMIF(S), COUNTIF(S), AVERAGEIF(S)"
            },
            {
              "name": "RAND/BETWEEN, ROUND/UP/DOWN, RANK, ABS, ARABIC, ROMAN"
            }
          ]
        },
        {
          "name": "Text Function",
          "children": [
            {
              "name": "UPPER, LOWER, PROPER"
            },
            {
              "name": "LEN, CONCATENATE, CHAR, CODE, TRIM, CLEAN"
            },
            {
              "name": "LEFT, MID, RIGHT"
            },
            {
              "name": "FIND, SEARCH, SUBSTITUTE, REPLACE"
            },
            {
              "name": "REPT, TEXT, T, EXACT, DOLLAR, FIXED, VALUE"
            }
          ]
        },
        {
          "name": "Date Function",
          "children": [
            {
              "name": "NOW, TODAY"
            },
            {
              "name": "DATE, DATEVALUE, YEAR, MONTH, DAY"
            },
            {
              "name": "TIME, HOUR, MINUTE, SECOND"
            },
            {
              "name": "NETWORKDAYS, NETWORKDAYSINTL"
            },
            {
              "name": "WORKDAY, WORKDAYSINTL"
            },
            {
              "name": "WEEKNUM, WEEKDAY"
            },
            {
              "name": "DATEDIF, EOMONTH"
            }
          ]
        },
        {
          "name": "Lookup and Logical function",
          "children": [
            {
              "name": "IF, Nested IF, IFNA, IFERROR"
            },
            {
              "name": "TRUE, FALSE, AND, OR, XOR"
            },
            {
              "name": "ROW, ROWS, COLUMN, COLUMNS, FORMULATEXT, ADDRESS, HYPERLINK"
            },
            {
              "name": "LOOKUP, MATCH, VLOOKUP, HLOOKUP, INDEX"
            },
            {
              "name": "CHOOSE, INDIRECT, OFFSET"
            }
          ]
        },
        {
          "name": "Conditional Formatting",
          "children": [
            {
              "name": "Conditional Formatting is a tool that allows you to apply formats to a cell or range of cells, and have that formatting change depending on the value of the cell or the value of a formula."
            },
            {
              "name": "Highlighting Cells with rules, Data Bars, Colour Scales, Icon sets"
            },
            {
              "name": "New Rule, Formatting with Formulas/Functions"
            }
          ]
        },
        {
          "name": "Sort and Filter",
          "children": [
            {
              "name": "Filtering on text, Numbers, Date & Colours"
            },
            {
              "name": "Custom sort filter – in Levels, top to Bottom, Left to right"
            }
          ]
        },
        {
          "name": "Advanced Paste special Techniques",
          "children": [
            {
              "name": "Transpose Tables"
            },
            {
              "name": "Paste Values, Formula, Formats, Source Formatting, Link, Picture"
            }
          ]
        },
        {
          "name": "Hyper Link",
          "children": []
        },
        {
          "name": "Themes",
          "children": []
        },
        {
          "name": "Page Setup",
          "children": [
            {
              "name": "Margins, Orientations, Breaks, Background and Alignments"
            }
          ]
        },
        {
          "name": "Printing a Workbooks",
          "children": [
            {
              "name": "Setting up the Print Area"
            },
            {
              "name": "Orientation, Margins and Print Size of Workbooks"
            },
            {
              "name": "Background of Print Document and Page Break"
            },
            {
              "name": "Print titles Rows and columns to Repeat, Page Order"
            },
            {
              "name": "Printing Workbooks"
            }
          ]
        },
        {
          "name": "Name Manager – Define Name, Use in Formula and Create From Section",
          "children": []
        },
        {
          "name": "Formula Auditing",
          "children": [
            {
              "name": "Trace President, Dependents and Remove arrows"
            },
            {
              "name": "Show Formula, Error Checking, Evaluate Formula and Watch now"
            },
            {
              "name": "Calculation options – Automatic, Manual, Calculate Now and Calculate Sheet"
            }
          ]
        },
        {
          "name": "Getting the External Data",
          "children": [
            {
              "name": "From Access, Web, Text and Other"
            },
            {
              "name": "Connections – Existing and other connections"
            }
          ]
        },
        {
          "name": "Filter and advanced Filters",
          "children": []
        },
        {
          "name": "Data Validation",
          "children": [
            {
              "name": "Drop Down List"
            },
            {
              "name": "Restrict Data – Length, Date, Time, nature which is entering in to the cell"
            },
            {
              "name": "Applying the condition to the cell by using the formula/functions"
            }
          ]
        },
        {
          "name": "Text to Column",
          "children": []
        },
        {
          "name": "Delimited and Fixed Length",
          "children": []
        },
        {
          "name": "Remove Duplicates",
          "children": []
        },
        {
          "name": "Consolidation",
          "children": []
        },
        {
          "name": "What if Analysis – Scenario Manager, Goal Seek and Data Table Outline – Grouping, ungrouping and subtotal, Show/Hide Details",
          "children": []
        },
        {
          "name": "Protection Changes",
          "children": [
            {
              "name": "Protect Sheet, Workbook, Share Workbook"
            },
            {
              "name": "Protect and share workbook, allow users to Edit Range"
            },
            {
              "name": "Track Changes"
            }
          ]
        },
        {
          "name": "Workbook Views",
          "children": [
            {
              "name": "Freeze panes – Top row, First Column"
            },
            {
              "name": "Split, Hide"
            },
            {
              "name": "View Side by Side, Scrolling and Switch Windows"
            }
          ]
        },
        {
          "name": "New Features in 2013, 2016 or Office 365",
          "children": []
        },
        {
          "name": "Sparklines – Line, Column & Win/Loss",
          "children": [
            {
              "name": "Quick analysis tool pack"
            },
            {
              "name": "Time Line Slicer, Secondary Axis"
            },
            {
              "name": "Report Connection"
            },
            {
              "name": "Secondary Axis In chart"
            },
            {
              "name": "Flash Fill"
            },
            {
              "name": "Filter table data by using slicers"
            },
            {
              "name": "Recommended Charts"
            }
          ]
        },
        {
          "name": "Charts",
          "children": [
            {
              "name": "Bar, Column, Pie, Line, Area, Doughnut, Scatter, Surface, or Radar charts."
            }
          ]
        },
        {
          "name": "Pivot Tables",
          "children": [
            {
              "name": "Creating Pivot Table with dynamic source data"
            },
            {
              "name": "Customize groping of Dates and Number"
            },
            {
              "name": "Calculated Field and Calculated Items"
            },
            {
              "name": "Inserting timeline and slicer"
            },
            {
              "name": "Report connection, Number formatting"
            },
            {
              "name": "Creating pivot chart"
            }
          ]
        },
        {
          "name": "Excel Dashboard",
          "children": [
            {
              "name": "Adding tables and chats to dashboard"
            },
            {
              "name": "Planning a Dashboard"
            }
          ]
        },
        {
          "name": "VBA (macros) / Automation",
          "children": [
            {
              "name": "Introduction to Programming window"
            },
            {
              "name": "What is VBA?"
            },
            {
              "name": "Working with Macros"
            },
            {
              "name": "Basic Representations"
            }
          ]
        },
        {
          "name": "Platform for VBA",
          "children": [
            {
              "name": "How to write a Program in systematic Manner"
            },
            {
              "name": "Inserting the data in Excel Sheet by VBA codes"
            },
            {
              "name": "Formatting – Bold, Italic, Underline, Increase and Decrease the Font Size, Colour"
            },
            {
              "name": "Add the sheets to the Workbook"
            },
            {
              "name": "Changing the alignment and colour of the text"
            },
            {
              "name": "Changing the names of the sheets"
            },
            {
              "name": "Sheets movement between the workbooks"
            },
            {
              "name": "Selection – Cells, Range, Activecell"
            }
          ]
        },
        {
          "name": "Loops in Excel",
          "children": [
            {
              "name": "For Next"
            },
            {
              "name": "For Each"
            },
            {
              "name": "Do Until"
            },
            {
              "name": "Do While"
            }
          ]
        },
        {
          "name": "Message Box and Conditions",
          "children": [
            {
              "name": "Using the Message Box and Input Box"
            },
            {
              "name": "If Condition"
            },
            {
              "name": "Select Case"
            }
          ]
        },
        {
          "name": "Worksheet Functions",
          "children": [
            {
              "name": "SUM, SUMIF(S), COUNT(A), COUNTIF(S)"
            },
            {
              "name": "MATCH, VLOOKUP, HLOOKUP and INDEX"
            },
            {
              "name": "MAX, MIN, LARGE, AND SMALL"
            },
            {
              "name": "RIGHT, LEFT, MID, LEN"
            }
          ]
        },
        {
          "name": "Data Segregation",
          "children": [
            {
              "name": "Segregating the data in defferent tables, sheets and workbooks"
            }
          ]
        },
        {
          "name": "Data Consolidation",
          "children": [
            {
              "name": "Pull the data from different workbooks:-"
            },
            {
              "name": "According To the file extension condition, by using formula, by folder"
            }
          ]
        },
        {
          "name": "User Defined Function",
          "children": [
            {
              "name": "Creating the formulas according to the user requirement"
            },
            {
              "name": "Creating the Connection"
            }
          ]
        },
        {
          "name": "User form",
          "children": [
            {
              "name": "Creating the user form"
            },
            {
              "name": "Tools – Textbox, Label, Option Button, Scroll Bar, List box, Spin Button,"
            },
            {
              "name": "Combo box, Check Box,"
            },
            {
              "name": "Customize the user form"
            }
          ]
        },
        {
          "name": "Auto mail",
          "children": [
            {
              "name": "Sending Mails through excel"
            }
          ]
        },
        {
          "name": "Interview Preparation",
          "children": []
        },
        {
          "name": "Real-time Projects",
          "children": []
        },
        {
          "name": "Tests/Random Tasks",
          "children": []
        },
        {
          "name": "Certification",
          "children": []
        }
      ],
      "content": {
        "mainHeader": "Benefits of learning advanced excel",
        "subMainHeader": [
          "Learners who wants to start their career as an MIS Analyst, Data Analyst, Business Analyst, Financial Analyst advanced excel training is precisely recommended. Besides, advanced excel is especially for students & working professional who requires to get necessary to use pivot tables, audit worksheet data, utilize data tools."
        ],
        "data": [
          {
            "header": "Benefits –",
            "list": [
              "You will have more value to employers / adds great value to one’s resume.",
              "Save significant amount of time.",
              "It brings efficiency in your work life and it’s Interesting also.",
              "Increases your Knowledge and Management Skills.",
              "Most of the companies, banks & financial institutions, IT, BPO companies look for professionals with Advanced Excel skills.",
              "Stand out in Interview and move up the ladder at work by drastically boosting your MS Excel skills.",
              "Better salary aspects."
            ]
          },
          {
            "header": "Career Opportunities on Advanced Excel –",
            "subHeader": "The demand for advanced excel professionals is growing rapidly. But the right person with right technical knowledge is not available nowadays. So be the first person to be in the needy.",
            "list": [
              "Data Analyst",
              "Metrics and Analytics Specialist",
              "MIS Executive",
              "Financial Analyst",
              "Market Research Analyst",
              "Big Data Engineer",
              "Big Data Analytics Architect",
              "Big Data Solution Architect and more.."
            ]
          }
        ]
      }
    },
    {
      "name": "VBA",
      "children": [
        {
          "name": "VBA (macros) / Automation",
          "children": [
            {
              "name": "Introduction to Programming window"
            },
            {
              "name": "What is VBA?"
            },
            {
              "name": "Working with Macros"
            },
            {
              "name": "Basic Representations"
            }
          ]
        },
        {
          "name": "Platform for VBA",
          "children": [
            {
              "name": "How to write a Program in systematic Manner"
            },
            {
              "name": "Inserting the data in Excel Sheet by VBA codes"
            },
            {
              "name": "Formatting – Bold, Italic, Underline, Increase and Decrease the Font Size, Colour"
            },
            {
              "name": "Add the sheets to the Workbook"
            },
            {
              "name": "Changing the names of the sheets"
            },
            {
              "name": "Sheets movement between the workbooks"
            },
            {
              "name": "Selection – Cells, Range, Activecell ..."
            }
          ]
        },
        {
          "name": "Loops in Excel",
          "children": [
            {
              "name": "For Next"
            },
            {
              "name": "For Each"
            },
            {
              "name": "Do Until"
            },
            {
              "name": "Do While"
            }
          ]
        },
        {
          "name": "Message Box and Conditions",
          "children": [
            {
              "name": "Using the Message Box and Input Box"
            },
            {
              "name": "If Condition"
            },
            {
              "name": "Select Case"
            }
          ]
        },
        {
          "name": "Worksheet Functions",
          "children": [
            {
              "name": "SUM, SUMIF(S), COUNT(A), COUNTIF(S)"
            },
            {
              "name": "MATCH, VLOOKUP, HLOOKUP and INDEX"
            },
            {
              "name": "MAX, MIN, LARGE, AND SMALL"
            },
            {
              "name": "RIGHT, LEFT, MID, LEN"
            }
          ]
        },
        {
          "name": "Data Segregation",
          "children": [
            {
              "name": "Segregating the data in defferent tables, sheets and workbooks"
            }
          ]
        },
        {
          "name": "Data Consolidation",
          "children": [
            {
              "name": "Pull the data from different workbooks:-"
            },
            {
              "name": "According To the file extension condition, by using formula, by folder"
            }
          ]
        },
        {
          "name": "User Defined Function",
          "children": [
            {
              "name": "Creating the formulas according to the user requirement"
            },
            {
              "name": "Creating the Connection"
            }
          ]
        },
        {
          "name": "User form",
          "children": [
            {
              "name": "Creating the user form"
            },
            {
              "name": "Tools – Textbox, Label, Option Button, Scroll Bar, List box, Spin Button,"
            },
            {
              "name": "Combo box, Check Box,"
            },
            {
              "name": "Customize the user form"
            }
          ]
        },
        {
          "name": "Auto mail",
          "children": [
            {
              "name": "Sending Mails through excel"
            }
          ]
        },
        {
          "name": "Interview Preparation",
          "children": [
            {
              "name": "How to transform your previous project done in your company into excel/vba based projects."
            }
          ]
        },
        {
          "name": "Real-time Projects",
          "children": [
            {
              "name": "Our faculties who are presently working in diff MNC’s  they will interact with the students."
            }
          ]
        },
        {
          "name": "Tests/Random Tasks",
          "children": []
        },
        {
          "name": "Certification",
          "children": []
        }
      ],
      "content": {
        "mainHeader": "Benefits of learning VBA",
        "subMainHeader": [
          "One way to think of VBA is as a tool to work with Excel. If you become master in Excel, VBA will be a ready cup of Tea. VBA is also one of the easiest way to automate processes or reports. It doesn’t require installing anything on the clients computer. Any user can open up Excel and run VBA code.",
          "If you’re a technology consultant you should know a programming language. VBA is a fine option which doesn’t require any basic programming language. You should also know at least a little SQL."
        ],
        "data": [
          {
            "header": "Benefits of learning VBA.",
            "list": [
              "It’s a tool of time saving tricks which can make you more productive and make you awesome techie in the office and stand out of your colleagues.",
              "Sometimes using funky formulae makes you feel burden but if you know VBA, you can create handy user defined functions and use it in spreadsheet.",
              "VBA to automate some task that would take ages to do by hand.",
              "The candidate can build simple and user-friendly programs to perform tedious excel task.",
              "All the organization work is based on Microsoft Excel. The problem is how quickly you manage data for successful business. For this, you need a programming language skill to develop the software for quick working on Microsoft Excel.",
              "Knowing Excel can master you in manipulating data but automating those works using VBA can make you ultra-legend.",
              "Segregating the data based on criteria or condition can be done through Excel but it takes maximum time but if you make it through VBA it is a matter of seconds.",
              "Consolidation of data which are held in different sheets or workbook even in different folders can be easily accessed and automated.",
              "This makes the business process easy. Hence the knowledge of Visual Basic application is crucial for any employee."
            ]
          },
          {
            "header": "Job Opportunities.",
            "list": [
              "VBA Developer",
              "Report developer",
              "Data Analyst",
              "Metrics and Analytics Specialist",
              "MIS Executive",
              "Financial Analyst",
              "Market Research Analyst",
              "Big Data Engineer",
              "Big Data Analytics Architect",
              "Big Data Solution Architect and more"
            ]
          }
        ]
      }
    },
    {
      "name": "Access",
      "children": [
        {
          "name": "Real-time Projects",
          "children": []
        }
      ]
    },
    {
      "name": "SQL",
      "children": [
        {
          "name": "Data Definition Language (DDL) Statements",
          "children": [
            {
              "name": "Create"
            },
            {
              "name": "Alter"
            },
            {
              "name": "drop"
            },
            {
              "name": "schema objects"
            }
          ]
        },
        {
          "name": "Data Manipulation Language (DML) Statements",
          "children": [
            {
              "name": "Delete"
            },
            {
              "name": "Insert"
            },
            {
              "name": "Select"
            },
            {
              "name": "Update"
            },
            {
              "name": "Truncate"
            }
          ]
        },
        {
          "name": "Transaction Control Language Statements",
          "children": [
            {
              "name": "Commit"
            },
            {
              "name": "Rollback"
            },
            {
              "name": "Save point"
            },
            {
              "name": "Set transaction"
            }
          ]
        },
        {
          "name": "Data Control Languages",
          "children": [
            {
              "name": "Grant"
            },
            {
              "name": "Revoke"
            }
          ]
        },
        {
          "name": "Operators",
          "children": [
            {
              "name": "What is an Operator in SQL? "
            },
            {
              "name": "SQL Arithmetic Operators"
            },
            {
              "name": "Arithmetic Operators – Examples "
            },
            {
              "name": "SQL Comparison Operators"
            },
            {
              "name": "Comparison Operators - Examples"
            },
            {
              "name": "SQL Logical Operators"
            },
            {
              "name": "Logical Operators – Examples"
            },
            {
              "name": "Wildcards"
            },
            {
              "name": "Wildcard – Examples"
            }
          ]
        },
        {
          "name": "Expressions",
          "children": [
            {
              "name": "Boolean Expressions"
            },
            {
              "name": "Numeric Expressions"
            },
            {
              "name": "Date Expressions"
            }
          ]
        },
        {
          "name": "Constraints",
          "children": [
            {
              "name": "Not null constraint"
            },
            {
              "name": "Default constraint"
            },
            {
              "name": "Unique constraint"
            },
            {
              "name": "Primary key"
            },
            {
              "name": "Foreign key"
            },
            {
              "name": "Check "
            },
            {
              "name": "Dropping constraints"
            },
            {
              "name": "Integrity constraints"
            }
          ]
        },
        {
          "name": "Sub Queries",
          "children": [
            {
              "name": "Sub queries with the SELECT Statement"
            },
            {
              "name": "Sub queries with the INSERT Statement"
            },
            {
              "name": "Sub queries with the UPDATE Statement"
            },
            {
              "name": "Sub queries with the DELETE Statement."
            }
          ]
        },
        {
          "name": "Joins",
          "children": [
            {
              "name": "Inner join"
            },
            {
              "name": "Left join"
            },
            {
              "name": "Right join "
            },
            {
              "name": "Full join"
            },
            {
              "name": "Self-Join"
            },
            {
              "name": "Unions clause"
            },
            {
              "name": "The union all clause"
            },
            {
              "name": "Intersect clause"
            },
            {
              "name": "Except clause"
            }
          ]
        }
      ],
      "content": {
        "mainHeader": "Benefits of learning SQL",
        "subMainHeader": [
          "Here, you’ll learn to use Structured Query Language (SQL) to extract and analyze data stored in database. You’ll learn how to extract data, join tables together and perform aggregations. Then you’ll learn to do more complex analysis and manipulations using sub queries, temp tables, and window functions. By the end of the course, you’ll be able to write efficient SQL queries to successfully handle a variety of data analysis tasks."
        ],
        "data": [
          {
            "list": [
              "You will come to know what are libraries, tables and fields.",
              "What are the soft wares used to get or extract data from database.",
              "SQL will enable you to access and analyze this data with ease.",
              "The logic behind SQL is very similar to any other tool or language that used for data analysis (excel, VBA)."
            ]
          },
          {
            "header": "Job opportunities.",
            "list": [
              "MIS Executive",
              "Database Engineer",
              "Database Migration Engineer",
              "Data Analyst",
              "Reporting Engineer",
              "BI Solution Architect",
              "BI/Business Analyst",
              "BI Manager",
              "NoSQL DBA"
            ]
          }
        ]
      }
    },
    {
      "name": "Tally",
      "children": [
        {
          "name": "Basics of Accounting",
          "children": [
            {
              "name": "Types of Accounts, Golden Rules of Accounting, Accounting Principles, Concepts and Conventions, Double Entry System of Book Keeping, Mode of Accounting, Financial Statements, Transactions, Recording Transactions"
            }
          ]
        },
        {
          "name": "F1undamentals of Tally.ERP 9",
          "children": [
            {
              "name": "Getting Functional with Tally.ERP 9"
            },
            {
              "name": "Creation / Setting up of Company in Tally.ERP 9"
            }
          ]
        },
        {
          "name": "Accounting Masters in Tally.ERP 9",
          "children": [
            {
              "name": "F11 : Features"
            },
            {
              "name": "F12 : Configurations"
            },
            {
              "name": "Setting up Account Heads"
            }
          ]
        },
        {
          "name": "Inventory in Tally.ERP 9",
          "children": [
            {
              "name": "Stock Groups"
            },
            {
              "name": "Stock Categories"
            },
            {
              "name": "Godowns / Locations"
            },
            {
              "name": "Units of Measure"
            },
            {
              "name": "Stock Items"
            },
            {
              "name": "Creating Inventory Masters for National Traders."
            }
          ]
        },
        {
          "name": "Voucher Entry in Tally.ERP 9",
          "children": [
            {
              "name": "Accounting Vouchers"
            },
            {
              "name": "Inventory Vouchers"
            },
            {
              "name": "Invoicing"
            }
          ]
        },
        {
          "name": "Advanced Accounting in Tally.ERP 9",
          "children": [
            {
              "name": "Bill-wise Details"
            },
            {
              "name": "Voucher Class"
            },
            {
              "name": "Multiple Currencies"
            },
            {
              "name": "Bank  Reconciliation"
            }
          ]
        },
        {
          "name": "Advanced Inventory in Tally.ERP 9",
          "children": [
            {
              "name": "Order Processing"
            },
            {
              "name": "Tracking Numbers"
            },
            {
              "name": "Batch- wise Details"
            },
            {
              "name": "Bill of Materials (BoM)"
            },
            {
              "name": "Price Levels and Price Lists"
            },
            {
              "name": "Stock Valuation"
            },
            {
              "name": "Zero Valued Entries"
            },
            {
              "name": "Different Actual and Billed Quantities"
            }
          ]
        },
        {
          "name": "Point of Sale (POS)",
          "children": [
            {
              "name": "Features of Point of Sale (POS) in Tally.ERP 9"
            },
            {
              "name": "Entering POS Transactions"
            }
          ]
        },
        {
          "name": "Technological Advantages of Tally.ERP 9",
          "children": [
            {
              "name": "TallyVault"
            },
            {
              "name": "Security Control"
            },
            {
              "name": "Backup and Restore"
            },
            {
              "name": "Split Company Data"
            },
            {
              "name": "Export and Import of Data"
            },
            {
              "name": "Online Help"
            },
            {
              "name": "Printing of Reports and Cheques"
            }
          ]
        },
        {
          "name": "Application Management and Controls",
          "children": [
            {
              "name": "Concept of Control Centre"
            },
            {
              "name": "Installing & Activating Tally.ERP 9"
            },
            {
              "name": "Logging to Control Centre"
            },
            {
              "name": "Managing Accounts using Control Centre"
            }
          ]
        },
        {
          "name": "Tax Deducted at Source",
          "children": [
            {
              "name": "Basic concepts of TDS"
            },
            {
              "name": "Configuring TDS in Tally.ERP 9"
            },
            {
              "name": "Creation of Masters"
            },
            {
              "name": "Processing Transactions"
            },
            {
              "name": "TDS Reports"
            }
          ]
        },
        {
          "name": "Tax Collected at Source",
          "children": [
            {
              "name": "Basic Concepts of TCS"
            },
            {
              "name": "Configuring Tally.ERP 9 for TCS"
            },
            {
              "name": "Creating Masters"
            },
            {
              "name": "Entering Transactions"
            }
          ]
        },
        {
          "name": "Payroll Accounting and Compliance",
          "children": [
            {
              "name": "Configuring Payroll in Tally.ERP 9"
            },
            {
              "name": "Creating Payroll Masters"
            },
            {
              "name": "Processing Payroll in Tally.ERP 9"
            },
            {
              "name": "Accounting for Employer PF Contributions"
            }
          ]
        },
        {
          "name": "Goods and Services Tax (GST)",
          "children": [
            {
              "name": "About Goods and Services Tax (GST)"
            },
            {
              "name": "Activating Tally in GST"
            },
            {
              "name": "Setting Up GST (Company Level, Ledger Level or Inventory Level)"
            },
            {
              "name": "GST Taxes & Invoices"
            },
            {
              "name": "Understanding SGST, CGST & IGST"
            },
            {
              "name": "Creating GST Masters in Tally"
            }
          ]
        },
        {
          "name": "E-Way bill",
          "children": [
            {
              "name": "E-way bill configuration."
            },
            {
              "name": "E-way bill instructions."
            },
            {
              "name": "E-way applicability in transactions."
            },
            {
              "name": "Generating e-way bill (Single and Bulk)"
            }
          ]
        },
        {
          "name": "Purchase Voucher with GST",
          "children": [
            {
              "name": "Updating GST Number for Suppliers"
            },
            {
              "name": "Practical on Intra-State Purchase Entry in GST (SGST CGST)"
            },
            {
              "name": "Practical on Inter-State Purchase Entry in GST (IGST)"
            },
            {
              "name": "GST Purchase Entry for Unregistered Dealer in Tally"
            },
            {
              "name": "Reverse Charge Mechanism Entry for GST in Tally"
            }
          ]
        },
        {
          "name": "Sales Voucher with GST",
          "children": [
            {
              "name": "Updating GST Number for Suppliers"
            },
            {
              "name": "Practical on Intra-State Sales Entry in GST (SGST CGST)"
            },
            {
              "name": "Practical on Inter-State Sales Entry in GST (IGST)"
            },
            {
              "name": "Printing GST Sales Invoice from Tally ERP9 Software"
            }
          ]
        },
        {
          "name": "GST Reports and Returns",
          "children": [
            {
              "name": "GSTR 1 Consolidation"
            },
            {
              "name": "GSTR 2 Consolidation"
            },
            {
              "name": "GSTR 3B Consolidation"
            },
            {
              "name": "GSTR 4 Consolidation"
            }
          ]
        }
      ],
      "content": {
        "mainHeader": "Benefits of learning Tally",
        "subMainHeader": [
          "Tally.ERP 9 accounting software is widely preferred in India and throughout the globe approximately in 17 international locations.",
          "Tally gives the platform to report the financial transaction with excessive ease. Tally is designed in such a way that anyone irrespective of the field he/she is in can understand quickly .",
          "In modern accounting and economic global, Tally.ERP 9 Accounting Software is holistic and applicable because it offers numerous technology advantages.",
          "Tally software is a complete Accounting, Inventory, Taxation and Payroll software. Tally ERP 9 is the maximum recent as well as popular software program used by firms around the world.",
          "Tally 9 ERP software is considered as one of the best Accounting software worldwide. Tally is capable of handling almost any kind of business transactions. Tally ERP 9 software is being used by individuals and business corporate to maintain their books of Accounts. It is important to maintain record of all monetary transactions.",
          "Tally accounting software provides a solution around inventory management, stock management, invoicing, purchase order management, discounting, stock valuation methodology, etc."
        ],
        "data": [
          {
            "list": []
          },
          {
            "header": "Scope and benefits of tally erp 9",
            "list": [
              "most of the companies uses to record the transactions in tally software. so we can say that the demand of tally professional is also growing",
              "The undergraduate students can also opt training and start their job",
              "This sector offers tremendous freelancer accountant job opportunities.",
              "The fact is that every company needs an accountant, whether public, private or non-profit, individuals pursuing the finance course have the choice of finding."
            ]
          }
        ]
      }
    }
  ]