function fileGenerator(response) {
    var content = `# ${response.title}
    ${response.logo}[${response.userName}](${response.GitHub}) [Email Me](${response.email})
    ReadMe shortcut.  ${response.license}
    
    
    
    Table of Contents
    * [Repository Description](#Repository-Description)
    * [Installation Instructions](#Install)
    * [Usage Information](#Usage)
    * [Repositiory Goal](#Criterea)
    * [Future Project](#Future-Project)
    
    
    Repository Description
     [Back to Table of Contents](#Table-of-Contents)
    ${response.description}
    
    
    
    
    

    [Back to Table of Contents](#Table-of-Contents)
    1.   I want a command-line application that accepts user input.
    2.   I want a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    3.   I want my project title to display as the title of the README.
    4.   I want a description, installation instructions, usage information, contribution guidelines, and test instructions.
    5.   I want to choose a license for my application from a list of options.
    6.   I want to enter my GitHub username; this is added to the section of the README entitled Questions, with a link to my GitHub profile.
    7.   I want to enter my email address; this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
    8.   When I click on thetable of contents; then I am taken to the corresponding section of the README. 
    
    Contribution Guidelines
    [Back to Table of Contents](#Table-of-Contents)
    ${response.contribute}
    
    
    
    Test Instructions
    [Back to Table of Contents](#Table-of-Contents)
    1.  ${response.test}
    2.  ${response.test2}
    3.  ${response.test3}
    
    
    Overview: Accomplishments
     Workflow [Back to Table of Contents](#Table-of-Contents)
    ${response.accomplish}
    
    
   Screenshots
    [Back to Table of Contents](#Table-of-Contents)
     Demo![script.js](${response.scriptjs})
    
     Repository Goal Criterea
     [Back to Table of Contents](#Table-of-Contents)
    ${response.endgoal}
    
    License
    ${response.license}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    return content;
};

module.exports = fileGenerator;