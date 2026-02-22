// import EmployeePage from "./EmployeePage";
import Header from "./Header";

//import "./EmployeePage";

function EmployeeCard({employee = "Julie Taylor"}) {
  return (
    <div className="EmployeeCard">
      <div className="employee-details">
        <div className="employee-avatar-large"></div>
        <h2>{employee}</h2>
        <p>VP of Marketing</p>

        <div className="contact-info">
          <p>Call Office: 781-000-0002</p>
          <p>Call Mobile: 617-000-0002</p>
          <p>SMS: 617-000-0002</p>
          <p>Email: jtaylor@email.com</p>

          
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard;

// function EmployeeCard({ employee }) {
//   return (
//     <div className="card">
//       {/* Profile section */}
//       <div className="card__profile">
//         <img
//           className="card__photo"
//           src={employee.picture}
//           alt={employee.firstName + " " + employee.lastName}
//         />
//         <h2 className="card__name">
//           {employee.firstName} {employee.lastName}
//         </h2>
//         <p className="card__title">{employee.title}</p>
//       </div>
//       {/* Contact details */}
//       <ul className="card__details">
//         <li className="card__row">
//           <span className="card__label">Phone</span>
//           <span className="card__value">{employee.phone}</span>
//         </li>
//         <li className="card__row">
//           <span className="card__label">Email</span>
//           <span className="card__value">{employee.email}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }
