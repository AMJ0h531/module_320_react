function EmployeeListItem({name, title}) {
  return (
    <div className="employee-list-item">
      <div className="employee-avatar"></div>
      <div className="employee-info"></div>
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}

export default EmployeeListItem;














// {/* <h3>Employee Directory</h3>
// {/* <table>
//     <thead>
//         <tr>
//             <th>Name</th>
//             <th>Job Title</th>
//             <th>Department</th>
//             <th>Email</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>John Doe</td>
//             <td>Software Engineer</td>
//             <td>Engineering</td>
//             <td><a href="mailto:john.doe@example.com">john.doe@example.com</a></td>
//         </tr>
//         <tr>
//             <td>Jane Smith</td>
//             <td>Project Manager</td>
//             <td>Operations</td>
//             <td><a href="mailto:jane.smith@example.com">jane.smith@example.com</a></td>
//         </tr>
//         <tr>
//             <td>Peter Jones</td>
//             <td>UX Designer</td>
//             <td>Design</td>
//             <td><a href="mailto:peter.jones@example.com">peter.jones@example.com</a></td>
//         </tr>
//     </tbody>
// // </table> */} */}