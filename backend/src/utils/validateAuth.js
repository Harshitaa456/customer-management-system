// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function validateSignupInput(data) {
//   const errors = [];
//   const sanitized = {};

//   const name = typeof data.name === "string" ? data.name.trim() : "";
//   const email = typeof data.email === "string" ? data.email.trim() : "";
//   const password = typeof data.password === "string" ? data.password : "";

//   if (!name) {
//     errors.push("Name is required");
//   } else if (name.length < 2) {
//     errors.push("Name must be at least 2 characters");
//   } else {
//     sanitized.name = name;
//   }

//   if (!email) {
//     errors.push("Email is required");
//   } else if (!EMAIL_REGEX.test(email)) {
//     errors.push("Please enter a valid email address");
//   } else {
//     sanitized.email = email.toLowerCase();
//   }

//   if (!password) {
//     errors.push("Password is required");
//   } else if (password.length < 6) {
//     errors.push("Password must be at least 6 characters");
//   } else {
//     sanitized.password = password;
//   }

//   return { errors, sanitized };
// }

// function validateLoginInput(data) {
//   const errors = [];
//   const sanitized = {};

//   const email = typeof data.email === "string" ? data.email.trim() : "";
//   const password = typeof data.password === "string" ? data.password : "";

//   if (!email) {
//     errors.push("Email is required");
//   } else if (!EMAIL_REGEX.test(email)) {
//     errors.push("Please enter a valid email address");
//   } else {
//     sanitized.email = email.toLowerCase();
//   }

//   if (!password) {
//     errors.push("Password is required");
//   } else {
//     sanitized.password = password;
//   }

//   return { errors, sanitized };
// }

// module.exports = {
//   validateSignupInput,
//   validateLoginInput,
// };
