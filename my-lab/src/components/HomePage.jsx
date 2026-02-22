import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import EmployeeCard from "./EmployeeCard";

function Homepage() {
  const headerTitle = "Employee Directory"
  const employeeTitle = "Employee"
  return (
    
    <>
      <main className="container ">
        <div className="row">
          <div className="col">
            <Header title={headerTitle}/>
            <SearchBar />
            <EmployeeList />
          </div>
          <div className="col">
            <Header title={employeeTitle}/>
            <EmployeeCard />
          </div>
        </div>
      </main>
    </>
  );
}

export default Homepage;


















// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <!-- The viewport meta tag ensures proper rendering and touch zooming on mobile devices -->
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Awesome Homepage</title>
//     <!-- You can link an external CSS file here for styling -->
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>

//     <header>
//         <h1>Welcome to My Website</h1>
//         <nav>
//             <!-- Navigation links -->
//             <a href="index.html">Home</a>
//             <a href="about.html">About</a>
//             <a href="contact.html">Contact</a>
//         </nav>
//     </header>

//     <main>
//         <section>
//             <h2>About Me</h2>
//             <p>This is a paragraph about the homepage content. I am a web developer and I love to create websites.</p>
//             <button>Learn More</button>
//         </section>

//         <section>
//             <h2>My Work</h2>
//             <!-- Content about your projects, skills, etc. goes here -->
//             <p>Details about projects or skills.</p>
//         </section>
//     </main>

//     <footer>
//         <!-- Footer content, e.g., copyright, social media links -->
//         <p>&copy; 2024 My Website</p>
//     </footer>

//     <!-- You can link an external JavaScript file here for interactivity -->
//     <script src="script.js"></script>

// </body>
// </html>