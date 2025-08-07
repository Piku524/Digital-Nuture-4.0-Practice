import React from "react";

// CourseDetails Component
function CourseDetails() {
  return (
    <div style={sectionStyle}>
      <h2>Course Details</h2>
      <p>
        <strong>Angular</strong><br />
        4/5/2021
      </p>
      <p>
        <strong>React</strong><br />
        6/3/20201
      </p>
    </div>
  );
}

// BookDetails Component
function BookDetails() {
  return (
    <div style={{ ...sectionStyle, borderLeft: '3px solid green', borderRight: '3px solid green' }}>
      <h2>Book Details</h2>
      <p>
        <strong>Master React</strong><br />
        670
      </p>
      <p>
        <strong>Deep Dive into Angular 11</strong><br />
        800
      </p>
      <p>
        <strong>Mongo Essentials</strong><br />
        450
      </p>
    </div>
  );
}

// BlogDetails Component
function BlogDetails() {
  return (
    <div style={sectionStyle}>
      <h2>Blog Details</h2>
      <p>
        <strong>React Learning</strong><br />
        <em>Stephen Biz</em><br />
        Welcome to learning React!
      </p>
      <p>
        <strong>Installation</strong><br />
        <em>Schwezdneier</em><br />
        You can install React from npm.
      </p>
    </div>
  );
}

// Shared style for each section
const sectionStyle = {
  padding: '10px',
  width: '30%',
  boxSizing: 'border-box',
};

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', fontFamily: 'Arial' }}>
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;
