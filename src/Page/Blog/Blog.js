import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ShowRoute from "../Shared/ShowRoute/ShowRoute"; 
import './Blog.css'; 
const Blog = () => {
   useTitle('Mr. Dentist'); 
   return (
      <div className='blog-container'>
          <ShowRoute first='Blog'></ShowRoute>
         <div className=' p-10  gap-10  grid grid-cols-1 md:grid-cols-2 mt-5 '>
            <div className=''>
               <h3 className='text-orange-500 bg-black px-2 py-5 text-2xl '>Question 01: <br /> Difference Between SQL and NoSQL ??  </h3>
               <div>
                  <table>
                        <thead>
                           <tr>
                              <th>Serial No:</th>
                              <th>SQL </th>
                              <th>NoSQL</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>01</td>
                              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                              <td>Non-relational or distributed database system.</td>
                           </tr>
                           <tr>
                              <td>02</td>
                              <td>These databases have fixed or static or predefined schema</td>
                              <td>They have dynamic schema</td>
                           </tr>
                           <tr>
                              <td>03</td>
                              <td>These databases are not suited for hierarchical data storage.</td>
                              <td>These databases are best suited for hierarchical data storage.</td>
                           </tr>
                           <tr>
                              <td>04</td>
                              <td>These databases are best suited for complex queries</td>
                              <td>These databases are not so good for complex queries</td>
                           </tr>
                           <tr>
                              <td>05</td>
                              <td>MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                              <td>MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                           </tr>
                        </tbody>
                  </table>
               </div>
            </div>
            <div>
               <h3>Question 02: <br /> What is jwt ?? How Jwt is work ?? </h3>
               <p>Ans: JWT means json web token . JWt is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
               <p>When a user login server generate a jsonwebtoken and and send the token to client. Basically JSON WEB TOKEN used for authorization. When a user want to access  data by hitting then user send the json web token which token he/she get after login .Then token send client side to server side with  fetch header .  </p>
               <p>After  hitting api server verify server generated web token and authorization header token. If they don't match send and error with status code .</p>
               <p>If authorization header token verified then user can access api.</p>
            </div>
            <div>
               <h3>Question 03: <br /> What is the difference between Javascript and Node js ?? </h3>
               <div>
                  <table>
                     <thead>
                        <tr>
                           <th>s.i: </th>
                           <th> Javascript </th>
                           <th> Node </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>01</td>
                           <td>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</td>
                           <td>It's a bridge, open-source Js runtime environment for executing Js on the server.</td>
                        </tr>
                        <tr>
                           <td>02</td>
                           <td>Javascript Mostly use on client side.</td>
                           <td>Node js mostly used on server side.</td>
                        </tr>
                        <tr>
                           <td>03</td>
                           <td>It's a new release of the ECMA script that works on the C++-based V8 engine.</td>
                           <td>C++, C, and JavaScript are used.</td>
                        </tr>
                        <tr>
                        <td>04</td>
                           <td>TypedJS, RamdaJS, and other JavaScript frameworks are examples.</td>
                           <td>Nodejs modules include Lodash and Express. All of these modules must be imported from npm.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div>
               <h3> Question 4: <br />How does nodejs handle multiple user request??</h3>
               <div>
                  <p>Ans: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
               </div>
            </div>

         </div>
         

      </div>
   );
};

export default Blog;