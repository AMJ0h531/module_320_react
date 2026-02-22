import EmployeeListItem from "./EmployeeListItem";
function EmployeeList() {
    return (
        <div className="employee-list">
           <EmployeeListItem 
           name="James King" 
           title="President and CEO" />

           <EmployeeListItem 
           name="Julie Taylor" 
           title="VP of Marketing"/>

           <EmployeeListItem
            name="Eugene Lee"
            title="CFO"/>

           <EmployeeListItem
           name="John Williams"
           title="VP of Engineering"/>
        </div>
    )
}

export default EmployeeList;






// {/* <head>
//     <title>Employee List</title>
// </head>
// <body>

// <h2>Our Employees</h2>

// <ul>
//     <li>John Doe</li>
//     <li>Jane Smith</li>
//     <li>Peter Jones</li>
// </ul>

// </body>
//  */}





// <!-- <!DOCTYPE html>
// <html>
// <head>
//     <title>Employee List Table</title>
//     <style>
//         table {
//             width: 50%;
//             border-collapse: collapse;
//             margin: 20px 0;
//         }
//         th, td {
//             border: 1px solid #ddd;
//             padding: 8px;
//             text-align: left;
//         }
//         th {
//             background-color: #f2f2f2;
//         }
//     </style>
// </head>
// <body>

// <h2>Employee List</h2>

// <table>
//     <thead>
//         <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Position</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>1001</td>
//             <td>John Doe</td>
//             <td>Software Engineer</td>
//         </tr>
//         <tr>
//             <td>1002</td>
//             <td>Jane Smith</td>
//             <td>Project Manager</td>
//         </tr>
//         <tr>
// 0            <td>1003</td>
//             <td>Peter Jones</td>
//             <td>UX Designer</td>
//         </tr>
//     </tbody>
// </table>

// </body>
// </html> -->